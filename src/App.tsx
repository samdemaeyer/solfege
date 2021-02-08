import React, { useState } from 'react'
import { GlobalStyles } from './styles/Global'
import { Container, ManuscriptWrapper } from './styles/App'
import classNames from 'classnames'
import Manuscript from './components/Manuscript/Manuscript'
import NavBar from './components/NavBar/NavBar'

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
