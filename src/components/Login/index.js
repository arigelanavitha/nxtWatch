import {Component} from 'react'

import {Redirect} from 'react-router-dom'

import Cookies from 'js-cookie'

import NxtWatchContext from '../../Context/NxtWatchContext'

import {
  LoginContainer,
  LoginForm,
  LoginNxtWatchLogo,
  CustomLabel,
  CustomInput,
  ShowPasswordContainer,
  CustomCheckBox,
  CheckBoxCustomLabel,
  CustomButton,
  CustomError,
} from './styledComponents'

export default class Login extends Component {
  state = {
    username: '',
    password: '',
    showPassword: 'password',
    isError: false,
    errorMsg: '',
  }

  onLoginFailure = errorMsg => {
    this.setState({
      isError: true,
      errorMsg,
    })
  }

  onLoginSuccess = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    history.replace('/')
  }

  onSubmitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const loginUrl = 'https://apis.ccbp.in/login'
    const userDetails = {
      username,
      password,
    }
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(loginUrl, options)
    const fetchedData = await response.json()
    if (response.status === 200) {
      this.onLoginSuccess(fetchedData.jwt_token)
    } else {
      this.onLoginFailure(fetchedData.error_msg)
    }
  }

  onShowPassword = event => {
    this.setState(() => {
      if (event.target.checked) {
        return {showPassword: 'text'}
      }
      return {showPassword: 'password'}
    })
  }

  onUpdateUsername = event => {
    this.setState({
      username: event.target.value,
    })
  }

  onUpdatePassword = event => {
    this.setState({
      password: event.target.value,
    })
  }

  render() {
    const {username, password, showPassword, isError, errorMsg} = this.state
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {isDark} = value
          const nxtWatchLogo = isDark
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
          return (
            <LoginContainer isDark={isDark}>
              <LoginForm isDark={isDark}>
                <LoginNxtWatchLogo src={nxtWatchLogo} alt="nxt watch logo" />
                <CustomLabel htmlFor="username" isDark={isDark}>
                  USERNAME
                </CustomLabel>
                <CustomInput
                  type="text"
                  id="username"
                  placeholder="Username"
                  value={username}
                  onChange={this.onUpdateUsername}
                  isDark={isDark}
                />
                <CustomLabel htmFor="password" isDark={isDark}>
                  PASSWORD
                </CustomLabel>
                <CustomInput
                  id="password"
                  type={showPassword}
                  placeholder="Password"
                  value={password}
                  onChange={this.onUpdatePassword}
                  isDark={isDark}
                  visible
                />
                <ShowPasswordContainer>
                  <CustomCheckBox
                    type="checkbox"
                    id="checkBox"
                    onChange={this.onShowPassword}
                  />
                  <CheckBoxCustomLabel htmlFor="checkBox" isDark={isDark}>
                    Show Password
                  </CheckBoxCustomLabel>
                </ShowPasswordContainer>
                <CustomButton type="submit" onClick={this.onSubmitForm}>
                  Login
                </CustomButton>
                {isError && <CustomError>*{errorMsg}</CustomError>}
              </LoginForm>
            </LoginContainer>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}
