import React from 'react';

export const NavBar = () => {
    return (
       <div className='contenedor'>
            <h2 className='Logo'>Hypasia</h2>
            <div id='menu' >
                <ul>
                    <li><a  href='/'>Home</a></li>
                    <li><a href='/'>Productos</a></li>
                    <li><a href='/'>Nosotros</a></li>
                    <li><a href='/'>Contacto</a></li>  
                </ul>
            </div>
       </div>
    );
}

export default NavBar;

