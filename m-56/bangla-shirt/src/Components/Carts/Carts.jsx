import React from 'react';

const Carts = ({cartProducts}) => {
    return (
        <div className=' fixed '>
            <h1 className='text-6xl'> cartProducts : { cartProducts.length}</h1>
        </div>
    );
};

export default Carts;