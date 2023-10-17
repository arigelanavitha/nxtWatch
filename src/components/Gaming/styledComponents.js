import styled from 'styled-components'
import {SiYoutubegaming} from 'react-icons/si'

export const GamingMainContainer = styled.div`
  height: 100vh;
  overflow: auto;
`
export const GamingViewContainer = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;
`

export const GamingContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  overflow: auto;
  background-color: ${props => (props.isDark ? '#0f0f0f' : '#f9f9f9')};
`
export const GamingHeaderContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: ${props => (props.isDark ? '#181818' : '#ebebeb')};
  height: 70px;
  width: 100%;
  margin-bottom: 0px;
  @media screen and (min-width: 768px) {
    height: 120px;
  }
`
export const GamingIconContainer = styled.div`
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
export const GamingIcon = styled(SiYoutubegaming)`
  width: 35px;
  height: 35px;
  color: #ff0b37;
  @media screen and (min-width: 768px) {
    width: 42px;
    height: 42px;
  }
`
export const GamingHeading = styled.h1`
  color: ${props => (props.isDark ? ' #f1f1f1' : '#212121;')};
  font-size: 24px;
  font-family: 'Roboto';
  @media screen and (min-width: 768px) {
    font-size: 32px;
  }
`
export const GamingVideosContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding-left: 0px;
  margin-top: 0px;
  width: 100%;
`
export const LoaderContainer = styled.div`
  height: 80vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`
