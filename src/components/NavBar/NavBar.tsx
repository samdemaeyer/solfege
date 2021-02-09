import React from 'react'
import { UlNoStyles } from 'styles/Lists'
import { NavBar } from 'styles/NavBar'
import classNames from 'classnames'
import { Link } from 'react-router-dom'

interface Props {
  navIsOpen: boolean
}

const NavBarComponent: React.FC<Props> = ({ navIsOpen }) => (
  <NavBar data-testid="NavBar" className={classNames({ navIsOpen })}>
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
