import React from "react";
import { PostContainer} from "../PostContainer/PostContainer";
import {IPosts} from "../../redux/actions/addPostsActionCreator/addPostsActionCreator";
export { PostContainer } from "../PostContainer/PostContainer"

interface IPostsContainerProps {
    posts: IPosts[]
}

export const PostsContainer = ({ posts }: IPostsContainerProps) => {
    return (
        <>
            {posts.map(({ id, title, body }) => (<PostContainer key={id} title={title} body={body}></PostContainer>))}
        </>
    )
}