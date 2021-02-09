import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Notes from './Notes'

describe('<NavBar />', () => {
  beforeEach(() => {
    render(<Notes />)
  })

  test('it should mount', () => {
    expect(screen.getByTestId('ManuscriptWrapper')).toBeInTheDocument()
  })
})
