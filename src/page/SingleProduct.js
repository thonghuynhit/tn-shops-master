import React from 'react'
import { useValueContext } from '../reducer'
import Kids from './Kids'
import './SingleProduct.css'
import { Link } from 'react-router-dom'

function SingleProduct(props) {
    const [{ products, new_Arrivals, kids, tops, bottoms, hats, collaborations, carts }, dispatch] = useValueContext()
    const [quantity, setQuantity] = React.useState(1)
    const whatLink = props.match.params.slug.split("-")
    let lastLink = whatLink[whatLink.length - 1]
    const dataSingle = () => {
        switch(lastLink) {
            case "tops": return tops.find(item => (item.link + "-tops") === props.match.params.slug)
                break
            case "bottoms": return bottoms.find(item => (item.link + "-bottoms") === props.match.params.slug)
                break
            case "kids": return kids.find(item => (item.link + "-kids") === props.match.params.slug)
                break
            case "hats": return hats.find(item => (item.link + "-hats") === props.match.params.slug)
                break
            case "collaborations": return collaborations.find(item => (item.link + "-collaborations") === props.match.params.slug)
                break
            case "arrivals": return new_Arrivals.find(item => (item.link + "-new-arrivals") === props.match.params.slug)
                break
            default: return products.find(item => (item.link + "-shop") === props.match.params.slug)
        }
    }
    const directionLink = () => {
        if (lastLink === "arrivals") {
            return "new-arrivals"
        } else {
            return lastLink
        }
    }
    const incream = () => {
       if (quantity === "") {
            setQuantity(1)
       } else {
            setQuantity(() => parseInt(quantity) + 1)
       }
    }
    const decream = () => {
        if (quantity !== 1) {
            setQuantity(() => quantity - 1)
        }
        if (quantity === "") {
            setQuantity(1)
        }
    }
    const valueQuantity = e => {
        if (!isNaN(e.target.value)) {
            if (e.target.value !== " ") {
                setQuantity(e.target.value)
            }
        }
    }
    React.useEffect(() => {
        if (parseInt(quantity) === 0) {
            setQuantity(1)
        }
    }, [quantity])
    const autoId = () => {
        const date = new Date()
        const dayMonthYear = date.toLocaleDateString().split("/").join("")
        const hoursMinutesSeconds = date.toLocaleTimeString().split(":").join("").split(" ").join("")
        const miliseconds = date.getMilliseconds().toString()
        const random = Math.floor(Math.random() * 100).toString()
        return dayMonthYear + hoursMinutesSeconds + miliseconds + random
    }
    const addToCart = () => {
        if (quantity !== "") {
            const addCart = document.querySelector(".cart-img")
            addCart.classList.add("to-carts")
            setTimeout(() => { 
                addCart.classList.remove("to-carts")
            }, 2000)
            dispatch({
                type: "Add_to_cart",
                item: {
                    id: autoId(),
                    title: dataSingle().title,
                    image: dataSingle().image,
                    price: dataSingle().price,
                    color: dataSingle().color,
                    type: dataSingle().type,
                    quantity: quantity,
                    link: dataSingle().link + "-" + directionLink()
                }
            })
        }
    }
    console.log(carts)
    return (
        <div className="single-product">
            <div className="shops__top">
                <h6>
                    <Link className="link--shop" to="/"> Home </Link>
                     » <Link className="link--shop" to={`/${directionLink()}`}> { directionLink() } </Link>
                     » <span> { dataSingle().title } </span>
                </h6>
            </div>
            <div className="wrap-content">
                <div className="effect-cart">
                    <div className="cart-img">
                        <img src={ dataSingle().image } />
                    </div>
                    <h1>{ dataSingle().title }</h1>
                    <img src={ dataSingle().image } />
                </div>
                <div>
                    <h1>{ dataSingle().title }</h1>
                    <h4>${ dataSingle().price.toFixed(2) }</h4>
                    <div className="colors">Color: <span style={{ color: dataSingle().color, textTransform: "capitalize", fontWeight: "600" }}>{ dataSingle().color }</span></div>
                    <div className="types">Type: <span style={{ textTransform: "capitalize", fontWeight: "600" }}>{ dataSingle().type }</span></div>
                    <div className="quantity">Quantity: 
                        <div> 
                            <button onClick={ incream }> + </button>
                            <input type="text" value={ quantity } onChange={ valueQuantity } />
                            <button onClick={ decream }> - </button>
                        </div>
                    </div>
                    <div className="add-to-cart">
                        <button onClick={ addToCart }>Add to Cart</button>
                    </div>
                    <div className="buy-it-now">
                        <button>Buy it Now</button>
                    </div>
                    <div className="social">
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis suscipit enim et ex vulputate, non placerat sapien tincidunt.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default SingleProduct