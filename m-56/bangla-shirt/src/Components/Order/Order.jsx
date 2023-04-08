import React, { useContext } from 'react';
import { LevelContext } from '../Home/Home';

const Order = () => {
    const [count ,serCount] = useContext(LevelContext)
   
    return (

        <div>
            <h1 className='bg-red-500 w-full text-5xl'> form order count : {count}</h1>

        </div>
    );
};

export default Order;