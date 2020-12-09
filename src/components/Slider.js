import React from 'react'
import './Slider.css'
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore'
import NavigateNextIcon from '@material-ui/icons/NavigateNext'

function Slider({ slider }) {
    const [change, setChange] = React.useState(0)
    React.useEffect(() => {
        const perImg = document.querySelectorAll(".perImg")
        const changeImg = setInterval(() => {
            if (change === (perImg.length - 1)) {
                setChange(0)
            } else {
                setChange(change + 1)
            }
        }, 12000)
        for (let j of perImg)
            j.classList.remove('back')
        if (change === 0) {
            perImg[perImg.length - 1].classList.remove("active")
            perImg[perImg.length - 1].classList.add('back')
        } else {
            perImg[change - 1].classList.remove("active")
            perImg[change - 1].classList.add('back')
        }
        try {
            perImg[change].classList.add('active')
        } catch (error) {}
    return () => {
        return clearInterval(changeImg)
        }
    }, [change])

    const previous = () => {
        const allImg = document.querySelectorAll(".perImg")
        if (change === 0) {
            allImg[change].classList.remove("active")
            setChange((allImg.length - 1))
        } else {
            allImg[change].classList.remove("active")
            setChange(change - 1)
        }
    }

    const next = () => {
        const allImg = document.querySelectorAll(".perImg")
        if (change === (allImg.length - 1)) {
            setChange(0)
        } else {
            setChange(change+1)
        }
    }
    
    return (
        <div className="wrap-slider">
        <div className="slider">
            {
                slider.map((item, index) => <a key={ index } href={ item.link } className="perImg">
                    <img src={ item.urlImg } />
                    {
                        item.content && <div className="content" style={{ backgroundColor: item.colorContent }}>
                            { item.content }
                        </div>
                    }
                </a>)
            }
        </div>
        <button onClick={ previous } className="previous">
            <NavigateBeforeIcon />
        </button>
        <button onClick={ next } className="next">
            <NavigateNextIcon />
        </button>
        </div>
    )
}
export default Slider