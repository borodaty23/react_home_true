import React from 'react'
import { Paragraph } from '../../components/common-components/Paragraph/Paragraph'
import { Title } from '../../components/common-components/Title/Title'

export interface IPostContainerProps {
  title: string
  body: string
}

export const PostContainer = ({ title, body }: IPostContainerProps) => {
  return (
    <>
        <Title>{title}</Title>
        <Paragraph>{body}</Paragraph>
    </>
  )
}
