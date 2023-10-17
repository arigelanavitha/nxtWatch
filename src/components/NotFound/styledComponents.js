import styled from 'styled-components'

export const NotFoundMainContainer = styled.div`
  height: 100vh;
  overflow: auto;
`
export const NotFoundViewContainer = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;
`

export const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  padding: 15px;
  background-color: ${props => (props.isDark ? '#0f0f0f' : '#f9f9f9')};
`
