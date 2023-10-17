import styled from 'styled-components'
import {AiFillHome} from 'react-icons/ai'
import {BsFire} from 'react-icons/bs'
import {SiYoutubegaming} from 'react-icons/si'
import {BiListPlus} from 'react-icons/bi'

export const TabContainer = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  padding-left: 0px;
  background-color: ${props => (props.isDark ? '#212121' : '#ffffff')};
`
export const CustomTabItem = styled.li`
  display: flex;
  flex-direction: row;
  text-decoration: none;
  align-items: center;
  padding: 15px;
  outline: none;
  cursor: pointer;
  font-weight: ${props => (props.isActiveRoute ? 500 : 'none')};
  background-color: ${props => {
    if (props.isDark) {
      if (props.isActiveRoute) {
        return '#383838'
      }
      return 'transparent'
    }
    if (props.isActiveRoute) {
      return '#e2e8f0'
    }
    return 'transparent'
  }};
`
export const StyledHomeIcon = styled(AiFillHome)`
  width: 25px;
  height: 25px;
  color: ${props => (props.isActiveIcon ? '#ff0000' : '#616e7c')};
`
export const StyledFireIcon = styled(BsFire)`
  width: 25px;
  height: 25px;
  color: ${props => (props.isActiveIcon ? '#ff0000' : '#616e7c')};
`
export const StyledGamingIcon = styled(SiYoutubegaming)`
  width: 25px;
  height: 25px;
  color: ${props => (props.isActiveIcon ? '#ff0000' : '#616e7c')};
`
export const StyledSavedIcon = styled(BiListPlus)`
  width: 25px;
  height: 25px;
  color: ${props => (props.isActiveIcon ? '#ff0000' : '#616e7c')};
`

export const CustomLabel = styled.label`
  color: ${props => (props.isDark ? '#f1f5f9' : '#7e858e')};
  font-family: 'Roboto';
  font-size: 18px;
  text-decoration: none;
  margin-left: 20px;
  cursor: pointer;
`
