import styled from 'styled-components'

export const GamingVideoItemContainer = styled.li`
  display: flex;
  flex-direction: column;
  width: 180px;
  max-width: 300px;
  padding: 10px;
  margin: 3px;
  margin-bottom: 5px;
  margin-top: 5px;
  @media screen and (min-width: 768px) {
    margin-bottom: 20px;
    padding: 20px;
    width: 450px;
  }
`

export const GamingVideoUrl = styled.img`
  width: 100%;
  height: 240px;
  border-radius: 15px;
  @media screen and (min-width: 768px) {
    height: 350px;
  }
`
export const GamingItemTitle = styled.h1`
  color: ${props => (props.isDark ? '#e2e8f0' : '#231f20')};
  font-size: 18px;
  font-family: 'Roboto';
  @media screen and (min-width: 768px) {
    font-size: 20px;
    font-weight: 500;
  }
`
export const GamingItemViews = styled.p`
  color: #475569;
  font-size: 16px;
  font-family: 'Roboto';
  font-weight: 400;
  @media screen and (min-width: 768px) {
    font-size: 18px;
    margin-top: 0px;
  }
`
