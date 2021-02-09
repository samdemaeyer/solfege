import React, { useState } from 'react'
import { GlobalStyles } from 'styles/Global'
import { Container, ManuscriptWrapper } from 'styles/App'
import Manuscript from 'components/Manuscript/Manuscript'
import NavBar from 'components/NavBar/NavBar'
import classNames from 'classnames'

const App: React.FC = () => {
  const [navIsOpen, setnavIsOpen] = useState<boolean>(false)

  return (
    <div data-testid="App">
      <GlobalStyles />
      <NavBar data-testid="NavBar" navIsOpen={navIsOpen} />
      <Container data-testid="Container" className={classNames({ navIsOpen })}>
        <button data-testid="NavToggleBtn" onClick={() => setnavIsOpen(!navIsOpen)}>
          &#9776;
        </button>
        <ManuscriptWrapper data-testid="ManuscriptWrapper">
          <Manuscript data-testid="Manuscript" />
        </ManuscriptWrapper>
      </Container>
    </div>
  )
}

export default App
