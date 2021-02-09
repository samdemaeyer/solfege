import React from 'react'
import { render, screen } from '@testing-library/react'
import App from './App'

describe('<App />', () => {
  test('it should mount', () => {
    render(<App />)
    expect(screen.getByTestId('App')).toBeInTheDocument()
    expect(screen.getByTestId('NavBar')).toBeInTheDocument()
    expect(screen.getByTestId('Container')).toBeInTheDocument()
    expect(screen.getByTestId('NavToggleBtn')).toBeInTheDocument()
    expect(screen.getByTestId('ManuscriptWrapper')).toBeInTheDocument()
    expect(screen.getByTestId('Manuscript')).toBeInTheDocument()
  })
})
