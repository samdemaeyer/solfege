import { createGlobalStyle, keyframes } from 'styled-components'

const AnimateLeft = keyframes`
  from {
    left:-300px;
    opacity:0;
  }

  to {
    left:0;
    opacity:1
  }
`

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
  }

  h1 {
    text-align: center;
  }
`

export { AnimateLeft, GlobalStyles }
