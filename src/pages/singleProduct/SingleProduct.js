import React from 'react'
import './singleProduct.scss'
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';

const SingleProduct = () => {
    return (
        <div className="singleProduct">
            <div className="imgContainer">
                <img src="https://i.ibb.co/S6qMxwr/jean.jpg" alt="" />
            </div>
            <div className="infoContainer">
                <h1>Denim Jumpsuit</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                    venenatis, dolor in finibus malesuada, lectus ipsum porta nunc, at
                    iaculis arcu nisi sed mauris. Nulla fermentum vestibulum ex, eget
                    tristique tortor pretium ut. Curabitur elit justo, consequat id
                    condimentum ac, volutpat ornare.
                </p>
                <span>$ 20</span>
                <div className="filterContainer">
                        <span>Size</span>
                        <select>
                            <option>XS</option>
                            <option>S</option>
                            <option>M</option>
                            <option>L</option>
                            <option>XL</option>
                        </select>
                </div>
                <div className="addContainer">
                    <div className="amountContainer">
                        <RemoveIcon />
                        <span>1</span>
                        <AddIcon />
                    </div>
                    <button>ADD TO CART</button>
                </div>
            </div>
        </div>
    )
}

export default SingleProduct
