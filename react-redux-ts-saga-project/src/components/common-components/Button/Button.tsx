import React from 'react'

interface IButtonProps {
  onClick: () => void
}

export const Button = ({ onClick }: IButtonProps) => {
  return (
    <button onClick={onClick}>Click Me</button>
  )
}
