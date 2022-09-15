/* eslint-disable react/no-children-prop */
/* eslint-disable import/extensions */
import React from "react";

import CarrLoc from "../Components/CarrLoc";
import CarrLocMock from "../Mocks/CarrouselLocations.mock.js";

function CarrouselLocations() {
   const items = CarrLocMock.map((item) => <CarrLoc key={item.title} children={item} />);
   return <div className="CarrouselLocations">{items}</div>;
}

export default CarrouselLocations;
