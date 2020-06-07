import React, {useEffect, useState} from 'react'
import axios from "axios";

export const Gallery = ({photos}) => {
    const [randomNumbers, setRandomNumbers] = useState([])// for layout grid
    useEffect(() => {
        setRandomNumbers(photos.map((item) => Math.ceil(Math.random() * 3)))// get random number from 1 to 3 for grid span
    }, [photos])

    return photos.map((item, i) => <div className={`gallery__item h-${randomNumbers[i]}`}>
        <div className="gallery__image">
            <img src={item.urls.regular} alt=""/>
        </div>
    </div>)
}