import React from 'react';

const Products = ({ product ,handleCarts }) => {
    const { _id, name, picture, gender } = product
    
    return (
        <div className="card w-96 bg-base-100 shadow-xl image-full">
            <figure><img src={picture} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">Name :{name}</h2>
                <p> gender :{ gender}</p>
          <div className="card-actions justify-end">
            <button onClick={()=>handleCarts(_id)} className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    );
};

export default Products;