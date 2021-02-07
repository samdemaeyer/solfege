import React from 'react'
import Line from './Line/Line'

const notes = [
  { id: 'F-1', note: 'F', isVisible: true },
  { id: 'E-1', note: 'E', isVisible: false },
  { id: 'D-1', note: 'D', isVisible: true },
  { id: 'C-1', note: 'C', isVisible: false },
  { id: 'B-0', note: 'B', isVisible: true },
  { id: 'A-0', note: 'A', isVisible: false },
  { id: 'G-0', note: 'G', isVisible: true },
  { id: 'F-0', note: 'F', isVisible: false },
  { id: 'E-0', note: 'E', isVisible: true },
  { id: 'D-0', note: 'D', isVisible: false },
  { id: 'C-0', note: 'C', isVisible: false },
]

const Manuscript: React.FC = () => {
  return (
    <div data-testid="Manuscript">
      {notes.map(({ id, isVisible }) => (
        <Line key={id} isVisible={isVisible} />
      ))}
    </div>
  )
}

export default Manuscript
