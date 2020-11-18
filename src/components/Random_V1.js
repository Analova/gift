import React, { useState, useEffect } from "react";
import axios from "axios";

const API_KEY = process.env.REACT_APP_API_KEY;

const Random = () => {
  const [gif, setGift] = useState("");

  const fetchGift = async () => {
    const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;

    const { data } = await axios.get(url);
    const imageSrc = data.data.images.downsized_large.url;

    setGift(imageSrc);
  };

  useEffect(() => {
    fetchGift();
  }, []);

  const handleClick = () => {
    fetchGift();
  };

  return (
    <div className="container">
      <h1>Random</h1>
      <img width="500" src={gif} alt="Random gift" />
      <button onClick={handleClick}>Click for new</button>
    </div>
  );
};

export default Random;
