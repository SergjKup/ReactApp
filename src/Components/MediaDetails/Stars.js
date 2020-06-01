import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const Stars = (props) => {
    const rating = Math.round(props.rating / 2);
    document.querySelectorAll(".star-rating-container-item").forEach((cur, i) => {
    if (i < rating) {
      cur.classList.add("star-rating-container-item-active");
    }
  });

  return (
    <div className="star-rating-container">
      
      <FontAwesomeIcon icon={faStar} className="star-rating-container-item" />
      <FontAwesomeIcon icon={faStar} className="star-rating-container-item" />
      <FontAwesomeIcon icon={faStar} className="star-rating-container-item" />
      <FontAwesomeIcon icon={faStar} className="star-rating-container-item" />
      <FontAwesomeIcon icon={faStar} className="star-rating-container-item" />
    </div>
  );
};
export default Stars;
