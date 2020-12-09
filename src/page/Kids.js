import React from 'react'
import './Shop.css'
import { Link } from 'react-router-dom'
import { useValueContext, countHero } from '../reducer'
import ShopTop from '../components/ShopTop'
import Product from '../components/Product'


export default function Kids() {
    const [{kids}] = useValueContext()
    const [type, setType] = React.useState("All")
    const [color, setColor] = React.useState("All")
    const [price, setPrice] = React.useState(0)
    const productType = countHero("type", kids)
    const colors = countHero("color", kids)
    const minPrice = Math.min(...kids.map(item => item.price))
    const maxPrice = Math.max(...kids.map(item => item.price))
    const filterProduct = () => {
        let temp = kids
        if (type === "All" && color === "All") {

        } else if (type === "All") {
            temp = kids.filter(item => item.color === color)
        } else if (color === "All") {
            temp = kids.filter(item => item.type === type)
        } else {
            temp = kids.filter(item => item.color === color)
            temp = kids.filter(item => item.type === type)
        }
        temp = temp.filter(item => item.price >= price)
        return temp
    }
    return (
        <div className="shops">
            <ShopTop title="Kids" image={ "" } />
            <div className="shops__content">
                <div className="filter">
                    <div>
                        <h5>Product Type</h5>
                        <select onChange={ event => setType(event.target.value) }>
                            {
                                productType.map((item, index) => <option key={ index } value={ item.type }>{`${ item.type } ${item.count !== 0 ? `(${ item.count })` : ""}`}</option>)
                            }
                        </select>
                    </div>
                    <div>
                        <h5>Colors</h5>
                        <select onChange={ event => setColor(event.target.value) }>
                            {
                                colors.map((item, index) => <option key={ index } value={ item.type }>{`${ item.type } ${item.count !== 0 ? `(${ item.count })` : ""}`}</option>)
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
                        filterProduct().length > 0 && filterProduct().map((item, index) => <Product key={ index } title={ item.title } image={ item.image } price={ item.price } link={ item.link + "-kids" } soldout={ item.soldout } />)
                    }
                </div>
                {
                   filterProduct() === 0 && (<div style={{ fontSize: "1rem", textAlign: "center", padding: "50px 10px" }}>Not found products...</div>)
                }
            </div>
        </div>
    )
}
