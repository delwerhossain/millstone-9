import React from 'react';

const Carts = ({ pd ,handleRemove }) => {
    // console.log(cartProducts);
    return (
        <h1 className='text-3xl p-2 rounded-lg bg-indigo-300'> name : {pd.name} <button onClick={()=>handleRemove(pd._id)}  className='btn'>X</button></h1>
    );
};

export default Carts;