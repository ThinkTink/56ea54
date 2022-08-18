import React from "react";
import PropTypes from "prop-types";

import "../css/button.scss";

function StyledButton({ text }) {
  return <button className="button"> {text} </button>;
}

export default StyledButton;

StyledButton.propTypes = {
  text: PropTypes.string,
};
