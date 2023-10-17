import styled from 'styled-components'

export const VideoItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 380px;
  margin-bottom: 10px;
  @media screen and (min-width: 768px) {
    margin: 10px;
    margin-bottom: 30px;
  }
`
export const ThumbNailVideo = styled.img`
  width: 100%;
`
export const ThumbNailDetailsContainer = styled.div`
  display: flex;
  margin-top: 15px;
`
export const ChannelProfile = styled.img`
  width: 50px;
  height: 50px;
  margin: 5px;
`
export const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 3px;
`
export const ThumbNailTitle = styled.p`
  color: ${props => (props.isDark ? ' #cbd5e1' : '#231f20')};
  font-family: 'Roboto';
  font-size: 18px;
  margin: 0px;
  line-height: 1.5;
  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
`
export const AboutThumbNailContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`
export const CustomDetails = styled.p`
  color: #616e7c;
  font-size: 15px;
  font-family: 'Roboto';
  margin-right: 10px;
  margin-top: 5px;
  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`
