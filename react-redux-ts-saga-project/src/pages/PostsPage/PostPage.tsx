import React, {useCallback} from 'react'
import { useDispatch, useSelector } from "react-redux";
import { PostContainer } from '../../containers/PostContainer/PostContainer'
import { Button } from '../../components/common-components/Button/Button'
import { RootState } from '../../redux/reducers';
import Loader from '../../components/common-components/Loader/Loader';
import { addAsyncPosts } from '../../redux/actions/addPostsActionCreator/addPostsActionCreator';


export const PostPage = () => {

const { isLoading, posts, error } = useSelector((state: RootState) => state.posts)

const dispatch = useDispatch();
    const dispatchedAddPosts = useCallback(
        () => dispatch(addAsyncPosts()),
        [dispatch]
    );
     
  return (
    <>
        <Button onClick={dispatchedAddPosts}></Button>
        {isLoading ? <Loader/> : console.log(posts)}
    </> 
  ) 
}
// posts.map(({ id, title, body }) => (<PostContainer key={id} title={title} body={body}></PostContainer>))
