import React, { useState } from "react";
import Menu from "../Menu/Menu";
import { Bars3CenterLeftIcon ,XMarkIcon} from '@heroicons/react/24/solid'

const Header = () => {
  const menuList = [
    {
      id: 1,
      title: "Home",
      link: "/",
    },
    {
      id: 2,
      title: "About",
      link: "/about",
    },
    {
      id: 3,
      title: "Services",
      link: "/services",
    },
    {
      id: 4,
      title: "Contact",
      link: "/contact",
    },
  ];

    const [open, setOpen] = useState(true)
 
  return (
      <li className="text-xl font-bold flex md:gap-6 gap-2 md:flex-row flex-col items-end  justify-center pr-4 py-3 bg-indigo-700 text-white">
          
          <button onClick={()=>setOpen(!open)} className="md:hidden btn bg-white hover:bg-blue-100 border border-0"> {open? <Bars3CenterLeftIcon  className="h-8 w-8 text-blue-500" />: <XMarkIcon  className="h-8 w-8 text-blue-500" /> }</button>
      {open || menuList.map((menu) => (
        <Menu key={menu.id} menu={menu}></Menu>
      ))}
    </li>
  );
};

export default Header;
