/* eslint-disable indent */
/* eslint-disable react/button-has-type */
/* eslint-disable react/prop-types */
import React from "react";

import "../Assets/Style/Components/Button.scss";

function Button({ children }) {
   const { text, onClick, id } = children;

   return (
     <button className="button" id={id} onClick={onClick}>{text}</button>
   );
}

export default Button;
