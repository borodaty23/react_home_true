import React from 'react'

interface ITitleProps {
  children: string
}

export const Title = ({ children }: ITitleProps) => {
  return (
    <h3>{children}</h3>
  )
}
