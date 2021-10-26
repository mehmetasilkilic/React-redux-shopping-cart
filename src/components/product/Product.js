import React from 'react'
import formatCurrency from '../../assets/utilities/currency'
import './product.scss'

const Product = props => {
    return (
        <div className="product">
            <a href={"#" + props.id} className="img-wrapper">
                <img src={props.image} alt={props.title} />
            </a>
            <div className="wrapper">
                <a href={"#" + props.id} className="title-wrapper">
                    <h3>{props.title}</h3>
                </a>
                <div className="price-wrapper">
                    <h4>{formatCurrency(props.price)}</h4>
                    <button className="button-primary">Add To Cart</button>
                </div>
            </div>
        </div>
    )
}

export default Product
