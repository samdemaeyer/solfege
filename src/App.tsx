import React from 'react'
import { GlobalStyles } from 'styles/Global'
import Root from 'components/Root/Root'
import { BrowserRouter as Router } from 'react-router-dom'

const App: React.FC = () => {
  return (
    <Router>
      <GlobalStyles />
      <Root />
    </Router>
  )
}

export default App
