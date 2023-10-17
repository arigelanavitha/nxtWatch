import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'

import Header from '../Header'
import NxtWatchSideBar from '../NxtWatchSideBar'
import GamingVideoItem from '../GamingVIdeoItem'
import FailureView from '../FailureView'
import NxtWatchContext from '../../Context/NxtWatchContext'
import {
  GamingMainContainer,
  GamingViewContainer,
  GamingHeading,
  GamingContainer,
  GamingIcon,
  GamingHeaderContainer,
  GamingIconContainer,
  LoaderContainer,
  GamingVideosContainer,
} from './styledComponents'

const gamingStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}
class Gaming extends Component {
  state = {
    gamingVideosStatus: gamingStatusConstants.initial,
    gamingVideos: [],
  }

  componentDidMount() {
    this.onGetGamingVideos()
  }

  onGetGamingVideos = async () => {
    const gamingUrl = 'https://apis.ccbp.in/videos/gaming'
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    this.setState({
      gamingVideosStatus: gamingStatusConstants.inProgress,
    })
    const response = await fetch(gamingUrl, options)
    if (response.status === 200) {
      const fetchedData = await response.json()
      const responsiveData = fetchedData.videos.map(each => ({
        thumbnailUrl: each.thumbnail_url,
        viewCount: each.view_count,
        title: each.title,
        id: each.id,
      }))
      this.setState({
        gamingVideosStatus: gamingStatusConstants.success,
        gamingVideos: responsiveData,
      })
    } else {
      this.setState({
        gamingVideosStatus: gamingStatusConstants.failure,
      })
    }
  }

  onRenderGamingVideos = () => {
    const {gamingVideos} = this.state

    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {isDark} = value
          return (
            <GamingContainer data-testid="gaming" isDark={isDark}>
              <GamingHeaderContainer data-testid="banner" isDark={isDark}>
                <GamingIconContainer isDark={isDark}>
                  <GamingIcon />
                </GamingIconContainer>
                <GamingHeading isDark={isDark}>Gaming</GamingHeading>
              </GamingHeaderContainer>
              <GamingVideosContainer>
                {gamingVideos.map(each => (
                  <GamingVideoItem key={each.id} gamingVideoDetails={each} />
                ))}
              </GamingVideosContainer>
            </GamingContainer>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }

  onRenderLoader = () => (
    <LoaderContainer data-testid="loader">
      <Loader type="ThreeDots" color="#4f46e5" height="50" width="50" />
    </LoaderContainer>
  )

  onClickRetryBtn = () => {
    this.onGetGamingVideos()
  }

  onRenderGamingView = () => {
    const {gamingVideosStatus} = this.state
    switch (gamingVideosStatus) {
      case gamingStatusConstants.success:
        return this.onRenderGamingVideos()
      case gamingStatusConstants.inProgress:
        return this.onRenderLoader()
      case gamingStatusConstants.failure:
        return <FailureView onClickRetryBtn={this.onClickRetryBtn} />
      default:
        return null
    }
  }

  render() {
    return (
      <GamingMainContainer>
        <Header />
        <GamingViewContainer>
          <NxtWatchSideBar />

          {this.onRenderGamingView()}
        </GamingViewContainer>
      </GamingMainContainer>
    )
  }
}
export default Gaming
