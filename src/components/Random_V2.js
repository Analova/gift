import Reacts from "react";

import useGif from "../useGif";

const Tag = () => {
  const { gif, fetchGift } = useGif();

  return (
    <div className="container">
      <h1>{tag} gif</h1>
      <img width="500" src={gif} alt="Tag gift" />
      <button onClick={fetchGift}>Click for new</button>
    </div>
  );
};
export default Tag;
