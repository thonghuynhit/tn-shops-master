import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'
import FacebookIcon from '@material-ui/icons/Facebook'
import InstagramIcon from '@material-ui/icons/Instagram'
import GitHubIcon from '@material-ui/icons/GitHub'

function Footer() {
    return (
        <div className="footer">
            <div className="top">
                <div className="explore">
                    <h3>explore</h3>
                    <ul>
                        <li>
                            <Link to="/shop">Collections</Link>
                        </li>
                        <li>
                            <Link to="/new-arrivals">New Arrivals</Link>
                        </li>
                        <li>
                            <Link to="/collaborations">Collaborations</Link>
                        </li>
                        <li>
                            <Link to="/bottoms">Bottoms</Link>
                        </li>
                        <li>
                            <Link to="/tops">Tops</Link>
                        </li>
                        <li>
                            <Link to="/kids">Kids</Link>
                        </li>
                    </ul>
                </div>
                <div className="about">
                    <h3>About</h3>
                    <ul>
                        <li>
                            <Link to="/about-us">About Us</Link>
                        </li>
                        <li>
                            <Link to="/">Contact Us</Link>
                        </li>
                        <li>
                            <Link to="/">Shipping & Returns</Link>
                        </li>
                    </ul>
                </div>
                <div className="connect">
                    <h3>connect</h3>
                    <ul>
                        <li>Join our mailing list for news and offers!</li>
                        <li>
                            <input type="email" placeholder="Join Our Mailing List" />
                            <button>Subscribe</button>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="bottom">
                <div>
                    <a href="https://www.facebook.com/thonghuynhit">
                        <FacebookIcon />
                    </a>
                    <a href="https://www.instagram.com/thonghuynhit/">
                        <InstagramIcon />
                    </a>
                    <a href="https://github.com/thonghuynhit">
                        <GitHubIcon />
                    </a>
                </div>
                <div>
                    Thông tin liên hệ: <a href="mailto: thonghuynhit@gmail.com">thonghuynhit@gmail.com</a>
                </div>
            </div>
        </div>
    )
}
export default Footer