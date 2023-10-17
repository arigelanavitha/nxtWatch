import styled from 'styled-components'
import {HiFire} from 'react-icons/hi'

export const TrendingMainContainer = styled.div`
  height: 100vh;
  overflow: auto;
`
export const TendingViewContainer = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;
`

export const TrendingContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  overflow: auto;
  background-color: ${props => (props.isDark ? '#0f0f0f' : '#f9f9f9')};
`
export const TrendingHeaderContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: ${props => (props.isDark ? '#181818' : '#ebebeb')};
  height: 70px;
  width: 100%;

  @media screen and (min-width: 768px) {
    height: 120px;
  }
`
export const TrendingIconContainer = styled.div`
  background-color: ${props => (props.isDark ? '#000000' : '#cbd5e1')};
  width: 50px;
  height: 50px;
  border-radius: 25px;
  margin: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  @media screen and (min-width: 768px) {
    width: 70px;
    height: 70px;
    margin: 15px;
    border-radius: 40px;
    margin-left: 30px;
  }
`
export const TrendingIcon = styled(HiFire)`
  width: 35px;
  height: 35px;
  color: #ff0b37;
  @media screen and (min-width: 768px) {
    width: 42px;
    height: 42px;
  }
`
export const TrendingHeading = styled.h1`
  color: ${props => (props.isDark ? ' #f1f1f1' : '#212121;')};
  font-size: 24px;
  font-family: 'Roboto';
  @media screen and (min-width: 768px) {
    font-size: 32px;
  }
`
export const TrendingVideosContainer = styled.ul`
  display: flex;
  flex-direction: column;
  padding-left: 0px;
`
export const LoaderContainer = styled.div`
  height: 80vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`
