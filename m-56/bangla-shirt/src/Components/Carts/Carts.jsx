import React from 'react';

const Carts = ({cartProducts}) => {
    return (
        <div className=' lg:fixed lg:my-0 my-4'>
            <h1 className='text-6xl'> cartProducts : { cartProducts.length}</h1>
        </div>
    );
};

export default Carts;