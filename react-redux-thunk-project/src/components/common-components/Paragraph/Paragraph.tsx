import React from 'react'

interface IParagraphProps {
  children: string
}

export const Paragraph = ({ children }: IParagraphProps) => {
  return (
    <p>{children}</p>
  )
}
