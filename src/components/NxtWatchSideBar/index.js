import MenuItems from '../MenuItems'
import NxtWatchContext from '../../Context/NxtWatchContext'
import {
  SideBar,
  MoreInfoContainer,
  MoreInfoHeading,
  InfoIconContainer,
  StyledCustomIcon,
  InfoDesc,
} from './styledComponents'

const NxtWatchSideBar = () => (
  <NxtWatchContext.Consumer>
    {value => {
      const {isDark} = value
      return (
        <SideBar isDark={isDark}>
          <MenuItems />
          <MoreInfoContainer>
            <MoreInfoHeading isDark={isDark}>CONTACT US</MoreInfoHeading>
            <InfoIconContainer>
              <StyledCustomIcon src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png" />
              <StyledCustomIcon src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png" />
              <StyledCustomIcon src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png" />
            </InfoIconContainer>
            <InfoDesc isDark={isDark}>
              Enjoy! Now to see your channels and recommendations!
            </InfoDesc>
          </MoreInfoContainer>
        </SideBar>
      )
    }}
  </NxtWatchContext.Consumer>
)
export default NxtWatchSideBar
