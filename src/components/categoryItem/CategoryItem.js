import React from 'react'
import './categoryItem.scss'

const CategoryItem = props => {
    return (
        <div className="categoryItem">
            <div className="imgWrapper">
                <img src={props.img} alt={props.title} />
            </div>
            <div className="info">
                <h2 className="title">{props.title}</h2>
                <button>SHOP NOW</button>
            </div>
        </div>
    )
}

export default CategoryItem
