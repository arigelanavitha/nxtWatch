import styled from 'styled-components'
import {AiOutlineLike, AiOutlineDislike} from 'react-icons/ai'
import {BiListPlus} from 'react-icons/bi'

export const VideoDetailsMainContainer = styled.div`
  width: 100%;
  height: 100vh;
`
export const VideoDetailsViewContainer = styled.div`
  display: flex;
  width: 100%;
`
export const VideoItemDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${props => (props.isDark ? '#0f0f0f' : '#f9f9f9')};
  width: 100%;
  padding: 10px;
`
export const VideoPLayerContainer = styled.div`
  width: 100%;
`

export const LoaderContainer = styled.div`
  height: 80vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => (props.isDark ? '#0f0f0f' : '#f9f9f9')};
`
export const VideoDetailsTitle = styled.h1`
  font-size: 18px;
  font-family: 'Roboto';
  color: ${props => (props.isDark ? '#d7dfe9' : '#424242')};
  line-height: 1.5;
  font-weight: 500;
  @media screen and (mn-width: 768px) {
    font-size: 20px;
  }
`

export const VideoHistoryContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
`
export const CustomHeading = styled.p`
  color: #64748b;
  font-size: 16px;
  font-family: 'Roboto';
  font-weight: 400;
  margin-right: 10px;
`
export const LikeLabel = styled.p`
  color: ${props => (props.like ? '#2563eb' : '#64748b')};
  font-size: 16px;
  font-family: 'Roboto';
  font-weight: 400;
`
export const DislikeLabel = styled.p`
  color: ${props => (props.disLike ? '#2563eb' : '#64748b')};
  font-size: 16px;
  font-family: 'Roboto';
  font-weight: 400;
`
export const SaveLabel = styled.p`
  color: ${props => (props.isVideoSaved ? '#2563eb' : '#64748b')};
  font-size: 16px;
  font-family: 'Roboto';
  font-weight: 400;
`
export const HistorySubContainer = styled.div`
  display: flex;
`

export const CustomIconContainer = styled.div`
  display: flex;
  margin-right: 8px;
  align-items: center;
  padding: 5px;
  outline: none;
  cursor: pointer;
`
export const HorizontalLine = styled.hr`
  width: 100%;
`
export const ChannelContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
`
export const ChannelProfile = styled.img`
  width: 60px;
  height: 60px;
  margin: 5px;
  margin-right: 10px;
`

export const ChannelName = styled.p`
  color: #231f20;
  font-size: 16px;
  font-family: 'Roboto';
`
export const Description = styled.p`
  color: ${props => (props.isDark ? '#d7dfe9' : '#424242')};
  font-size: 16px;
  font-family: 'Roboto';
  line-height: 2;
`
export const StyledLikedIcon = styled(AiOutlineLike)`
  width: 30px;
  height: 30px;
  color: ${props => (props.like ? '#2563eb' : '#64748b')};
`
export const StyledDisLikedIcon = styled(AiOutlineDislike)`
  width: 30px;
  height: 30px;
  color: ${props => (props.disLike ? '#2563eb' : '#64748b')};
`
export const StyledSavedIcon = styled(BiListPlus)`
  width: 30px;
  height: 30px;
  color: ${props => (props.isVideoSaved ? '#2563eb' : '#64748b')};
`
