import React from "react";
import { Link } from "react-router-dom";


const Post = ({ post }) => {
//   console.log(post);
  const { body, id, userId, title } = post;
  return (
    <div className="card w-96 bg-primary text-primary-content">
          <div className="card-body">
              
        <h2 className="card-title"> userId : {userId} </h2>
        <h2 className="card-title"> title : {title} </h2>
        <p className="bg-pink-200 rounded-lg p-2 text-black "> {body}</p>
        <div className="card-actions justify-end">
          <Link to={`/posts/${id}`} className="btn">Buy Now</Link>
        </div>
      </div>
    </div>
  );
};

export default Post;
