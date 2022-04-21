import React, {useCallback} from 'react'
import { useDispatch, useSelector } from "react-redux";
import { Button } from '../../components/common-components/Button/Button'
import { RootState } from '../../redux/reducers';
import Loader from '../../components/common-components/Loader/Loader';
import { getPosts } from '../../redux/actions/addPostsActionCreator/addPostsActionCreator';
import { PostsContainer } from "../../containers/PostsContainers/PostsContainer"

export const PostPage = () => {
const { isLoading, posts } = useSelector((state: RootState) => state.posts)

const dispatch = useDispatch();
    const dispatchedAddPosts = useCallback(
        () => dispatch(getPosts()),
        [dispatch]
    );
     
  return (
    <>
        <Button onClick={dispatchedAddPosts}></Button>
        {isLoading ? <Loader/> : <PostsContainer posts={posts}></PostsContainer>}
    </> 
  ) 
}
