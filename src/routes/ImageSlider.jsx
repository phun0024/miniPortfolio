import { useState } from "react"

import Container from "../components/Container"
import { ImageData } from "../components/ImageData"
import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from 'react-icons/fa'

function ImageSlider () {
    
    const [current, setCurrent] = useState(0)
    const slides = ImageData
    const length = slides.length

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)
    }
    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1)
    }


    if(!Array.isArray(slides) || slides.length <= 0) {
        return null
    }

    return (
        <>
            <Container className="image-slider">
                <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
                <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide}/>
                {ImageData.map((slide, idx) => {
                    return (
                        <div key={idx} className={idx === current ? 'slide active' : 'slide'}>
                            {idx === current && 
                                (<img className="image" src={slide.image} alt={"Ao Dai " + (idx + 1)} />)}
                            
                        </div>
                    )
                })}
            </Container>
        </>
    )
}

export default ImageSlider