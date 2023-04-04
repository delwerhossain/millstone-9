import React, { useState } from "react";
import Menu from "../Menu/Menu";
import { Bars3CenterLeftIcon ,XMarkIcon} from '@heroicons/react/24/solid'
import { Outlet } from "react-router-dom";

const Header = () => {
  const menuList = [
    {
      id: 1,
      title: "Home",
      link: "/",
    },
    {
      id: 2,
      title: "Price",
      link: "price",
    },
    {
      id: 3,
      title: "Chart",
      link: "chart",
    },
    {
      id: 4,
      title: "Contact",
      link: "contact",
    },
    {
      id: 5,
      title: "User",
      link: "user",
    },
  ];

    const [open, setOpen] = useState(false)
 
  return (
    <div>
   <li className="duration-500 text-xl font-bold flex md:gap-6 gap-2 md:flex-row flex-col items-end  justify-center pr-4 py-3 bg-indigo-700 text-white rounded-lg ">
          
          <button onClick={()=>setOpen(!open)} className=" md:hidden btn bg-white hover:bg-blue-100 border border-0"> {open? <Bars3CenterLeftIcon  className="h-8 w-8 text-blue-500" />: <XMarkIcon  className="h-8 w-8 text-blue-500" /> }</button>
      {open || menuList.map((menu) => (
        <Menu key={menu.id} menu={menu}></Menu>
      ))}
      </li>
      <div className="my-1">
      <Outlet></Outlet>
      </div>
      
    </div>
   
  );
};

export default Header;
