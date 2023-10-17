import styled from 'styled-components'

import {GrFormClose} from 'react-icons/gr'
import {AiOutlineSearch} from 'react-icons/ai'

export const HomeContainer = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
`

export const HomeVideosContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  flex-grow: 3;
  width: 100%;
  overflow-y: auto;
  align-items: center;
`
export const BannerContainer = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  width: 100%;
  height: 250px;
  padding: 10px;
  display: ${props => (props.isDisplay ? 'flex' : 'none')};
  flex-direction: column;
  @media screen and (min-width: 768px) {
    padding: 20px;
    height: 280px;
  }
`
export const BannerCloseBtn = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  align-self: flex-end;
`
export const BannerCloseIcon = styled(GrFormClose)`
  width: 30px;
  height: 30px;
  color: #e2e8f0;
`
export const BannerLogo = styled.img`
  width: 120px;
  height: 32px;
`
export const BannerDesc = styled.p`
  max-width: 450px;
  color: #475569;
  font-size: 20px;
  font-family: 'Roboto';
  font-weight: 500;
  line-height: 1.5;
`
export const BannerCustomBtn = styled.button`
  border: 2px solid #1e293b;
  width: 128px;
  height: 48px;
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 6px;
  padding-bottom: 6px;
  background-color: transparent;
  font-family: 'Roboto';
  font-size: 18px;
  text-align: center;
  font-weight: 400;
`
export const VideosSectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${props => (props.isDark ? '#181818' : '#f9f9f9')};
  padding: 10px;
  flex-grow: 1;
  width: 100%;
  @media screen and (min-width: 768px) {
    padding: 20px;
  }
`
export const SearchContainer = styled.div`
  display: flex;
  width: 95%;
  max-width: 500px;
  height: 40px;
  background-color: ${props => (props.isDark ? '#181818' : '#f8fafc')};
  border: 2px solid #909090;
  align-items: center;
  margin-bottom: 20px;
  margin-top: 10px;
`
export const SearchInputContainer = styled.input`
  width: 80%;
  height: 40px;
  background-color: transparent;
  border: 1px solid #909090;
  padding-left: 12px;
  padding-right: 5px;
  color: #7e858e;
  font-family: 'Roboto';
  font-size: 18px;
  flex-shrink: 0;
  outline: none;
  font-weight: 500;
`

export const SearchIconButton = styled.button`
  height: 100%;
  width: 100%;
  background-color: ${props => (props.isDark ? ' #383838' : '#f1f1f1')};
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #909090;
  outline: none;
  cursor: pointer;
`
export const StyledSearchIcon = styled(AiOutlineSearch)`
  width: 20px;
  height: 20px;
  color: #909090;
`
export const VideosContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  min-height: 100vh;
`
export const LoaderContainer = styled.div`
  height: 80vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const NoResultsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  align-items: center;
  justify-content: center;
  padding: 10px;
`
export const NoVideos = styled.img`
  width: 100%;
  max-width: 350px;
`
export const ResultsHeading = styled.h1`
color:#0f0f0f;
font-family:"Roboto"
font-size:18px;
text-align:center;
@media screen and (min-width:768px){
    font-size:24px;
}
`
export const ResultDesc = styled.p`
  color: #616e7c;
  font-family: 'Roboto';
  font-size: 16px;
  text-align: center;
  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`

export const ReTryBtn = styled.button`
  width: 148px;
  height: 48px;
  background-color: #4f46e5;
  border-radius: 5px;
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 16px;
  outline: none;
  cursor: pointer;
  border-width: 0px;
`
