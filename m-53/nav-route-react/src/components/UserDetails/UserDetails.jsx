import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const UserDetails = () => {
    const User = useLoaderData()
    const { id, name, phone, website, username, email } = User;
    const navigate = useNavigate()
    const handlenavigate = () => {
        navigate(-1)
    }
    return (
        <div className="card card-side bg-base-100 shadow-xl">
      <figure>
        <img
          src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg"
          alt="Movie"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>Phone : {phone}</p>
        <p>Email : {email}</p>
        <div className="card-actions justify-end">
         <button onClick={handlenavigate} className='btn'> go back</button>
        </div>
      </div>
    </div>
    );
};

export default UserDetails;