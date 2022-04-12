import styled from 'styled-components'

const StyledHeader = styled.header`
  height: 3em;
  width: 50%;
  margin: 0 auto;
  background-color: #FFFFFF;
  box-shadow: 0px 9px 7px 0px rgba(66, 68, 90, 0.1);
  position: sticky;
  top: 0;
  display: flex;
  justify-content: space-around;
`

const Title = styled.h1`
  margin: 0;
  color: #37265F;
`

export { StyledHeader, Title }