import React from 'react'
import { render, screen, getRoles } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import NavBar from './NavBar'

describe('<NavBar />', () => {
  beforeEach(() => {
    render(<NavBar navIsOpen={true} />)
  })

  test('it should mount', () => {
    const navBar = screen.getByTestId('NavBar')

    expect(navBar).toBeInTheDocument()
  })

  test('it should render 3 list items with links', () => {
    const UnorderedList = screen.getByTestId('UnorderedList')
    const { list, listitem, link } = getRoles(UnorderedList)

    expect(listitem.length).toBe(3)
    expect(list[0].localName).toBe('ul')
    listitem.forEach((item) => expect(item.localName).toBe('li'))
    link.forEach((item) => expect(item.localName).toBe('a'))
  })
})
