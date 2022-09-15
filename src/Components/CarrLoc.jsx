import React from "react";

const Item = ({children}) => {

    const { img, locationName } = children

    return (
        <div className="Carrousel-location-item">
            <div className="location-image">
                <img src="" alt="" />
                <div class="location-name"><h2>{locationName}</h2></div>
            </div>
        </div>     
    );
};

export default Item;