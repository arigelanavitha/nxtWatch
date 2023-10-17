import styled from 'styled-components'

export const SideBar = styled.div`
  background-color: ${props => (props.isDark ? '#212121' : '#ffffff')};
  display: none;
  @media screen and (min-width: 768px) {
    height: 100vh;
    display: flex;
    flex-grow: 1;
    flex-direction: column;
    justify-content: space-between;
    width: 300px;
  }
`
export const MoreInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  margin-bottom: 40px;
`

export const MoreInfoHeading = styled.h1`
  font-size: 18px;
  font-family: 'Roboto';
  color: ${props => (props.isDark ? '#f9f9f9' : '#1e293b')};
`
export const InfoIconContainer = styled.div`
  display: flex;
`
export const StyledCustomIcon = styled.img`
  width: 35px;
  height: 35px;
  margin: 5px;
`
export const InfoDesc = styled.p`
  margin-top: 20px;
  margin-bottom: 0px;
  color: ${props => (props.isDark ? '#f9f9f9' : '#1e293b')};
  font-size: 16px;
  font-family: 'Roboto';
  font-weight: 500;
`
