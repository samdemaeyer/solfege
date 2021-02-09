import React, { useState, useEffect } from 'react'
import { Container } from 'styles/App'
import NavBar from 'components/NavBar/NavBar'
import Notes from 'routes/Notes'
import classNames from 'classnames'
import { Switch, Route, useHistory } from 'react-router-dom'

const Root: React.FC = () => {
  const history = useHistory()
  const [isNavOpen, setIsNavOpen] = useState<boolean>(false)

  useEffect(() => {
    return history.listen(() => setIsNavOpen(false))
  }, [history])

  return (
    <>
      <NavBar data-testid="NavBar" isNavOpen={isNavOpen} />
      <Container data-testid="Container" className={classNames({ isNavOpen })}>
        <button data-testid="NavToggleBtn" onClick={() => setIsNavOpen(!isNavOpen)}>
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
    </>
  )
}

export default Root
