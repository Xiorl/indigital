// Aqui está el cada item del carrousel

import React from "react";

/**
 * Lo dejé sin css para que tu intentes agregarlo
 */

const Item = ({ children }) => {
 /**
  * Esto se llama "destructuring object"
  * children = { img, location, title, text, price }
  * entonces lo que hago es hace varias constantes (img, location, etc)
  * e igualarlos a children 
  */

 const { img, location, title, text, price } = children
 // en react no existe class porque esto tambien es algo de javascript entonces se sustituye por calssName
 return (
 <div className="Carrousel item">
  <div className="banner">
   <img src={img} alt=".img" />
   <h2>{location}</h2>
  </div>
  <h2>{title}</h2>
  <p>{text}</p>
  <h2>{price}$$$</h2>
 </div>
 );
};

export default Item;
