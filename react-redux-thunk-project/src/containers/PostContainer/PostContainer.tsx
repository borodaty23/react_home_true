import React from 'react'

import { Paragraph } from '../../components/common-components/Paragraph/Paragraph'
import { Title } from '../../components/common-components/Title/Title'
import { IPosts } from '../../redux/actions/addPostsActionCreator/addPostsActionCreator'

interface IPostContainer {
  title: string
  body: string
}

export const PostContainer = ({ title, body }: IPostContainer) => {
  return (
    <>
      <Paragraph></Paragraph>
      <Title></Title>
    </>
  )
}
