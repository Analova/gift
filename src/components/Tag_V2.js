import React, { useState } from "react";

import useGif from "../useGif";

const Tag = () => {
  const [tag, setTag] = useState("dogs");
  const { gif, fetchGift } = useGif(tag);

  return (
    <div className="container">
      <h1>{tag} gif</h1>
      <img width="500" src={gif} alt="Tag gift" />
      <input value={tag} onChange={(e) => setTag(e.target.value)} />
      <button onClick={() => fetchGift(tag)}>Click for new</button>
    </div>
  );
};
export default Tag;
