import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import Header from '../Header'
import NxtWatchSideBar from '../NxtWatchSideBar'
import NxtWatchContext from '../../Context/NxtWatchContext'
import TrendingVideoItem from '../TrendingVideoItem'
import FailureView from '../FailureView'

import {
  TrendingMainContainer,
  TendingViewContainer,
  TrendingContainer,
  TrendingHeaderContainer,
  TrendingIcon,
  TrendingHeading,
  TrendingIconContainer,
  TrendingVideosContainer,
  LoaderContainer,
} from './styledComponents'

const trendingStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}
class Trending extends Component {
  state = {
    trendingVideos: [],
    trendingVideosStatus: trendingStatusConstants.initial,
  }

  componentDidMount() {
    this.onGetTrendingVideos()
  }

  onGetTrendingVideos = async () => {
    const trendingVideosUrl = 'https://apis.ccbp.in/videos/trending'
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    this.setState({
      trendingVideosStatus: trendingStatusConstants.inProgress,
    })
    const response = await fetch(trendingVideosUrl, options)
    if (response.status === 200) {
      const fetchedData = await response.json()
      const responsiveData = fetchedData.videos.map(each => ({
        channel: {
          name: each.channel.name,
          profileImageUrl: each.channel.profile_image_url,
        },
        id: each.id,
        publishedAt: each.published_at,
        thumbnailUrl: each.thumbnail_url,
        title: each.title,
        viewCount: each.view_count,
      }))
      this.setState({
        trendingVideosStatus: trendingStatusConstants.success,
        trendingVideos: responsiveData,
      })
    } else {
      this.setState({
        trendingVideosStatus: trendingStatusConstants.failure,
      })
    }
  }

  onRenderTrendingVideos = () => {
    const {trendingVideos} = this.state

    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {isDark} = value
          return (
            <TrendingContainer data-testid="trending" isDark={isDark}>
              <TrendingHeaderContainer data-tetsid="banner" isDark={isDark}>
                <TrendingIconContainer isDark={isDark}>
                  <TrendingIcon />
                </TrendingIconContainer>
                <TrendingHeading isDark={isDark}>Trending</TrendingHeading>
              </TrendingHeaderContainer>
              <TrendingVideosContainer>
                {trendingVideos.map(each => (
                  <TrendingVideoItem
                    key={each.id}
                    trendingVideoDetails={each}
                  />
                ))}
              </TrendingVideosContainer>
            </TrendingContainer>
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
    this.onGetTrendingVideos()
  }

  onRenderTrendingVideosView = () => {
    const {trendingVideosStatus} = this.state
    switch (trendingVideosStatus) {
      case trendingStatusConstants.success:
        return this.onRenderTrendingVideos()
      case trendingStatusConstants.inProgress:
        return this.onRenderLoader()
      case trendingStatusConstants.failure:
        return <FailureView onClickRetryBtn={this.onClickRetryBtn} />
      default:
        return null
    }
  }

  render() {
    return (
      <TrendingMainContainer>
        <Header />
        <TendingViewContainer>
          <NxtWatchSideBar />

          {this.onRenderTrendingVideosView()}
        </TendingViewContainer>
      </TrendingMainContainer>
    )
  }
}
export default Trending
