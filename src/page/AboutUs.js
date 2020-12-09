import React from 'react'
import './AboutUs.css'
import ShopTop from '../components/ShopTop'
import aboutImg from '../components/img/about.jpg'

function AboutUs() {
    return (
        <div className="about-us">
            <ShopTop title="About Us" image={""} />
            <div className="content">
                <div>
                    <img src={ aboutImg } />
                </div>
                <div>
                    <strong>ambsn [pronounced : ambition] </strong>
                    s a Southern California based swimwear brand founded and operated by brothers Dylan and Dustin Odbert as a fundraising event for a friends hospital bills. With a unique perspective on color, design and fit ambsn makes the most awesome shorts anywhere on the planet.
                    <br/><br/><i>"ambsn is more than fabric and print. It is a feeling, a memory of a time gone by. Our design mantra 'New Wave Nostalgia' speaks strongly to that. I pull influence not only from music I love, art, and cinema, but also from childhood memories when things weren’t so serious… when having a good time was all you had to worry about"</i><br/><br/>

- Dylan Odbert, Creative Director
                </div>
            </div>
        </div>
    )
}
export default AboutUs