import React from "react";
import Cards from "../Cards/Cards";

const PriceList = () => {
  const priceTables = [
    { membershipType: "Basic", duration: "Month-to-Month", price: 50 },
    { membershipType: "Basic", duration: "6 Months", price: 250 },
    { membershipType: "Basic", duration: "12 Months", price: 500 },
    { membershipType: "Premium", duration: "Month-to-Month", price: 75 },
    { membershipType: "Premium", duration: "6 Months", price: 375 },
    { membershipType: "Premium", duration: "12 Months", price: 750 },
    { membershipType: "VIP", duration: "Month-to-Month", price: 100 },
    { membershipType: "VIP", duration: "6 Months", price: 500 },
    { membershipType: "VIP", duration: "12 Months", price: 1000 },
  ];

    return <div className="my-8 grid lg:grid-cols-3 md:grid-cols-2 gap-4 ">{priceTables.map((priceTable ,i ) => <Cards key={i} priceTable={priceTable}></Cards>)}</div>; 
};

export default PriceList;
