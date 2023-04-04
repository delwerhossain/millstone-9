import React from 'react';
import {useLoaderData, useNavigate } from 'react-router-dom';

const PostsDetails = () => {
    const post = useLoaderData()
    const { body, id, userId, title } = post;
    // console.log(post);
  const navigate = useNavigate()
  console.log(useNavigate());
  const handlenavigate = () => {
      
        navigate(-1);
    }
    return (
        <div className="card w-96 bg-primary text-primary-content">
        <div className="card-body">
            
      <h2 className="card-title"> userId : {userId} </h2>
      <h2 className="card-title"> title : {title} </h2>
      <p className="bg-pink-200 rounded-lg p-2 "> {body}</p>
                <div className="card-actions justify -end">
                    <button onClick={handlenavigate} className='btn'> go back</button>
      </div>
    </div>
  </div>
    );
};

export default PostsDetails;