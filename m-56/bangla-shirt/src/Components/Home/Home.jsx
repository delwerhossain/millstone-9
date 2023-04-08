import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Products from "../Products/Products";
import Carts from "../Carts/Carts";
import { createContext } from "react";
import Order from "../Order/Order";

export const LevelContext = createContext(0);

const Home = () => {
  const products = useLoaderData();
  const [cartProducts, setCartProducts] = useState([]);
  const [count, setCount] = useState(0);
  const handleCarts = (id) => {
    // const addedProduct = []
    const exist = cartProducts.find((product) => product._id === id._id);
    if (exist) {
      alert("Product already");
    } else {
      setCartProducts([...cartProducts, id]);
    }
  };

  const handleRemove = (id) => {
    const remove = cartProducts.filter((product) => product._id !== id);
    setCartProducts([...remove]);
  };

  return (
    <LevelContext.Provider value={[count, setCount]}>
      <div className="grid lg:grid-cols-4 grid-cols-1 mt-6 ">
        <div className="col-span-1 lg:col-span-3">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:mx-4">
                      <button onClick={()=>setCount(count+1)} className="btn">counter </button>
            {products.map((product) => (
              <Products
                key={product._id}
                product={product}
                handleCarts={handleCarts}
              ></Products>
            ))}
          </div>
        </div>
        {/* order card */}
        <div
          className="col-span-1 rounded-2xl lg:my-0 my-4 bg-orange-300 h-full
             "
        >
          <div className=" lg:fixed lg:my-0 my-4">
            <h1 className="text-6xl"> cartProducts : {cartProducts.length}</h1>
            {cartProducts.map((pd) => (
              <Carts key={pd._id} pd={pd} handleRemove={handleRemove}></Carts>
            ))}
                      
                <Order></Order>
          </div>
        </div>
      </div>
    </LevelContext.Provider>
  );
};

export default Home;
