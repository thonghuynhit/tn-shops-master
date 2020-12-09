import React from 'react';
import './App.css'
import { Route, Link, Switch } from 'react-router-dom'
import VerticalAlignTopIcon from '@material-ui/icons/VerticalAlignTop'
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt'

import { useValueContext } from './reducer'
import Carts from './components/Carts'
import AboutUs from './page/AboutUs'
import Collaborations from './page/Collaborations'
import Kids from './page/Kids'
import Hats from './page/Hats'
import Bottoms from './page/Bottoms'
import Tops from './page/Tops'
import NewArrivals from './page/NewArrivals'
import SingleProduct from './page/SingleProduct'
import Header from './Header'
import Footer from './Footer'
import Home from './page/Home'
import Shop from './page/Shop'


function App() {
  const [{carts, checkoutToggle}, dispatch] = useValueContext()
  React.useEffect(() => {
    const scrollTop = document.querySelector(".scrollTop")
    window.onscroll = () => {
      if (window.scrollY > 10) {
        scrollTop.classList.add("showScroll")
      } else {
        scrollTop.classList.remove("showScroll")
      }
    }
  }, [window.scrollY])
  const scrollToTop = () => {
    window.scrollTo({top: 0, behavior: "smooth"})
  }

  const cartsAll = () => {
    if (carts.length !== 0) {
      return carts.map((item, index) => <Carts key={ index } cart={ item } />)
    }
  }

  const subTotal = () => {
    if (carts.length === 0) {
      return 0
    } else {
      return carts.reduce((item1, item2) => item1 + (item2.price * parseInt(item2.quantity)), 0).toFixed(2)
    }
  }
  const closeCart = () => {
    if (checkoutToggle) {
      dispatch({
        type: "Checkout_toggle",
        result: false
      })
    }
  }
  return (
    <div className="wrap">
    <div className="app" onClick={ closeCart }>
      <Header />
      <Route path="/" exact component={ Home } />
      <Route path="/about-us" exact component={ AboutUs } />
      <Route path="/shop" exact component={ Shop } />
      <Route path="/shop/:slug" exact component={ SingleProduct } />
      <Route path="/new-arrivals" exact component={ NewArrivals } />
      <Route path="/tops" exact component={ Tops } />
      <Route path="/bottoms" exact component={ Bottoms } />
      <Route path="/hats" exact component={ Hats } />
      <Route path="/kids" exact component={ Kids } />
      <Route path="/collaborations" exact component={ Collaborations } />
      <Footer />
      <div onClick={ scrollToTop } className="scrollTop">
        <VerticalAlignTopIcon />
      </div>
    </div>
    <div className="checkout">
      <div>
        <h2>My Carts</h2>
      </div>
      <div>
        { cartsAll() }
      </div>
      <div>
        <div className="subtotal">
          <h4>Subtotal</h4>
          <h4>${ subTotal() }</h4>
        </div>
        <div className="go-checkout">
          <h5>Shipping calculated at check out</h5>
          <button>Check Out <ArrowRightAltIcon className="arrow-right" /></button>
        </div>
      </div>
    </div>
    </div>
  );
}

export default App;