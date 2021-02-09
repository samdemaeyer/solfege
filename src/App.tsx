import React, { useState } from 'react'
import { GlobalStyles } from './styles/Global'
import { Container, ManuscriptWrapper } from './styles/App'
import Manuscript from './components/Manuscript/Manuscript'
import NavBar from './components/NavBar/NavBar'
import classNames from 'classnames'

const App: React.FC = () => {
  const [navIsOpen, setnavIsOpen] = useState<boolean>(false)

  return (
    <>
      <GlobalStyles />
      <NavBar navIsOpen={navIsOpen} />
      <Container className={classNames({ navIsOpen })}>
        <button onClick={() => setnavIsOpen(!navIsOpen)}>&#9776;</button>
        <ManuscriptWrapper>
          <Manuscript />
        </ManuscriptWrapper>
      </Container>
    </>
  )
}

export default App
