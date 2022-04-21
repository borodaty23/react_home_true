import axios from "axios";
import { IPosts } from "../../redux/actions/addPostsActionCreator/addPostsActionCreator";

export const getPosts = () =>
    axios
        .get<IPosts[]>(`https://jsonplaceholder.typicode.com/posts`)