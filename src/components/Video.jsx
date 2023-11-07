import { useState } from 'react'

const Video = ({ id, title, rate, dateAdded, channel, thumbnail, description, deleteItem }) => {
  const [stars, setStars] = useState(rate);

  const rateVideo = () => {
    setStars(stars + 1);
  };

  return (
    <>
      <h1>{title}</h1>
      <img src={ thumbnail } alt={title} />
      <h2>{channel}</h2>
      <span>{stars}</span> rated
      <button onClick={rateVideo}>Rate</button>
      <button onClick={()=>deleteItem(id)}>Delete Video</button>
      <h6>{dateAdded}</h6>
      <p>{description}</p>
    </>
  );
};

export default Video;
