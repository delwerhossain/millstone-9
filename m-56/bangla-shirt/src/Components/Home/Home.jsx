import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Products from '../Products/Products';
import Carts from '../Carts/Carts';

const Home = () => {
    const products = useLoaderData()
    const [cartProducts , setCartProducts] = useState([])
    const handleCarts = (id) => {
        // const addedProduct = []
        const findProducts = products.find(product => product._id === id)
        // addedProduct.push(findProducts)
        setCartProducts([...cartProducts, findProducts])
        // console.log(addedProduct);
    }

    return (
        <div className='grid lg:grid-cols-4 grid-cols-1 mt-6 '>
            <div className='col-span-1 lg:col-span-3'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:mx-4'>
              {products.map(product => <Products key={product._id} product={product} handleCarts={handleCarts}></Products>)}
        </div>
            </div>
            {/* order card */}
            <div className='col-span-1 rounded-2xl lg:my-0 my-4 bg-orange-300 h-full
             '>
                <Carts key={cartProducts.map(pd => pd._id)} cartProducts={cartProducts } ></Carts>
            </div>
       </div>
    );
};

export default Home;