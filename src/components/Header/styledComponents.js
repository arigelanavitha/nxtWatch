import styled from 'styled-components'
import {MdDarkMode, MdOutlineLightMode, MdLogout} from 'react-icons/md'
import {GiHamburgerMenu} from 'react-icons/gi'
import {AiOutlineClose} from 'react-icons/ai'

export const NavBarContainer = styled.nav`
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 10px;
  padding-right: 10px;
  background-color: ${props => (props.isDark ? '#212121' : '#ffffff')};
  @media screen and (min-width: 768px) {
    padding: 20px;
    padding-left: 30px;
    padding-right: 30px;
    height: 90px;
  }
`
export const NxtWatchLogo = styled.img`
  cursor: pointer;
  outline: none;
  background-color: transparent;
  width: 140px;
  height: 28px;
`

export const NavItemsSgContainer = styled.div`
  display: flex;
  list-style-type: none;
  padding-left: 0px;
  align-items: center;
  @media screen and (min-width: 768px) {
    display: none;
  }
`
export const NavItemsLgContainer = styled.div`
  display: none;
  list-style-type: none;
  padding-left: 0px;
  align-items: center;
  @media screen and (min-width: 768px) {
    display: flex;
  }
`
export const StyledDarKIcon = styled(MdDarkMode)`
  color: #000000;
  width: 30px;
  height: 30px;
  @media screen and (min-width: 768px) {
    width: 40px;
    height: 40px;
  }
`
export const StyledLightIcon = styled(MdOutlineLightMode)`
  color: #ffffff;
  width: 30px;
  height: 30px;
  @media screen and (min-width: 768px) {
    width: 40px;
    height: 40px;
  }
`
export const StyledHamburgerIcon = styled(GiHamburgerMenu)`
  color: ${props => (props.isDark ? '#ffffff' : '#000000')};
  width: 30px;
  height: 30px;
  @media screen and (min-width: 768px) {
    display: none;
  }
`
export const StyledLogoutIcon = styled(MdLogout)`
  color: ${props => (props.isDark ? '#ffffff' : '#000000')};
  width: 30px;
  height: 30px;
  @media screen and (min-width: 768px) {
    display: none;
  }
`
export const CustomButton = styled.button`
  outline: none;
  background-color: transparent;
  border-width: 0px;
  display: flex;
  flex-direction: center;
  align-items: center;
  cursor: pointer;
  width: 50px;
  height: 50px;
  color: ${props => (props.isDark ? '#ffffff' : '#000000')};
  @media screen and (min-width: 768px) {
    width: 70px;
    height: 70px;
    margin-right: 8px;
  }
`
export const CustomLogOutButton = styled.button`
  outline: none;
  background-color: transparent;
  border-width: 0px;
  display: flex;
  flex-direction: center;
  align-items: center;
  cursor: pointer;
  width: 40px;
  height: 40px;
`
export const PopUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  background-color: ${props => (props.isDark ? ' #212121' : '#ffffff')};
`
export const StyledCloseIcon = styled(AiOutlineClose)`
  height: 30px;
  width: 30px;
  color: ${props => (props.isDark ? '#ffffff' : '#000000')};
`
export const MenuPopUpContainer = styled.div`
  padding: 10px;
  padding-top: 20px;
  width: 100%;
  height: 100vh;
  background-color: ${props => (props.isDark ? ' #000000' : '#ffffff')};
  display: flex;
  flex-direction: column;
`
export const CloseBtn = styled.button`
  align-self: flex-end;
  outline: none;
  cursor: pointer;
  background-color: transparent;
  border-width: 0px;
`
export const LogoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${props => (props.isDark ? '#212121' : '#ffffff')};
  border-radius: 20px;
  padding-top: 20px;
  padding-left: 40px;
  padding-right: 40px;
  padding-bottom: 40px;
`
export const MenuItemsContainer = styled.div`
  width: 100%;
  height: 100%;
  align-self: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${props => (props.isDark ? '#121212' : '#ffffff')};
`
export const LogoutHeading = styled.p`
  font-size: 18px;
  font-family: 'Roboto';
  color: ${props => (props.isDark ? ' #d7dfe9' : '#00306e')};
  font-weight: 400;
`
export const LogoutBtnContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
`
export const CustomLogoutBtn = styled.button`
  background-color: ${props => (props.bgColor ? ' #3b82f6' : 'transparent')};
  color: ${props => (props.color ? '#94a3b8' : '#ffffff')};
  font-size: 16px;
  font-family: 'Roboto';
  border-radius: 3px;
  border: 2px solid ${props => (props.brColor ? '#94a3b8' : '#3b82f6')};
  width: 100px;
  height: 45px;
  padding: 5px;
  outline: none;
  cursor: pointer;
`
export const ProfileContainer = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  margin-right: 50px;
`
export const ProfileImg = styled.img`
  width: 40px;
  height: 40px;
`
export const CustomLgLogoutBtn = styled.button`
  background-color: transparent;
  height: 45px;
  width: 130px;
  color: ${props => (props.isDark ? '#ffffff' : '#3b82f6')};
  border: 2px solid ${props => (props.isDark ? '#ffffff' : '#3b82f6')};
  border-radius: 5px;
  padding: 8px;
  padding-left: 12px;
  padding-right: 12px;
  font-family: 'Roboto';
  font-size: 18px;
  font-weight: 500;
`
