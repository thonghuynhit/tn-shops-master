import React from 'react'
import './BottomHome.css'
import { Link } from 'react-router-dom'

import tops from './img/tops.webp'
import bottoms from './img/bottoms.jpg'
import kids from './img/kids.webp'

function BottomHome() {
    return (
        <div className="bottom-home">
            <div className="top">
                <div>
                    <img src={tops} />
                </div>
                <div>
                    <img src={bottoms} />
                </div>
                <div>
                    <img src={kids} />
                </div>
            </div>
            <div className="new-arrivals">
                <Link to="new-arrivals" className="link-arrivals">Shop New Arrivals</Link>
            </div>
            <div className="middle">

            </div>
            <div className="bottom">
                <h1>Check Out Our Best Sellers</h1>
                <Link to="shop" className="best-sells">Shop Best Sells</Link>
            </div>
        </div>
    )
}
export default BottomHome