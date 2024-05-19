import "./AnimalShow.css"
import bird from "./svg/bird.svg";
import dog from "./svg/dog.svg";
import cat from "./svg/cat.svg";
import cow from "./svg/cow.svg";
import gator from "./svg/gator.svg";
import horse from "./svg/horse.svg";
import heart from "./svg/heart.svg";
import { useState } from "react";

const svgMap = {
  bird,
  dog,
  cat,
  cow,
  gator,
  horse,
};

function AnimalShow({ type }) {
  const [click, setClick] = useState(0);

  const handleClick = () => {
    setClick(click + 1);
  };

  return (
    <div className="animals" onClick={handleClick}>
      <img className="animal-img" alt={type} src={svgMap[type]}></img>
      <img className="heart-img"
        alt="heart"
        src={heart}
        style={{ width: 20 + 20 * click + "px" }}
      ></img>
    </div>
  );
}

export default AnimalShow;
