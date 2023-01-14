import '../styles/carousel.css'

import {useState} from "react";


export default function Carousel ({img}) {

    let cards = []
    img.forEach((value, index) => {
        cards.push({
            id: index + 1,
            image: value
        })
    })
    // const cards = [
    //     {
    //         id: 1,
    //         image: img[0]
    //     },
    //     {
    //         id: 2,
    //         image: img[1]
    //     },
    //     {
    //         id: 3,
    //         image: img[2]
    //     },
    // ]

    const [slideIndex, setSlideIndex] = useState(0)

    function plusSlide () {
        if (slideIndex + 1 === cards.length) setSlideIndex(0)
        else setSlideIndex(slideIndex + 1)
    }

    function minusSlide () {
        if (slideIndex === 0) setSlideIndex(cards.length - 1)
        else setSlideIndex(slideIndex - 1)
    }

    let buttonClassNames = cards.length === 1 ? 'visibilityHidden ' : 'visibilityShown '

    return (
        <div className='carousel-container'>
            {cards.map((item, i) => {
                let className;
                if (i === slideIndex) className = 'slide fade display'
                else className = 'slide fade hidden'
                return (
                    <div key={item.id} className={className}>
                        <img src={item.image} alt={item.id}/>
                        <div className={buttonClassNames + 'text'}>{item.id}/{cards.length}</div>
                    </div>
                )
            })}

            <button className={buttonClassNames + 'prev'} onClick={minusSlide}>&#10094;</button>
            <button className={buttonClassNames + 'next'} onClick={plusSlide}>&#10095;</button>

        </div>
    )
}