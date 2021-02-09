import React from 'react'
import { UlNoStyles } from '../../styles/Lists'
import { NavBar } from '../../styles/NavBar'
import classNames from 'classnames'

interface Props {
  navIsOpen: boolean
}

const NavBarComponent: React.FC<Props> = ({ navIsOpen }) => (
  <NavBar className={classNames({ navIsOpen })}>
    <UlNoStyles>
      <li>
        <a href="#">Link 1</a>
      </li>
      <li>
        <a href="#">Link 2</a>
      </li>
      <li>
        <a href="#">Link 3</a>
      </li>
    </UlNoStyles>
  </NavBar>
)

export default NavBarComponent
