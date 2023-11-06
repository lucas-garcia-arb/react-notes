import React, { useState } from 'react'

const Video = ({title, rate, dateAdded, channel, thumbnail, description}) => {
    const [stars, setStars] = useState(rate)
    
    const rateVideo = () => {
        setStars(stars + 1)
    }
    return (
        <>
            <h1>{title}</h1>
            <img src={thumbnail} alt={title} />
            <h2>{channel}</h2>
            <span>{stars}</span> rated
            <button onClick={rateVideo}>Rate</button>
            <h6>{dateAdded}</h6>
            <p>{description}</p>
        </>
    )
}

export default Video
