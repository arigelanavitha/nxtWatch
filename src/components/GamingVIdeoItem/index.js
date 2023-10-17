import {Link} from 'react-router-dom'

import {
  GamingVideoItemContainer,
  GamingVideoUrl,
  GamingItemTitle,
  GamingItemViews,
} from './styledComponents'
import NxtWatchContext from '../../Context/NxtWatchContext'

const GamingVideoItem = props => {
  const {gamingVideoDetails} = props
  const {thumbnailUrl, viewCount, title, id} = gamingVideoDetails

  return (
    <NxtWatchContext.Consumer>
      {value => {
        const {isDark} = value
        return (
          <Link to={`/videos/${id}`} style={{textDecoration: 'none'}}>
            <GamingVideoItemContainer>
              <GamingVideoUrl src={thumbnailUrl} alt="thumbnail video" />
              <GamingItemTitle isDark={isDark}>{title}</GamingItemTitle>
              <GamingItemViews>{viewCount} Watching Worldwide</GamingItemViews>
            </GamingVideoItemContainer>
          </Link>
        )
      }}
    </NxtWatchContext.Consumer>
  )
}
export default GamingVideoItem
