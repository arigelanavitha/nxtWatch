import {Link, withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import {Popup} from 'reactjs-popup'
import MenuItems from '../MenuItems'
import NxtWatchContext from '../../Context/NxtWatchContext'
// import 'reactjs-popup/dist/index.css'
import './index.css'
import {
  NavBarContainer,
  NxtWatchLogo,
  NavItemsSgContainer,
  CustomButton,
  StyledDarKIcon,
  StyledLightIcon,
  StyledHamburgerIcon,
  StyledLogoutIcon,
  MenuPopUpContainer,
  StyledCloseIcon,
  CloseBtn,
  LogoutContainer,
  MenuItemsContainer,
  LogoutHeading,
  LogoutBtnContainer,
  CustomLogoutBtn,
  NavItemsLgContainer,
  ProfileContainer,
  ProfileImg,
  CustomLgLogoutBtn,
} from './styledComponents'

const Header = props => (
  <NxtWatchContext.Consumer>
    {values => {
      const {isDark, onModeChange, onUpdateRoute} = values
      const webSiteLogoUrl = isDark
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
      const onChangeMode = () => {
        onModeChange()
      }
      const onClickLogout = () => {
        const {history} = props
        Cookies.remove('jwt_token')
        history.replace('/login')
      }
      const theme = isDark ? 'dark' : 'light'
      return (
        <NavBarContainer isDark={isDark}>
          <Link to="/">
            <NxtWatchLogo
              src={webSiteLogoUrl}
              alt="website logo"
              onClick={() => onUpdateRoute('HOME')}
            />
          </Link>
          <NavItemsSgContainer>
            <CustomButton onClick={onChangeMode} data-testid={theme}>
              {isDark ? <StyledLightIcon /> : <StyledDarKIcon />}
            </CustomButton>
            <Popup
              trigger={
                <CustomButton type="button">
                  <StyledHamburgerIcon isDark={isDark} />
                </CustomButton>
              }
              modal
              className="popup-content"
            >
              {close => (
                <MenuPopUpContainer isDark={isDark}>
                  <CloseBtn
                    type="button"
                    onClick={() => {
                      close()
                    }}
                  >
                    <StyledCloseIcon isDark={isDark} />
                  </CloseBtn>
                  <MenuItemsContainer isDark={isDark}>
                    <MenuItems />
                  </MenuItemsContainer>
                </MenuPopUpContainer>
              )}
            </Popup>
            <Popup
              trigger={
                <CustomButton>
                  <StyledLogoutIcon isDark={isDark} />
                </CustomButton>
              }
              modal
            >
              {close => (
                <LogoutContainer isDark={isDark}>
                  <LogoutHeading isDark={isDark}>
                    Are you sure want to logout?
                  </LogoutHeading>
                  <LogoutBtnContainer>
                    <CustomLogoutBtn
                      brColor="true"
                      color="true"
                      onClick={() => close()}
                    >
                      Cancel
                    </CustomLogoutBtn>
                    <CustomLogoutBtn bgColor="true" onClick={onClickLogout}>
                      Confirm
                    </CustomLogoutBtn>
                  </LogoutBtnContainer>
                </LogoutContainer>
              )}
            </Popup>
          </NavItemsSgContainer>

          <NavItemsLgContainer>
            <CustomButton onClick={onChangeMode} data-testid="theme">
              {isDark ? <StyledLightIcon /> : <StyledDarKIcon />}
            </CustomButton>
            <ProfileContainer>
              <ProfileImg
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                alt="profile"
              />
            </ProfileContainer>
            <Popup
              trigger={
                <CustomLgLogoutBtn isDark={isDark}>Logout</CustomLgLogoutBtn>
              }
              modal
            >
              {close => (
                <LogoutContainer isDark={isDark}>
                  <LogoutHeading isDark={isDark}>
                    Are you sure want to logout?
                  </LogoutHeading>
                  <LogoutBtnContainer>
                    <CustomLogoutBtn
                      brColor="true"
                      color="true"
                      onClick={() => close()}
                    >
                      Cancel
                    </CustomLogoutBtn>
                    <CustomLogoutBtn bgColor="true" onClick={onClickLogout}>
                      Confirm
                    </CustomLogoutBtn>
                  </LogoutBtnContainer>
                </LogoutContainer>
              )}
            </Popup>
          </NavItemsLgContainer>
        </NavBarContainer>
      )
    }}
  </NxtWatchContext.Consumer>
)
export default withRouter(Header)
