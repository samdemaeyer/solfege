import React from 'react'
import styled from 'styled-components'
import Manuscript from './components/Manuscript/Manuscript'

const Container = styled.div`
  display: flex;
  justify-content: center;
`

const ManuscriptWrapper = styled.div`
  width: 200px;
`

const App: React.FC = () => (
  <Container>
    <ManuscriptWrapper>
      <Manuscript />
    </ManuscriptWrapper>
  </Container>
)

export default App
