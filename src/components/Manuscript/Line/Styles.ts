import styled from 'styled-components'

export const Line = styled.div`
  height: 1rem;
  position: relative;
  cursor: pointer;

  &:before {
    content: '';
    display: block;
    position: absolute;
    top: calc(0.5rem - 2px);
    width: 100%;
    height: 4px;
    background-color: #88888825;
  }

  &.isVisible:before {
    border-color: black;
    background-color: black;
  }
  &.isActive {
    &:after {
      content: '';
      width: 20px;
      height: 16px;
      background: black;
      display: block;
      position: absolute;
      border-radius: 50%;
      left: calc(50% - 10px);
    }
  }
`
