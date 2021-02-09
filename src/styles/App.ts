import styled from 'styled-components'
import { navBarAnimationLength, navBarWidth, navBarPadding } from './NavBar'

const Container = styled.div`
  padding: 1rem;
  transition: margin-left ${navBarAnimationLength};

  &.isNavOpen {
    margin-left: calc(${navBarWidth} + ${navBarPadding} + ${navBarPadding});
  }
`

const ManuscriptWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export { Container, ManuscriptWrapper }
