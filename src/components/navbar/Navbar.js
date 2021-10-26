import React from 'react'
import Badge from '@mui/material/Badge';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import './navbar.scss'

const Navbar = () => {
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
                    <h1 className="logo">BRAND.</h1>
                </div>
                <div className="right">
                    <div className="menuItem">REGISTER</div>
                    <div className="menuItem">SIGN IN</div>
                    <div className="menuItem">
                        <Badge badgeContent={4} color="error">
                            <ShoppingCartIcon />
                        </Badge>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar

