import React from 'react';

const Cards = ({ priceTable }) => {
    const {membershipType , duration ,price } = priceTable
    // console.log(price);
    return (
        <div className=" card w-96 glass my-20">
        <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="card!"/></figure>
        <div className="card-body">
          <h2 className="card-title">{membershipType}</h2>
          <p>{duration}</p>
          <p className='font-bold '>price : {price}$</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Learn now!</button>
          </div>
        </div>
      </div>
    );
};

export default Cards;