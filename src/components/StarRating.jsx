import React from "react";
import PropTypes from "prop-types";

import "../css/star-rating.scss";

function StarRating({ rating }) {
  const array = Array(5).fill(
    <span className="icon" aria-label="empty star">
      &#9734;
    </span>
  );
  for (var i = 0; i < rating; i++) {
    array[i] = (
      <span className="icon filled" aria-label="filled star">
        &#9733;
      </span>
    );
  }

  return (
    <div className="stars">
      <p className="subtitle">Rating:</p>
      <ul aria-label="ratings">
        {array.map((star, index) => (
          <li key={index}>{star}</li>
        ))}
      </ul>
    </div>
  );
}

export default StarRating;

StarRating.propTypes = {
  rating: PropTypes.number,
};
