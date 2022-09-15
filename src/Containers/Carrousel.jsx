/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable react/jsx-indent */
/* eslint-disable react/no-children-prop */
/* eslint-disable max-len */
import React from "react";

import CarrItem from "../Components/CarrItem";
import CarrMock from "../Mocks/Carrousel.mock";

import "../Assets/Style/Containers/Carrousel.scss";

function Carrousel() {
   /**
  * en los arrays hay una funcion llamada map y lo que hace es editar un array para hacer otro diferente
  * aqui modifico el array de objetos y retorno react
  */
   const items = CarrMock.map((item) =>
   // item es igual a cada objeto del array
   /**
   * ejemplo item seria esto
   *  {
        img: "https://bangbranding.com/blog/wp-content/uploads/2016/09/700x511_SliderInterior.jpg",
        location: "CDMX",
        title: "Casa culera",
        text: "lorem",
        price: "999"
       },

       entonces esto se lo paso a CarrItem para que me haga el elemento html
   */
      <CarrItem key={item.title} children={item} />);

   // al final solo se agrega los items a un div y ya

   return <div className="Carrousel">{items}</div>;
}

export default Carrousel;
