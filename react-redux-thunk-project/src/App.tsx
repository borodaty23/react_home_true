import React from 'react';
import './App.css';
import { Routes, Route } from "react-router";
import { PostPage } from "./pages/PostsPage/PostPage"


const App = () => {
    return (
        <Routes>
            <Route path='/' element={<PostPage />}/>
        </Routes>
    )
}

export default App;
