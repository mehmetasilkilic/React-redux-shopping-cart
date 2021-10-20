import React, { useState } from 'react'
import './products.scss'
import Card from '../card/Card'
import FilterBar from '../../components/filterBar/FilterBar'
import cardData from '../../assets/JsonData/data.json'

const Products = () => {

    const [size, setSize] = useState('')
    const [sort, setSort] = useState('')

    return (
        <div className="products">
            <h2>Products</h2>
            <hr />
            <FilterBar
                length={cardData.length}
                size={cardData.size}
                sort={cardData.sort}
                filterProducts={e => { setSize(e.target.value) }}
                sortProducts={e => { setSort(e.target.value) }}
            />
            <div className="products-wrapper">
                {
                    cardData.products.slice().sort((a, b) => (
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
                    )).filter(item => {
                        if (size === "") {
                            return item
                        } else if (item.availableSizes.includes(size)) {
                            return item
                        }
                    }).map((item, index) => (
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
