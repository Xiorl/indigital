/* eslint-disable react/no-children-prop */
/* eslint-disable indent */
/* eslint-disable react/jsx-indent */
import React from "react";

import Button from "../Components/Button";

import "../Assets/Style/Containers/Header.scss";
import logo from "../Assets/Images/INDIGITAL-LOGO.png";

function Header() {
   const blogConfig = {
      text: "Blog",
      onClick: () => {
         console.log("Blog");
      },
      id: "button-white",
   };

   const contactConfig = {
      text: "Contacto",
      onClick: () => {
         console.log("contacto");
      },
      id: "button-purple",
   };

   return (
     <header>
        <div className="logo">
           <img src={logo} alt=".logo" />
           <h2>indigital</h2>
        </div>
        <div className="menu">
           <a href="./">Ciudades</a>
           <Button children={blogConfig} />
           <Button children={contactConfig} />
        </div>
     </header>
   );
}

export default Header;
