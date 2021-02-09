import React from 'react'
import { render, screen, getRoles } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import NavBar from './NavBar'
import { BrowserRouter as Router } from 'react-router-dom'

describe('<NavBar />', () => {
  beforeEach(() => {
    render(
      <Router>
        <NavBar isNavOpen={true} />
      </Router>,
    )
  })

  test('it should mount', () => {
    const navBar = screen.getByTestId('NavBar')

    expect(navBar).toBeInTheDocument()
  })

  test('it should render 2 list items with links', () => {
    const UnorderedList = screen.getByTestId('UnorderedList')
    const { list, listitem, link } = getRoles(UnorderedList)

    expect(listitem.length).toBe(2)
    expect(list[0].localName).toBe('ul')
    listitem.forEach((item) => expect(item.localName).toBe('li'))
    link.forEach((item) => expect(item.localName).toBe('a'))
  })
})
