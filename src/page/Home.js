import React from 'react'

import BottomHome from '../components/BottomHome'
import Article from '../components/Article'
import Slider from '../components/Slider'
import anh1 from '../img/slide1.jpg'
import anh2 from '../img/slide2.png'
import anh3 from '../img/slide3.jpg'
const slider = [
  { urlImg: anh1, link: "#", content: "anh 1", colorContent: "yellow"  },
  { urlImg: anh2, link: "#", content: "anh 2", colorContent: "green"  },
  { urlImg: anh3, link: "#", content: "anh 3", colorContent: "green"  }
]

function Home() {
    return (
        <div className="home">
            <Slider slider={ slider } />
            <Article />
            <BottomHome />
        </div>
    )
}
export default Home