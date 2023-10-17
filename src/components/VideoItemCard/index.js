import {Link} from 'react-router-dom'
import {getYear, parse} from 'date-fns'
import NxtWatchContext from '../../Context/NxtWatchContext'
import {
  VideoItemContainer,
  ThumbNailVideo,
  ThumbNailDetailsContainer,
  ChannelProfile,
  AboutThumbNailContainer,
  CustomDetails,
  DetailsContainer,
  ThumbNailTitle,
} from './styledComponents'

const VideoItemCard = props => {
  const {videoItemDetails} = props
  const {
    channel,
    publishedAt,
    thumbnailUrl,
    title,
    viewCount,
    id,
  } = videoItemDetails
  const {name, profileImageUrl} = channel
  const parsedDate = parse(publishedAt, 'MMM d, yyyy', new Date())
  const year = getYear(parsedDate)
  const currentYear = new Date()
  const tYear = currentYear.getFullYear() - year
  const formattedYear = `${tYear} ${tYear < 1 ? 'year' : 'years'} ago`
  return (
    <NxtWatchContext.Consumer>
      {value => {
        const {isDark} = value
        return (
          <Link to={`/videos/${id}`} style={{textDecoration: 'none'}}>
            <VideoItemContainer>
              <ThumbNailVideo src={thumbnailUrl} alt="video thumbnail" />
              <ThumbNailDetailsContainer>
                <ChannelProfile src={profileImageUrl} alt="channel logo" />
                <DetailsContainer>
                  <ThumbNailTitle isDark={isDark}>{title}</ThumbNailTitle>
                  <AboutThumbNailContainer>
                    <CustomDetails>{name}</CustomDetails>
                    <CustomDetails>{viewCount} views</CustomDetails>
                    <CustomDetails>{formattedYear}</CustomDetails>
                  </AboutThumbNailContainer>
                </DetailsContainer>
              </ThumbNailDetailsContainer>
            </VideoItemContainer>
          </Link>
        )
      }}
    </NxtWatchContext.Consumer>
  )
}

export default VideoItemCard
