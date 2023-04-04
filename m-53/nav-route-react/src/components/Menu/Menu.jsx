import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import ActiveLink from '../ActiveLink/ActiveLink';

const Menu = ({ menu }) => {
    const {id , title , link} =menu
    return (
        <NavLink className={({isActive})=> isActive ? 'hover:bg-red-400  bg-red-800 rounded-lg p-2':'hover:bg-indigo-400 bg-transparent rounded-lg p-2'} to={link}>{title}</NavLink>
    );
};
 
export default Menu; 