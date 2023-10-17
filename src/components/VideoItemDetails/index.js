import {Component} from 'react'
import Cookies from 'js-cookie'
import {getYear, parse} from 'date-fns'
import ReactPlayer from 'react-player'
import Loader from 'react-loader-spinner'
import Header from '../Header'
import FailureView from '../FailureView'
import NxtWatchSideBar from '../NxtWatchSideBar'
import NxtWatchContext from '../../Context/NxtWatchContext'
import {
  VideoDetailsMainContainer,
  VideoItemDetailsContainer,
  VideoDetailsViewContainer,
  LoaderContainer,
  VideoDetailsTitle,
  VideoHistoryContainer,
  CustomHeading,
  HistorySubContainer,
  CustomIconContainer,
  HorizontalLine,
  ChannelContainer,
  ChannelProfile,
  ChannelName,
  Description,
  StyledLikedIcon,
  StyledSavedIcon,
  StyledDisLikedIcon,
  LikeLabel,
  DislikeLabel,
  SaveLabel,
} from './styledComponents'

const videoDetailsStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class VideoItemDetails extends Component {
  state = {
    videoItemDetailsData: {},
    detailsStatus: videoDetailsStatusConstants.initial,
    isVideoLiked: false,
    isVideoDisLiked: false,
  }

  componentDidMount() {
    this.onGetVideoDetailsData()
  }

  onGetVideoDetailsData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const url = `https://apis.ccbp.in/videos/${id}`

    this.setState({
      detailsStatus: videoDetailsStatusConstants.inProgress,
    })
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(url, options)
    if (response.status === 200) {
      const fetchedData = await response.json()
      const responsiveData = {
        id: fetchedData.video_details.id,
        channel: {
          subscriberCount: fetchedData.video_details.channel.subscriber_count,
          profileImageUrl: fetchedData.video_details.channel.profile_image_url,
          name: fetchedData.video_details.channel.name,
        },
        description: fetchedData.video_details.description,
        publishedAt: fetchedData.video_details.published_at,
        thumbnailUrl: fetchedData.video_details.thumbnail_url,
        title: fetchedData.video_details.title,
        videoUrl: fetchedData.video_details.video_url,
        viewCount: fetchedData.video_details.view_count,
      }
      this.setState({
        detailsStatus: videoDetailsStatusConstants.success,
        videoItemDetailsData: responsiveData,
      })
    } else {
      this.setState({
        detailsStatus: videoDetailsStatusConstants.failure,
      })
    }
  }

  onClickLikeBtn = () => {
    this.setState(prevState => ({
      isVideoLiked: !prevState.isVideoLiked,
      isVideoDisLiked: false,
    }))
  }

  onClickDisLikeBtn = () => {
    this.setState(prevState => ({
      isVideoDisLiked: !prevState.isVideoDisLiked,
      isVideoLiked: false,
    }))
  }

  onRenderVideoDetailsContainer = () => (
    <NxtWatchContext.Consumer>
      {values => {
        const {onUpdateSave, isDark, savedVideos} = values
        const {videoItemDetailsData, isVideoLiked, isVideoDisLiked} = this.state
        const {
          channel,
          description,
          publishedAt,
          title,
          videoUrl,
          viewCount,
          id,
        } = videoItemDetailsData
        const {subscriberCount, profileImageUrl, name} = channel
        const onClickSaveVideos = () => {
          onUpdateSave(videoItemDetailsData)
        }
        const parsedDate = parse(publishedAt, 'MMM d, yyyy', new Date())
        const year = getYear(parsedDate)
        const currentYear = new Date()
        const tYear = currentYear.getFullYear() - year
        const formattedYear = `${tYear} ${tYear < 1 ? 'year' : 'years'} ago`
        const isSaved = savedVideos.find(each => each.id === id)

        return (
          <VideoItemDetailsContainer
            data-testid="videoItemDetails"
            isDark={isDark}
          >
            <ReactPlayer url={videoUrl} controls width="100%" />
            <VideoDetailsTitle isDark={isDark}>{title}</VideoDetailsTitle>
            <VideoHistoryContainer>
              <HistorySubContainer>
                <CustomHeading>{viewCount} views</CustomHeading>
                <CustomHeading>{formattedYear}</CustomHeading>
              </HistorySubContainer>
              <HistorySubContainer>
                <CustomIconContainer onClick={this.onClickLikeBtn}>
                  <StyledLikedIcon like={isVideoLiked} />
                  <LikeLabel like={isVideoLiked}>Like</LikeLabel>
                </CustomIconContainer>
                <CustomIconContainer onClick={this.onClickDisLikeBtn}>
                  <StyledDisLikedIcon disLike={isVideoDisLiked} />
                  <DislikeLabel disLike={isVideoDisLiked}>Dislike</DislikeLabel>
                </CustomIconContainer>
                <CustomIconContainer onClick={onClickSaveVideos}>
                  <StyledSavedIcon isVideoSaved={isSaved} />
                  <SaveLabel isVideoSaved={isSaved}>
                    {isSaved ? 'Saved' : 'Save'}
                  </SaveLabel>
                </CustomIconContainer>
              </HistorySubContainer>
            </VideoHistoryContainer>
            <HorizontalLine />
            <ChannelContainer>
              <ChannelProfile src={profileImageUrl} alt="channel logo" />
              <div>
                <ChannelName>{name}</ChannelName>
                <CustomHeading>{subscriberCount} subscribers</CustomHeading>
              </div>
            </ChannelContainer>
            <Description isDark={isDark}>{description}</Description>
          </VideoItemDetailsContainer>
        )
      }}
    </NxtWatchContext.Consumer>
  )

  onRenderLoader = () => (
    <NxtWatchContext.Consumer>
      {value => {
        const {isDark} = value
        return (
          <LoaderContainer data-testid="loader" isDark={isDark}>
            <Loader type="ThreeDots" color="#4f46e5" height="50" width="50" />
          </LoaderContainer>
        )
      }}
    </NxtWatchContext.Consumer>
  )

  onClickRetryBtn = () => {
    this.onGetVideoDetailsData()
  }

  onRenderVideoDetailsView = () => {
    const {detailsStatus} = this.state
    switch (detailsStatus) {
      case videoDetailsStatusConstants.inProgress:
        return this.onRenderLoader()
      case videoDetailsStatusConstants.success:
        return this.onRenderVideoDetailsContainer()
      case videoDetailsStatusConstants.failure:
        return <FailureView onClickRetryBtn={this.onClickRetryBtn} />
      default:
        return null
    }
  }

  render() {
    return (
      <VideoDetailsMainContainer>
        <Header />
        <VideoDetailsViewContainer>
          <NxtWatchSideBar />
          {this.onRenderVideoDetailsView()}
        </VideoDetailsViewContainer>
      </VideoDetailsMainContainer>
    )
  }
}
export default VideoItemDetails
