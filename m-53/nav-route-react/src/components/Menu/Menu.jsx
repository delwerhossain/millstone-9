import React from 'react';
import { Link } from 'react-router-dom';
// import ActiveLink from '../ActiveLink/ActiveLink';

const Menu = ({ menu }) => {
    const {id , title , link} =menu
    return (
        <Link className='hover:bg-indigo-400 rounded-lg p-2 ' to={link}>{title}</Link>
    );
};

export default Menu; 