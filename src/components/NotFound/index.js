import {
  NotFoundMainContainer,
  NotFoundViewContainer,
  NotFoundContainer,
} from './styledComponents'
import {
  FailureImg,
  FailureHeading,
  FailureParagraph,
} from '../FailureView/styledComponents'
import Header from '../Header'
import NxtWatchContext from '../../Context/NxtWatchContext'
import NxtWatchSideBar from '../NxtWatchSideBar'

const NotFound = () => (
  <NxtWatchContext.Consumer>
    {value => {
      const {isDark} = value
      const lightTheme =
        'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'
      const darkTheme =
        'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
      const notFoundImg = isDark ? darkTheme : lightTheme
      return (
        <NotFoundMainContainer>
          <Header />
          <NotFoundViewContainer>
            <NxtWatchSideBar />
            <NotFoundContainer data-testid="not-found" isDark={isDark}>
              <FailureImg src={notFoundImg} alt="failure view" />
              <FailureHeading isDark={isDark}>Page Not Found</FailureHeading>
              <FailureParagraph>
                We are sorry, the page you requested could not be found.
              </FailureParagraph>
            </NotFoundContainer>
          </NotFoundViewContainer>
        </NotFoundMainContainer>
      )
    }}
  </NxtWatchContext.Consumer>
)
export default NotFound
