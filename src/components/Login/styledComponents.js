import styled from 'styled-components'

export const LoginContainer = styled.div`
  background-color: ${props => (props.isDark ? '#181818' : '#ffffff')};
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  max-width: 450px;
  padding: 20px;
  padding-bottom: 50px;
  border-radius: 10px;
  background-color: ${props => (props.isDark ? '#000000' : ' #ffffff')};
  box-shadow: 6px 6px 16px ${props => (props.isDark ? '#0f0f0f' : '#f1f1f1')};
`
export const LoginNxtWatchLogo = styled.img`
  width: 150px;
  height: 40px;
  align-self: center;
  margin: 20px;
  margin-bottom: 30px;
`
export const CustomLabel = styled.label`
  color: ${props => (props.isDark ? '#ffffff' : '#475569')};
  font-size: 14px;
  font-family: 'Roboto';
  align-self: flex-start;
  font-weight: bold;
  line-height: 2;
  margin-top: 10px;
`
export const CustomInput = styled.input`
  background-color: ${props => (props.isDark ? '#0f0f0f' : '#ffffff')};
  border: 1px solid ${props => (props.isDark ? ' #616e7c' : '#e2e8f0')};
  color: #94a3b8;
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 500;
  padding-left: 7px;
  border-radius: 3px;
  padding: 10px;
  padding-left: 14px;
  margin-bottom: 10px;
  width: 100%;
  height: 48px;
  outline: none;
`
export const ShowPasswordContainer = styled.div`
  display: flex;
  align-self: flex-start;
  margin-bottom: 20px;
  margin-top: 0px;
`

export const CustomCheckBox = styled.input`
  width: 20px;
  height: 20px;
  background-color: transparent;
  border: 1px solid #1e293b;
  margin-right: 10px;
`
export const CheckBoxCustomLabel = styled.label`
  color: ${props => (props.isDark ? '#f9f9f9' : '#1e293b')};
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 700px;
  align-self: center;
`
export const CustomButton = styled.button`
  color: #ffffff;
  width: 100%;
  height: 50px;
  background-color: #4f46e5;
  border-width: 0px;
  text-align: center;
  font-family: 'Roboto';
  font-size: 18px;
  border-radius: 10px;
  cursor: pointer;
  outline: none;
  font-weight: 500;
`
export const CustomError = styled.p`
  color: #ff0b37;
  font-size: 18px;
  font-family: 'Roboto';
  align-self: flex-start;
`
