import React from 'react'
import { ManuscriptWrapper } from 'styles/App'
import Manuscript from 'components/Manuscript/Manuscript'

const Notes: React.FC = () => (
  <ManuscriptWrapper data-testid="ManuscriptWrapper">
    <Manuscript data-testid="Manuscript" />
  </ManuscriptWrapper>
)

export default Notes
