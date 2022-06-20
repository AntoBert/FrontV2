import React from 'react'
import { Link } from 'react-router-dom';
import "./navbar.scss";
import HomeIcon from '@material-ui/icons/Home';
import RestaurantMenuIcon from '@material-ui/icons/RestaurantMenu';
import LocalLibraryIcon from '@material-ui/icons/LocalLibrary';
import InfoIcon from '@material-ui/icons/Info';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const Navbar = (props) => {
    
    
    const handleNav = () => {
        props.setActive(!props.isActive);
    };
    
    return (
        <>
        <div className='navbar'>
            <div className='navbar-wrapper'>
                <Link to={`/`}>
                    <div className='navbar-wrapper-left'>
                        <h2 className='navbar-logo'>IoF</h2>
                    </div>
                </Link>
                <div className='navbar-wrapper-right'>
                    <div className='navbar-toogle'>
                        <div className='navbar-toogle-btn' />
                    </div>
                    <div className={`menu-icon ${props.isActive? "open": ""}`} onClick={handleNav}>
                        <span className="menu-icon__line"></span>
                    </div>
                </div>
            </div>
        </div>
        <div className={`navbar-mobile ${props.isActive? "": "invisible"}`}>
            <Link to={`/`}>
                <div>
                    <p>Home</p>
                    <HomeIcon style={{ fontSize: 40 }}/>
                </div>
            </Link>
            <Link to={`/products/Bevande`}>
                <div>
                    <p>Menù</p>
                    <RestaurantMenuIcon style={{ fontSize: 40 }}/>
                </div>
            </Link>
            <Link to={`/products/Bevande`}>
                <div>
                    <p>Tutorial</p>
                    <LocalLibraryIcon style={{ fontSize: 40 }}/>
                </div>
            </Link>
            <Link to={`/products/Bevande`}>
                <div>
                    <p>Chi Siamo</p>
                    <InfoIcon style={{ fontSize: 40 }}/>
                </div>
            </Link>
            <Link to={`/products/Bevande`}>
                <div>
                    <p>Carrello</p>
                    <ShoppingCartIcon style={{ fontSize: 40 }}/>
                </div>
            </Link>
        </div>
        </>
    )
}

export default Navbar
