import React from "react"

import "../Assets/css/Containers/Search.css"

const Searcher = () => {
 return (
  <div className="search-box">
   <h2>Encuentra tu propiedad</h2>
   <div className="search-box-type">
    <p>Estoy buscando:</p>
     <div>
        <label htmlFor=""></label>
        <input type="checkbox" name="casa" id="" /> Casa
     </div>
     <div>
        <label htmlFor=""></label>
        <input type="checkbox" name="casa_playa" id="" /> Casa de playa
     </div>
     <div>
        <label htmlFor=""></label>
        <input type="checkbox" name="depa" id="" /> Departamento
     </div>
     <div>
        <label htmlFor=""></label>
        <input type="checkbox" name="" id="" /> Departamento de playa
      </div>
   </div>
   <div className="search-box-interest">
     <div className="search-box-interest-menu">
        <p> Quiero: </p>
         <div class="search-interest-options">
            <button type="submit"><img src="" alt="x" />Invertir</button>
            <button type="submit"><img src="" alt="x" />Rentar</button>
         </div>
     </div>
     <div class="search-box-cities"> <p> Busco propiedad en: </p>
        <select name="">
        <option>Mazatlán</option>
        <option>Culiacán</option>
        <option>Altata</option>
        <option>León</option>
        <option>Aguascalientes</option>
        </select>
     </div>
   </div>

  </div>
 )
}

export default Searcher