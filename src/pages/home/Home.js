import React from 'react'
import './home.scss'
import Products from '../../components/products/Products'
import Cart from '../../components/cart/Cart'

const Home = () => {
    return (
        <div className="home">
            <div className="wrapper">
                <Products />
                <Cart />
            </div>
        </div>
    )
}

export default Home
