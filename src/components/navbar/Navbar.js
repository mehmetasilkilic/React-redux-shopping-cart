import React from 'react'
import Badge from '@mui/material/Badge';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom'
import { useSelector } from "react-redux"
import './navbar.scss'


const Navbar = () => {

    const cartQuantity = useSelector(state => state.cart.quantity);

    return (
        <div className="navbar">
            <div className="wrapper">
                <div className="left">
                    <span className="language">EN</span>
                    <div className="searchContainer">
                        <input placeholder="Search" />
                        <SearchIcon style={{ color: "gray", fontSize: 16 }} />
                    </div>
                </div>
                <div className="center">
                    <Link to={`/`}>
                        <h1 className="logo">BRAND.</h1>
                    </Link>
                </div>
                <div className="right">
                    <Link to="/productlist"><div className="menuItem">PRODUCTS</div></Link>
                    <Link to="/register"><div className="menuItem">REGISTER</div></Link>
                    <Link to="/login"><div className="menuItem">SIGN IN</div></Link>
                    <Link to="/cart">
                        <div className="menuItem">
                            <Badge badgeContent={cartQuantity} color="error">
                                <ShoppingCartIcon />
                            </Badge>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar

