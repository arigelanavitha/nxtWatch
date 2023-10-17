import {
  HomeFailureContainer,
  FailureImg,
  FailureHeading,
  FailureParagraph,
  CustomButton,
} from './styledComponents'
import NxtWatchContext from '../../Context/NxtWatchContext'

const FailureView = props => {
  const {onClickRetryBtn} = props

  const onRetryBtn = () => {
    onClickRetryBtn()
  }

  return (
    <NxtWatchContext.Consumer>
      {value => {
        const {isDark} = value
        return (
          <HomeFailureContainer isDark={isDark}>
            <FailureImg
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png"
              alt="failure view"
            />
            <FailureHeading isDark={isDark}>
              Oops! Something Went Wrong
            </FailureHeading>
            <FailureParagraph>
              We are having some trouble to complete your request.Please try
              again.
            </FailureParagraph>
            <CustomButton onClick={onRetryBtn}>Retry</CustomButton>
          </HomeFailureContainer>
        )
      }}
    </NxtWatchContext.Consumer>
  )
}
export default FailureView
