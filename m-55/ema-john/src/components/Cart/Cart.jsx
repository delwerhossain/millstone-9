import React from 'react';
import './Cart.css';
import { TrashIcon } from "@heroicons/react/24/solid";

const Cart = ({ cart ,handleClear,children }) => {
    // const cart = props.cart; // option 1
    // const {cart} = props; // option 2

    // console.log(cart);

    let totalPrice = 0;
    let totalShipping = 0;
    let quantity = 0;
    for (const product of cart) {
        // if(product.quantity === 0){
        //     product.quantity = 1;
        // }
        // product.quantity = product.quantity || 1;

        totalPrice = totalPrice + product.price * product.quantity;
        totalShipping = totalShipping + product.shipping;
        quantity = quantity + product.quantity;
    }
    const tax = totalPrice * 7 / 100;

    const grandTotal = totalPrice + totalShipping + tax;

    return (
        <div className='cart'>
            <h4>Order Summary</h4>
            <p>Selected Items: {quantity}</p>
            <p>Total Price: ${totalPrice}</p>
            <p>Shipping: ${totalShipping}</p>
            <p>Tax: ${tax.toFixed(2)}</p>
            <h6>Grand Total: ${grandTotal.toFixed(2)} </h6>

            <button onClick={handleClear} className='btn mr-8 mt-12 mb-5 bg-red-600 text-white border-0'> Clear cart     <TrashIcon className="h-6 w-6 text-white"></TrashIcon></button>
            {children}
        </div>
    );
};

export default Cart;