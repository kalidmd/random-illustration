import React from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

import Image from '../data/image.json'
// import Everest from '../assets/images/everest.jpg'
// import Lake from '../assets/images/lake.jpg'

const Card = (props) => {
    const image = Image.map(({title, src, description}) => (
        <div key={title} className="card-content">
            <h1 className="card-title"> {title || <Skeleton />} </h1> 
            <img className="card-img" src={src} alt="/" />               
            <p className="card-text">{ description || <Skeleton count={7} />}</p>
        </div>
    ))

  return (
    <div className="card-cont">
        {image}
    </div>    
  )
}

export default Card