import React from 'react'
import { Link } from 'react-router-dom'
import './Shop.css'
import ShopTop from '../components/ShopTop'
import bestSells from '../components/img/best_sells.webp'

import { useValueContext } from '../reducer'

import a1 from '../components/img/buttonup.webp'
import a2 from '../components/img/pinehat.webp'

import Product from '../components/Product'
// const products = [
//     { title: "Pine Hats", image: a1, price: 5, link: "pine-hats" },
//     { title: "Mingo Button Up", image: a2, price: 22, link: "mingo-button-up" },
//     //{ title: "Pine Hats", image: a1, price: 5, link: "pine-hats" },
// ]
function Shop() {
    const [{products}] = useValueContext()
    const [product, setProduct] = React.useState(products)
    const [type, setType] = React.useState("All")
    const [color, setColor] = React.useState("All")
    const [price, setPrice] = React.useState(0)
    const ProductType = () => {
        if (products.length === 0) {
            return []
        }
        let temp = []
        const type = [...new Set(products.map(item => item.type))]
        for (let i of type) {
            let count = 0
            for (let j of products) {
                if (i === j.type)
                    count++
            }
            temp = [...temp, { type: i, count: count }]
        }
        return [{type: "All", count: 0}, ...temp]
    }
    const Colors = () => {
        if (products.length === 0) {
            return []
        }
        let temp = []
        const perColor = [...new Set(products.map(item => item.color))]
        for (let i of perColor) {
            let count = 0
            for (let j of products) {
                if (i === j.color) 
                    count++
            }
            temp = [...temp, { color: i, count: count }]
        }
        return [{color: "All", count: 0}, ...temp]
    }
    const filterProduct = () => {
        let temp
        if (type === "All" && color === "All") {
            return product
        } else {
            if (type === "All") {
                temp = product.filter(item => item.color === color)
            }else if (color === "All") {
                temp = product.filter(item => item.type === type)
            } else {
                temp = product.filter(item => item.type === type && item.color === color)
            }
        }
        return temp
    }
    const productFinish = filterProduct().filter(item => item.price >= price)
    const minPrice = Math.min(...products.map(item => item.price))
    const maxPrice = Math.max(...products.map(item => item.price))
    return (
        <div className="shops">
            <ShopTop title="Shop" image={ bestSells } />
            <div className="shops__content">
                <div className="filter">
                    <div>
                        <h5>Product Type</h5>
                        <select onChange={ event => setType(event.target.value) }>
                            {
                                ProductType().map((item, index) => <option key={ index } value={ item.type }>{`${ item.type } ${item.count !== 0 ? `(${ item.count })` : ""}`}</option>)
                            }
                        </select>
                    </div>
                    <div>
                        <h5>Colors</h5>
                        <select onChange={ event => setColor(event.target.value) }>
                            {
                                Colors().map((item, index) => <option key={ index } value={ item.color }>{`${ item.color } ${item.count !== 0 ? `(${ item.count })` : ""}`}</option>)
                            }
                        </select>
                    </div>
                    <div>
                        <h5>Price: { price }$</h5>
                        <input type="range" min={ minPrice } max={ maxPrice } value={ price } onChange={ event => setPrice(event.target.value) } />
                    </div>
                </div>
                <div className="products">
                    {
                        productFinish.length > 0 && productFinish.map((item, index) => <Product key={ index } title={ item.title } image={ item.image } price={ item.price } link={ item.link + "-shop" } />)
                    }
                </div>
                {
                    productFinish.length === 0 && (<div style={{ fontSize: "1rem", textAlign: "center", padding: "50px 10px" }}>Not found products...</div>)
                }
            </div>
        </div>
    )
}
export default Shop