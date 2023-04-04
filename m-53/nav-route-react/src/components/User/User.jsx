import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Users from './Users';

const User = () => {
    const datas = useLoaderData()
    return (
        <div className=''>
           
            <h1 className='text-5xl bg-blue-500 text-white rounded-lg p-4 my-2 '> Chart part from route </h1>
            
            <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-3 mx-3'>
            {datas.map((data) => <Users key={data.id} data={data}></Users> )}

            </div>
      </div>
    );
};

export default User;