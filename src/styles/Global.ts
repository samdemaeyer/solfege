import { createGlobalStyle, keyframes } from 'styled-components'

export const AnimateRight = keyframes`
  from {
    right: -300px;
    opacity: 0;
  }

  to {
    right: 0;
    opacity: 1
  }
`

export const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
  }

  h1 {
    text-align: center;
  }
`
