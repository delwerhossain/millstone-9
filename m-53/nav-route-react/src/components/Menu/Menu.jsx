import React from 'react';

const Menu = ({ menu }) => {
    const {id , title , link} =menu
    return (
        <a className='hover:bg-indigo-400 rounded-lg p-2 ' href={link}>{title}</a>
    );
};

export default Menu; 