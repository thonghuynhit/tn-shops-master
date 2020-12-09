import React from 'react'
import './Article.css'

import style from './img/style.png'
import ar1 from './img/ar1.svg'
import ar2 from './img/ar2.svg'
import ar3 from './img/ar3.svg'
import ar4 from './img/ar4.svg'
import ar5 from './img/ar5.svg'
import ar6 from './img/ar6.svg'

function Article() {
    return (
        <div className="article">
            <h1>As Seen In</h1>
            <div className="content">
            "ambsn has become one of the coolest brands in Orange County, and around the world. ambsn's vibrant colors and fun prints can't help but put a smile on your face when you see them."
            </div>
            <div className="style">
                <img src={ style } />
            </div>
            <div className="imgAr">
                <img src={ ar1} />
                <img src={ ar2 } />
                <img src={ ar3 } />
                <img src={ ar4 } />
                <img src={ ar5 } />
                <img src={ ar6 } />
            </div>
        </div>
    )
}
export default Article