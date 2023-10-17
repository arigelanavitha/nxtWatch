import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import Header from '../Header'
import NxtWatchSideBar from '../NxtWatchSideBar'
import VideoItemCard from '../VideoItemCard'
import FailureView from '../FailureView'
import NxtWatchContext from '../../Context/NxtWatchContext'
import {
  HomeContainer,
  HomeVideosContainer,
  BannerContainer,
  BannerCloseBtn,
  BannerCloseIcon,
  BannerLogo,
  BannerDesc,
  BannerCustomBtn,
  VideosSectionContainer,
  SearchContainer,
  SearchInputContainer,
  StyledSearchIcon,
  SearchIconButton,
  VideosContainer,
  LoaderContainer,
  NoResultsContainer,
  NoVideos,
  ResultsHeading,
  ResultDesc,
  ReTryBtn,
} from './styledComponents'

const videosStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  inProgress: 'IN_PROGRESS',
  failure: 'FAILURE',
}
class Home extends Component {
  state = {
    isBannerDisplay: true,
    videosData: [],
    videosStatus: videosStatusConstants.initial,
    searchInput: '',
  }

  componentDidMount() {
    this.onGetVideosData()
  }

  onUpdateSearchInput = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  onEnterSearchInput = event => {
    if (event.key === 'Enter') this.onGetVideosData()
  }

  onGetVideosData = async () => {
    this.setState({
      videosStatus: videosStatusConstants.inProgress,
    })
    const {searchInput} = this.state
    const videosDataUrl = `https://apis.ccbp.in/videos/all?search=${searchInput}`
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(videosDataUrl, options)
    if (response.status === 200) {
      const fetchedData = await response.json()
      const responsiveData = fetchedData.videos.map(each => ({
        id: each.id,
        channel: {
          name: each.channel.name,
          profileImageUrl: each.channel.profile_image_url,
        },
        publishedAt: each.published_at,
        thumbnailUrl: each.thumbnail_url,
        title: each.title,
        viewCount: each.view_count,
      }))
      this.setState({
        videosStatus: videosStatusConstants.success,
        videosData: [...responsiveData],
      })
    } else {
      this.setState({
        videosStatus: videosStatusConstants.failure,
      })
    }
  }

  onCloseBanner = () => {
    this.setState({
      isBannerDisplay: false,
    })
  }

  onRenderBannerSection = () => {
    const {isBannerDisplay} = this.state
    return (
      <BannerContainer isDisplay={isBannerDisplay} data-tetsid="banner">
        <BannerCloseBtn onClick={this.onCloseBanner} data-testid="close">
          <BannerCloseIcon />
        </BannerCloseBtn>
        <BannerLogo
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
          alt="nxt watch logo"
        />
        <BannerDesc>Buy Nxt Watch Premium prepaid plans with UPI</BannerDesc>
        <BannerCustomBtn>GET IT NOW</BannerCustomBtn>
      </BannerContainer>
    )
  }

  onClickRetryBtn = () => {
    this.onGetVideosData()
  }

  NoResultsView = () => (
    <NoResultsContainer>
      <NoVideos
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
        alt="no videos"
      />
      <ResultsHeading>No Search results found</ResultsHeading>
      <ResultDesc>Try different key words or remove search filter</ResultDesc>
      <ReTryBtn onClick={this.onClickRetryBtn}>Retry</ReTryBtn>
    </NoResultsContainer>
  )

  onRenderVideos = () => {
    const {videosData} = this.state
    const isNoItem = videosData.length === 0
    return (
      <VideosContainer>
        {isNoItem
          ? this.NoResultsView()
          : videosData.map(each => (
              <VideoItemCard key={each.id} videoItemDetails={each} />
            ))}
      </VideosContainer>
    )
  }

  onRenderLoader = () => (
    <LoaderContainer data-testid="loader">
      <Loader type="ThreeDots" color="#4f46e5" height="50" width="50" />
    </LoaderContainer>
  )

  onRenderHomeVideosView = () => {
    const {videosStatus} = this.state
    switch (videosStatus) {
      case videosStatusConstants.success:
        return this.onRenderVideos()
      case videosStatusConstants.inProgress:
        return this.onRenderLoader()
      case videosStatusConstants.failure:
        return <FailureView onClickRetryBtn={this.onClickRetryBtn} />
      default:
        return null
    }
  }

  render() {
    const {searchInput} = this.state
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {isDark} = value
          return (
            <>
              <Header />
              <HomeContainer>
                <NxtWatchSideBar />
                <HomeVideosContainer>
                  {this.onRenderBannerSection()}
                  <VideosSectionContainer isDark={isDark} data-testid="home">
                    <SearchContainer isDark={isDark}>
                      <SearchInputContainer
                        type="search"
                        placeholder="Search"
                        value={searchInput}
                        onChange={this.onUpdateSearchInput}
                        onKeyDown={this.onEnterSearchInput}
                      />
                      <SearchIconButton
                        data-testid="searchButton"
                        isDark={isDark}
                        onClick={() => this.onGetVideosData()}
                      >
                        <StyledSearchIcon />
                      </SearchIconButton>
                    </SearchContainer>
                    {this.onRenderHomeVideosView()}
                  </VideosSectionContainer>
                </HomeVideosContainer>
              </HomeContainer>
            </>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}
export default Home
