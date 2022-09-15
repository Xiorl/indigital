/* eslint-disable react/no-children-prop */
/* eslint-disable react/jsx-indent */
import React from "react";

import Button from "../Components/Button";

import "../Assets/Style/Containers/Filter.scss";

function Filter() {
   const randomFunc = () => {
      console.log("#");
   };

   return (
      <div className="filter">
         <h3>Desarrollos para invertir</h3>
         <p>Mira los desarrollos de viviendas en la ciudad de tu gusto</p>
         <div className="filter buttons">
            <Button children={{ text: "Nuevos lanzamientos", onClick: randomFunc, id: "news" }} />
            <Button children={{ text: "Mazatán, Sinaloa", onClick: randomFunc, id: "mazatlan" }} />
            <Button children={{ text: "Culiacán, Sinaloa", onClick: randomFunc, id: "culiacan" }} />
            <Button children={{ text: "Atlanta, Sinaloa", onClick: randomFunc, id: "atlanta" }} />
            <Button children={{ text: "León, Guanajuato", onClick: randomFunc, id: "leon" }} />
            <Button children={{ text: "Aguascalientes, Aguascalientes", onClick: randomFunc, id: "aguas" }} />
         </div>
      </div>
   );
}

export default Filter;
