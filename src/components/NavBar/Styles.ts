import styled from 'styled-components'
import { AnimateRight } from 'styles/Global'
import { navBarAnimationLength, navBarWidth, navBarPadding } from 'styles/Constants'

export const NavBar = styled.nav`
  display: none;
  width: ${navBarWidth};
  box-shadow: 0 2px 5px 0 rgb(0 0 0 / 16%), 0 2px 10px 0 rgb(0 0 0 / 12%);
  animation: ${AnimateRight} ${navBarAnimationLength};
  height: 100%;
  background-color: #fff;
  position: fixed;
  z-index: 1;
  overflow: auto;
  right: 0;
  top: 0;
  padding: ${navBarPadding};

  &.isNavOpen {
    display: block;
  }
`
