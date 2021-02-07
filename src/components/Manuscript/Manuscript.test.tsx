import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Manuscript from './Manuscript'

describe('<Manuscript />', () => {
  test('it should mount', () => {
    render(<Manuscript />)

    const manuscript = screen.getByTestId('Manuscript')

    expect(manuscript).toBeInTheDocument()
  })
})
