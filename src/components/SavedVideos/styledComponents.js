import styled from 'styled-components'
import {BiListPlus} from 'react-icons/bi'

export const SavedMainContainer = styled.div`
  height: 100vh;
  overflow: auto;
`
export const SavedViewContainer = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;
`

export const SavedContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  overflow: auto;
  background-color: ${props => (props.isDark ? '#0f0f0f' : '#f9f9f9')};
`
export const SavedHeaderContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: #ebebeb;
  height: 70px;
  width: 100%;
  @media screen and (min-width: 768px) {
    height: 120px;
    margin-top: 0px;
  }
`
export const SavedIconContainer = styled.div`
  background-color: #cbd5e1;
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
  }
`
export const SavedIcon = styled(BiListPlus)`
  width: 35px;
  height: 35px;
  color: #ff0b37;
  @media screen and (min-width: 768px) {
    width: 42px;
    height: 42px;
  }
`
export const SavedHeading = styled.h1`
  color: #212121;
  font-size: 24px;
  font-family: 'Roboto';
  @media screen and (min-width: 768px) {
    font-size: 32px;
  }
`
export const SavedVideosContainer = styled.ul`
  display: flex;
  flex-direction: column;
  padding-left: 0px;
  border: 5px solid green;
`
export const NoSavedVideosContainer = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px;
`
export const NoSavedVideosImg = styled.img`
  width: 100%;
  max-width: 350px;
`
export const NoSavedVideosHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 18px;
  color: ${props => (props.isDark ? '#f1f1f1' : '#0f0f0f')};
  text-align: center;
  @media screen and (min-width: 768px) {
    font-size: 24px;
    font-weight: 500;
  }
`
export const NoSavedVideosParagraph = styled.p`
  font-size: 16px;
  font-family: 'Roboto';
  color: #475569;
  text-align: center;
  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
`
