import React, { useState, useEffect } from "react";
import axios from "axios";

const API_KEY = process.env.REACT_APP_API_KEY;

const Random_V1 = () => {
  //const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;

  useEffect(() => {
    const fetchGift = async () => {
      const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;

      const { data } = await axios.get(url);

      console.log(data);
    };

    fetchGift();
  }, []);

  return <h1>Random</h1>;
};

export default Random_V1;
