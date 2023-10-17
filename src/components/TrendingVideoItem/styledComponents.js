import styled from 'styled-components'

export const TrendingVideoItemContainer = styled.li`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
  background-color: transparent;
`
export const TrendingThumbNail = styled.img`
  width: 100%;
  height: 250px;
  @media screen and (min-width: 768px) {
    width: 300px;
    margin-right: 30px;
    height: 150px;
  }
`
export const TrendingVideoDetailContainer = styled.div`
  display: flex;
`
export const TrendingChannelImg = styled.img`
  width: 35px;
  height: 35px;
  margin: 5px;
  margin-right: 10px;
  @media screen and (min-width: 768px) {
    display: none;
  }
`
export const TrendingDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
`
export const TrendingVideoTitle = styled.h1`
  color: ${props => (props.isDark ? '#ebebeb' : '#212121')};
  font-size: 18px;
  font-family: 'Roboto';
  @media screen and (min-width: 768px) {
    font-size: 20px;
    font-weight: 500;
  }
`
export const VideoInfoContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`
export const TrendingCustomHeading = styled.p`
  color: #616e7c;
  font-size: 15px;
  font-family: 'Roboto';
  margin: 3px;
  font-weight: 400;
`
