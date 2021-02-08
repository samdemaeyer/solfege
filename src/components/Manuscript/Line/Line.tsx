import React, { useState } from 'react'
import classNames from 'classnames'
import { Line } from './Styles'

interface Props {
  key: string
  isVisible: boolean
}

const LineComponent: React.FC<Props> = ({ isVisible }) => {
  const [isActive, setIsActive] = useState<boolean>(false)

  return <Line data-testid="Line" className={classNames({ isVisible, isActive })} onClick={() => setIsActive(true)} />
}

export default LineComponent
