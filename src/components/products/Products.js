import React from 'react'
import './products.scss'
import Card from '../card/Card'
import cardData from '../../assets/JsonData/data.json'

const Products = () => {
    return (
        <div className="products">
            <h2>Products</h2>
            <hr />
            <div className="products-wrapper">
                {
                    cardData.map((item, index) => (
                        <div className="card-wrapper col-lg-12 col-6" key={index}>
                            <Card
                                image={item.image}
                                title={item.title}
                                description={item.description}
                                price={item.price}
                            />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Products
