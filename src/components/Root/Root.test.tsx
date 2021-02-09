import React from 'react'
import { render, screen } from '@testing-library/react'
import Root from './Root'
import { BrowserRouter as Router } from 'react-router-dom'

describe('<Root />', () => {
  test('it should mount', () => {
    render(
      <Router>
        <Root />
      </Router>,
    )

    expect(screen.getByTestId('NavBar')).toBeInTheDocument()
    expect(screen.getByTestId('Container')).toBeInTheDocument()
    expect(screen.getByTestId('NavToggleBtn')).toBeInTheDocument()
  })
})
