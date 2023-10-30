import React from "react";
import "./Slider.css";
import left from "./icon/left-arrow.png";
import right from "./icon/right-arrow.png";

export default function BtnSlider({ direction, moveSlide }) {
  console.log(direction, moveSlide);
  return (
    <button
      onClick={moveSlide}
      className={direction === "next" ? "btn-slide next" : "btn-slide prev"}
    >
      <img src={direction === "next" ? right : left} />
    </button>
  );
}
