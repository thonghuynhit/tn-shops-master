import React from 'react'
import { Link } from 'react-router-dom'

function ShopTop({title, image}) {
    return (
        <div className="shops__top">
            <h6>
                <Link className="link--shop" to="/">Home</Link>
                <span> » { title }</span>
            </h6>
            <img src={ image } />
            <h1>{ title }</h1>
        </div>
    )
}
export default ShopTop