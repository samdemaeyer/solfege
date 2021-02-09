import React from 'react'
import Manuscript from 'components/Manuscript/Manuscript'
import { ManuscriptWrapper } from './Styles'

const Notes: React.FC = () => (
  <ManuscriptWrapper data-testid="ManuscriptWrapper">
    <Manuscript data-testid="Manuscript" />
  </ManuscriptWrapper>
)

export default Notes
