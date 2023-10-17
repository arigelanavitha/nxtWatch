import styled from 'styled-components'

export const HomeFailureContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${props => (props.isDark ? '#212121' : '#f9f9f9')};
`
export const FailureImg = styled.img`
  width: 250px;
  margin: 10px;
`
export const FailureHeading = styled.h1`
  color: ${props => (props.isDark ? '#e2e8f0' : '#212121')};
  font-size: 24px;
  font-family: 'Roboto';
  text-align: center;
`

export const FailureParagraph = styled.p`
  color: #475569;
  font-family: 'Roboto';
  font-size: 18px;
  text-align: center;
  font-weight: 500;
`

export const CustomButton = styled.button`
  color: #ffffff;
  background-color: #00306e;
  width: 120px;
  height: 45px;
  border-radius: 5px;
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 6px;
  padding-bottom: 6px;
`
