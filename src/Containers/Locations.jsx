/* eslint-disable arrow-body-style */
/* eslint-disable indent */
/* eslint-disable react/jsx-tag-spacing */
import React from "react";

import "../Assets/Style/Containers/Locations.scss";
import CarrouselLocations from "./CarrouselLocations";

function Locations() {
    return (
      <div className="locations">
        <h3>Ciudades con desarrollos</h3>
        <p>Dale un vistazo a nuestras ubicaciones y encuentra el paraíso a tu alcance</p>
        <CarrouselLocations/>
      </div>
    );
}

export default Locations;
