import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Post from './Post';

const Posts = () => {
    const posts = useLoaderData()
    return (
        <div className='grid grid-cols-3 grid-rows-1 gap-3 mx-3 items-center justify-center'>
            {posts.map(post => <Post key={post.id} post={post}></Post>)}
        </div>
    );
};

export default Posts;