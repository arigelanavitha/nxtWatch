import {Link} from 'react-router-dom'
import {parse, getYear} from 'date-fns'
import NxtWatchContext from '../../Context/NxtWatchContext'
import {
  TrendingVideoItemContainer,
  TrendingThumbNail,
  TrendingVideoDetailContainer,
  TrendingChannelImg,
  TrendingDetailsContainer,
  TrendingVideoTitle,
  VideoInfoContainer,
  TrendingCustomHeading,
} from './styledComponents'

const TrendingVideoItem = props => {
  const {trendingVideoDetails} = props
  const {
    channel,
    publishedAt,
    thumbnailUrl,
    title,
    viewCount,
    id,
  } = trendingVideoDetails
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
            <TrendingVideoItemContainer>
              <TrendingThumbNail src={thumbnailUrl} alt="video thumbnail" />
              <TrendingVideoDetailContainer>
                <TrendingChannelImg src={profileImageUrl} alt="channel logo" />
                <TrendingDetailsContainer>
                  <TrendingVideoTitle isDark={isDark}>
                    {title}
                  </TrendingVideoTitle>
                  <VideoInfoContainer>
                    <TrendingCustomHeading>{name}</TrendingCustomHeading>
                    <TrendingCustomHeading>
                      {viewCount} views
                    </TrendingCustomHeading>
                    <TrendingCustomHeading>
                      {formattedYear}
                    </TrendingCustomHeading>
                  </VideoInfoContainer>
                </TrendingDetailsContainer>
              </TrendingVideoDetailContainer>
            </TrendingVideoItemContainer>
          </Link>
        )
      }}
    </NxtWatchContext.Consumer>
  )
}
export default TrendingVideoItem
