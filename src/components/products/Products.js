import React, { useState } from 'react'
import './products.scss'
import Product from '../product/Product'
import FilterBar from '../../components/filterBar/FilterBar'
import cardData from '../../assets/JsonData/data.json'

const Products = () => {

    const [size, setSize] = useState('')
    const [sort, setSort] = useState('')

    const productNumber = item => {
        if (size === "") {
            return item
        } else if (item.availableSizes.includes(size)) {
            return item
        }
    }

    const orderProducts = (a, b) => (
        sort === "lowest"
            ? a.price > b.price
                ? 1
                : -1
            : sort === "highest"
                ? a.price < b.price
                    ? 1
                    : -1
                : a._id > b._id
                    ? 1
                    : -1
    )

    return (
        <div className="products">
            <h2>Popular Products</h2>
            <hr />
            <FilterBar
                length={cardData
                    .products
                    .filter(productNumber)
                    .length}
                size={cardData.size}
                sort={cardData.sort}
                filterProducts={e => { setSize(e.target.value) }}
                sortProducts={e => { setSort(e.target.value) }}
            />
            <div className="products-wrapper">
                {
                    cardData
                        .products
                        .slice()
                        .sort(orderProducts)
                        .filter(productNumber)
                        .map((item, id) => (
                            <div className="card-wrapper col-sm-12 col-md-6 col-lg-4 col-2" key={id}>
                                <Product
                                    image={item.image}
                                    title={item.title}
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