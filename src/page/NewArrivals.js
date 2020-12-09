import React from 'react'
import { Link } from 'react-router-dom'
import newArrivals from '../components/img/new-arrivals.jpg'
import ShopTop from '../components/ShopTop'
import './Shop.css'
import { useValueContext } from '../reducer'
import Product from '../components/Product'

function NewArrivals() {
    const [{new_Arrivals}] = useValueContext()
    const [price, setPrice] = React.useState(0)
    const [type, setType] = React.useState("All")
    const [color, setColor] = React.useState("All")
    const [product, setProduct] = React.useState(new_Arrivals)
    const minPrice = Math.min(...new_Arrivals.map(item => item.price))
    const maxPrice = Math.max(...new_Arrivals.map(item => item.price))


    const ProductType = () => {
        let temp = [{type: "All", count: 0}]
        const type = [...new Set(new_Arrivals.map(item => item.type))]
        for (let i of type) {
            let count = 0
            for (let j of new_Arrivals) {
                if (i === j.type) {
                    count++
                }
            }
            temp = [...temp, {type: i, count: count}]
        }
        return temp
    }
    const Colors = () => {
        let temp = [{color: "All", count: 0}]
        const color = [...new Set(new_Arrivals.map(item => item.color))]
        for (let i of color) {
            let count = 0
            for (let j of new_Arrivals) {
                if (i === j.color) {
                    count++
                }
            }
            temp = [...temp, {color: i, count: count}]
        }
        return temp
    }
    const filterProduct = () => {
        let temp
        if (type === "All" && color === "All") {
            temp = new_Arrivals
        } else {
            if (type === "All") {
                temp = new_Arrivals.filter(item => item.color === color)
            } else if (color === "All") {
                temp = new_Arrivals.filter(item => item.type === type)
            } else {
                temp = new_Arrivals.filter(item => item.type === type)
                temp = new_Arrivals.filter(item => item.color === color)
            }
        }
        temp = temp.filter(item => item.price >= price)
        return temp
    }
    return (
        <div className="shops">
            <ShopTop title="New Arrivals" image={ newArrivals } />
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
                        filterProduct().length > 0 && filterProduct().map((item, index) => <Product key={ index } title={ item.title } image={ item.image } price={ item.price } link={ item.link + "-new-arrivals" } />)
                    }
                </div>
                {
                    filterProduct().length === 0 && (<div style={{ fontSize: "1rem", textAlign: "center", padding: "50px 10px" }}>Not found products...</div>)
                }
            </div>
        </div>
    )
}
export default NewArrivals