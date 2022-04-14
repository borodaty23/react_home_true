import React from 'react'

interface IButton {
  onClick: () => void
}

export const Button = ({ onClick }: IButton) => {
  return (
    <button onClick={onClick}>Click Me</button>
  )
}
