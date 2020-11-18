import React, { useState, useEffect } from "react";
import axios from "axios";

const API_KEY = process.env.REACT_APP_API_KEY;

const Tag = () => {
  const [tag, setTag] = useState("dogs");
  const [gif, setGift] = useState("");

  const fetchGift = async (tag) => {
    const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;

    const { data } = await axios.get(url);
    const imageSrc = data.data.images.downsized_large.url;

    setGift(imageSrc);
  };

  useEffect(() => {
    fetchGift(`tag`);
  }, []);

  const handleClick = () => {
    fetchGift(tag);
  };

  return (
    <div className="container">
      <h1>{tag} gif</h1>
      <img width="500" src={gif} alt="Tag gift" />
      <input value={tag} onChange={(e) => setTag(e.target.value)} />
      <button onClick={handleClick}>Click for new</button>
    </div>
  );
};

export default Tag;
