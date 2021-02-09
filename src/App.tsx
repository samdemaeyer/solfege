import React, { useState } from 'react'
import { GlobalStyles } from 'styles/Global'
import { Container } from 'styles/App'
import Notes from 'routes/Notes'
import NavBar from 'components/NavBar/NavBar'
import classNames from 'classnames'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

const App: React.FC = () => {
  const [navIsOpen, setnavIsOpen] = useState<boolean>(false)

  return (
    <Router>
      <GlobalStyles />
      <NavBar data-testid="NavBar" navIsOpen={navIsOpen} />
      <Container data-testid="Container" className={classNames({ navIsOpen })}>
        <button data-testid="NavToggleBtn" onClick={() => setnavIsOpen(!navIsOpen)}>
          &#9776;
        </button>
        <Switch>
          <Route exact path="/">
            <h1>Welcome to Solfege</h1>
          </Route>
          <Route exact path="/notes">
            <Notes />
          </Route>
        </Switch>
      </Container>
    </Router>
  )
}

export default App
