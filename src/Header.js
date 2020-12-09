import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
import logo from './img/logo.svg'
import topslogo from './img/tops.webp'
import bottomslogo from './img/bottoms.webp'
import hatslogo from './img/hats.webp'
import collaborations from './img/collaborations.webp'
import kidslogo from './img/kids.webp'
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp'
import SearchIcon from '@material-ui/icons/Search'
import PermIdentityTwoToneIcon from '@material-ui/icons/PermIdentityTwoTone'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import { useValueContext } from './reducer'
import CloseIcon from '@material-ui/icons/Close'
import ResultsSearch from './components/resultsSearch'


function Header() {
    const [{products, tops, carts, checkoutToggle}, dispatch] = useValueContext()
    const [searchPage, setSearchPage] = React.useState("")
    React.useEffect(() => {
        const search = document.querySelector(".search")
        const searchText = document.querySelector(".searchText")
        const relustSearch = document.querySelector(".relust-search")
        const closeIcon = document.querySelector(".close-icon")
        search.addEventListener("click", () => {
            searchText.focus()
            searchText.classList.add("showInputText")
            search.classList.add("hiddenSearchButton")
            relustSearch.classList.add("show-relust")
            closeIcon.classList.add("show-close-icon")
        })
        closeIcon.addEventListener("click", () => {
            searchText.classList.remove("showInputText")
            search.classList.remove("hiddenSearchButton")
            relustSearch.classList.remove("show-relust")
            closeIcon.classList.remove("show-close-icon")
        })
    }, [searchPage])
    const processSearch = (wSearch) => {
        return wSearch.filter(item => {
            if (item.title.toLowerCase().search(searchPage) !== -1) {
                return item
            }
        })
    }
    const searchEngine = () => {
        let temp = []
        if (searchPage.length === 0) {
            return [{title: "Please enter .."}]
        } else {
            let resultsShop = processSearch(products)
            let resultsTops = processSearch(tops)
            temp = [...temp, ...resultsShop, ...resultsTops]
        }
        return temp
    }
    console.log(searchEngine())
    const totalPrices = () => {
        if (carts.length === 0) {
            return 0
        } else {
            return carts.reduce((item1, item2) => item1 + (item2.price * item2.quantity), 0)
        }
    }
    const toggleCheckout = () => {
        dispatch({
            type: "Checkout_toggle",
            result: !checkoutToggle
        })
    }
    React.useEffect(() => {
        const check = document.querySelector(".checkout")
        const app = document.querySelector(".app")
        if (checkoutToggle) {
            check.classList.add("checktoggle")
            app.classList.add("apptoggle")
        } else {
            check.classList.remove("checktoggle")
            app.classList.remove("apptoggle")
        }
        if (carts.length === 0) {
            dispatch({
                type: "Checkout_toggle",
                result: false
            })
        }
    }, [checkoutToggle])
    return (
        <div className="header">
            <div className="top">
            $6 Flat Rate & Free Shipping on Orders Over $100
            </div>
            <div className="bottom">
                <nav className="menu">
                    <ul>
                        <li>
                            <Link className="link" to="/new-arrivals">New Arrivals</Link>
                        </li>
                        <li>
                            <Link className="link" to="/about-us">About Us</Link>
                        </li>
                        <li>
                            <Link className="link" style={{ display: "flex", justifyContent: "center", alignItems: "center" }} to="/shop">
                                Shop <KeyboardArrowUpIcon style={{ transform: "rotate(180deg)" }} />
                            
                            </Link>
                            <div className="sub-menu">
                                <div className="sub-left">
                                    <h4>shop</h4>
                                    <ul>
                                        <li>
                                            <Link to="/shop" className="link">All Collections</Link>
                                        </li>
                                        <li>
                                            <Link to="new-arrivals" className="link">New Arrivals</Link>
                                        </li>
                                        <li>
                                            <Link to="collaborations" className="link">Collaborations</Link>
                                        </li>
                                        <li>
                                            <Link to="/shop" className="link">Best Sellers</Link>
                                        </li>
                                        {/* <li>
                                            <Link to="accessories" className="link">Accessories</Link>
                                        </li>
                                        <li>
                                            <Link to="gift-card" className="link">Gift Card</Link>
                                        </li> */}
                                    </ul>
                                </div>
                                <div className="sub-right">
                                    <Link to="/tops" className="tops link">
                                        <img src={ topslogo } />
                                        <h4>tops</h4>
                                    </Link>
                                    <Link to="/bottoms" className="bottoms link">
                                        <img src={ bottomslogo } />
                                        <h4>bottoms</h4>
                                    </Link>
                                    <Link to="/hats" className="hats link">
                                        <img src={ hatslogo } />
                                        <h4>hats</h4>
                                    </Link>
                                    <Link to="/collaborations" className="collaborations link">
                                        <img src={ collaborations } />
                                        <h4>collabnorations</h4>
                                    </Link>
                                    <Link to="/kids" className="kids link">
                                        <img src={ kidslogo } />
                                        <h4>kids</h4>
                                    </Link>
                                </div>
                            </div>
                        </li>
                    </ul>
                </nav>
                <div className="logo">
                    <Link to="/">
                        <img src={ logo } />
                    </Link>
                </div>
                <ul className="functional">
                    <li className="link">
                        <CloseIcon className="close-icon" />
                        <input placeholder="Enter product of name.." className="searchText" type="text" value={ searchPage } onChange={ event => setSearchPage(event.target.value) } />
                        <SearchIcon className="search" />
                        <div className="relust-search">
                            <div>Results</div>
                            {
                                searchEngine().map((item, index) => <ResultsSearch results={ item } />)
                            }
                        </div>
                    </li>
                    <li>
                        <Link className="link" to="/login">
                            <PermIdentityTwoToneIcon />
                        </Link>
                    </li>
                    <li onClick={ toggleCheckout} className="link">
                        {
                            checkoutToggle ? <CloseIcon /> : <ShoppingCartIcon />
                        }
                    </li>
                    <li onClick={ toggleCheckout } className="link">
                        ${ totalPrices() }
                    </li>
                </ul>
            </div>
        </div>
    )
}
export default Header