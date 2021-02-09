import React from 'react'
import { render, screen } from '@testing-library/react'
import App from './App'

describe('<App />', () => {
  test('it should mount', () => {
    render(<App />)
    const welcomeText = screen.getByText(/Welcome to Solfege/i)

    expect(welcomeText).toBeInTheDocument()
    expect(welcomeText.localName).toBe('h1')
  })
})
