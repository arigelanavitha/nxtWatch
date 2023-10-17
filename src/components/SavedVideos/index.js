import Header from '../Header'
import NxtWatchSideBar from '../NxtWatchSideBar'
import TrendingVideoItem from '../TrendingVideoItem'
import NxtWatchContext from '../../Context/NxtWatchContext'
import {
  SavedMainContainer,
  SavedViewContainer,
  SavedContainer,
  SavedHeaderContainer,
  SavedIcon,
  SavedHeading,
  SavedIconContainer,
  SavedVideosContainer,
  NoSavedVideosContainer,
  NoSavedVideosImg,
  NoSavedVideosHeading,
  NoSavedVideosParagraph,
} from './styledComponents'

const SavedVideos = () => (
  <NxtWatchContext.Consumer>
    {value => {
      const {savedVideos, isDark} = value
      const noSavedVideosView = () => (
        <NoSavedVideosContainer>
          <NoSavedVideosImg
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
            alt="no saved videos"
          />
          <NoSavedVideosHeading isDark={isDark}>
            No saved Videos found
          </NoSavedVideosHeading>
          <NoSavedVideosParagraph>
            You can save your videos while watching them
          </NoSavedVideosParagraph>
        </NoSavedVideosContainer>
      )
      const onRenderSavedVideosView = () => {
        const isNoSavedVideos = savedVideos.length === 0
        return (
          <SavedVideosContainer>
            {isNoSavedVideos ? (
              noSavedVideosView()
            ) : (
              <>
                <SavedHeaderContainer data-tetsid="banner">
                  <SavedIconContainer>
                    <SavedIcon />
                  </SavedIconContainer>
                  <SavedHeading>Saved Videos</SavedHeading>
                </SavedHeaderContainer>
                {savedVideos.map(each => (
                  <TrendingVideoItem
                    key={each.id}
                    trendingVideoDetails={each}
                  />
                ))}
              </>
            )}
          </SavedVideosContainer>
        )
      }
      return (
        <SavedMainContainer data-testid="savedVideos">
          <Header />
          <SavedViewContainer>
            <NxtWatchSideBar />
            <SavedContainer isDark={isDark}>
              {onRenderSavedVideosView()}
            </SavedContainer>
          </SavedViewContainer>
        </SavedMainContainer>
      )
    }}
  </NxtWatchContext.Consumer>
)
export default SavedVideos
