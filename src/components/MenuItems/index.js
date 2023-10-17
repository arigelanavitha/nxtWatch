import {Link} from 'react-router-dom'
import NxtWatchContext from '../../Context/NxtWatchContext'

import {
  TabContainer,
  CustomTabItem,
  StyledHomeIcon,
  CustomLabel,
  StyledFireIcon,
  StyledGamingIcon,
  StyledSavedIcon,
} from './styledComponents'

const MenuItemsConstants = {
  home: 'HOME',
  trending: 'TRENDING',
  gaming: 'GAMING',
  savedVideos: 'SAVED_VIDEOS',
}

const MenuItems = () => (
  <NxtWatchContext.Consumer>
    {value => {
      const {isDark, onUpdateRoute, activeRoute} = value
      return (
        <TabContainer isDark={isDark}>
          <Link to="/" style={{textDecoration: 'none'}}>
            <CustomTabItem
              isDark={isDark}
              onClick={() => onUpdateRoute(MenuItemsConstants.home)}
              isActiveRoute={activeRoute === MenuItemsConstants.home}
            >
              <StyledHomeIcon
                isActiveIcon={activeRoute === MenuItemsConstants.home}
              />
              <CustomLabel isDark={isDark}>Home</CustomLabel>
            </CustomTabItem>
          </Link>
          <Link to="/trending" style={{textDecoration: 'none'}}>
            <CustomTabItem
              isDark={isDark}
              onClick={() => onUpdateRoute(MenuItemsConstants.trending)}
              isActiveRoute={activeRoute === MenuItemsConstants.trending}
            >
              <StyledFireIcon
                isActiveIcon={activeRoute === MenuItemsConstants.trending}
              />
              <CustomLabel isDark={isDark}>Trending</CustomLabel>
            </CustomTabItem>
          </Link>
          <Link to="/gaming" style={{textDecoration: 'none'}}>
            <CustomTabItem
              isDark={isDark}
              onClick={() => onUpdateRoute(MenuItemsConstants.gaming)}
              isActiveRoute={activeRoute === MenuItemsConstants.gaming}
            >
              <StyledGamingIcon
                isActiveIcon={activeRoute === MenuItemsConstants.gaming}
              />
              <CustomLabel isDark={isDark}>Gaming</CustomLabel>
            </CustomTabItem>
          </Link>
          <Link to="/saved-videos" style={{textDecoration: 'none'}}>
            <CustomTabItem
              isDark={isDark}
              onClick={() => onUpdateRoute(MenuItemsConstants.savedVideos)}
              isActiveRoute={activeRoute === MenuItemsConstants.savedVideos}
            >
              <StyledSavedIcon
                isActiveIcon={activeRoute === MenuItemsConstants.savedVideos}
              />
              <CustomLabel isDark={isDark}>Saved Videos</CustomLabel>
            </CustomTabItem>
          </Link>
        </TabContainer>
      )
    }}
  </NxtWatchContext.Consumer>
)

export default MenuItems
