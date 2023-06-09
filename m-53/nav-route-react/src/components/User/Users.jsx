import React from "react";
import { Link } from "react-router-dom";

const Users = ({ data }) => {
  const { id, name, phone, website, username, email } = data;
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
          <Link to={`/user/${id}`} className="btn btn-primary">
            Watch
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Users;
