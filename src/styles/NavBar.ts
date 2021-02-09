import styled from 'styled-components'
import { AnimateLeft } from './Global'

const navBarWidth = '100px'
const navBarPadding = '1rem'
const navBarAnimationLength = '.4s'

const NavBar = styled.nav`
  display: none;
  width: ${navBarWidth};
  box-shadow: 0 2px 5px 0 rgb(0 0 0 / 16%), 0 2px 10px 0 rgb(0 0 0 / 12%);
  animation: ${AnimateLeft} ${navBarAnimationLength};
  height: 100%;
  background-color: #fff;
  position: fixed;
  z-index: 1;
  overflow: auto;
  left: 0;
  top: 0;
  padding: ${navBarPadding};

  &.isNavOpen {
    display: block;
  }
`

export { NavBar, navBarWidth, navBarPadding, navBarAnimationLength }
