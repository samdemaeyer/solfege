import React from 'react'
import { UlNoStyles } from 'styles/Lists'
import { NavBar } from 'styles/NavBar'
import classNames from 'classnames'
import { Link } from 'react-router-dom'

interface Props {
  isNavOpen: boolean
}

const NavBarComponent: React.FC<Props> = ({ isNavOpen }) => (
  <NavBar data-testid="NavBar" className={classNames({ isNavOpen })}>
    <UlNoStyles data-testid="UnorderedList">
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/notes">Notes</Link>
      </li>
    </UlNoStyles>
  </NavBar>
)

export default NavBarComponent
