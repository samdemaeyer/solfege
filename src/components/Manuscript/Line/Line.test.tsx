import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Line from './Line'

describe('<Line />', () => {
  test('it should mount', () => {
    render(<Line key="1" isVisible={true} />)

    const line = screen.getByTestId('Line')

    expect(line).toBeInTheDocument()
  })
})
