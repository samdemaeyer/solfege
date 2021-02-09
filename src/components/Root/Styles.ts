import styled from 'styled-components'
import { navBarAnimationLength, navBarWidth, navBarPadding } from 'styles/Constants'

const containerPadding = '1rem'

export const Container = styled.div`
  position: relative;
  padding: ${containerPadding};
  transition: margin-right ${navBarAnimationLength};

  &.isNavOpen {
    margin-right: calc(${navBarWidth} + ${navBarPadding} + ${navBarPadding});
  }
`

export const MenuToggle = styled.button`
  position: absolute;
  right: ${containerPadding};
`
