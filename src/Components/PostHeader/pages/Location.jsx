import React, { useState } from "react";
import "./comman.css";
import { GoLocation } from "react-icons/go";
import { BsFillPencilFill } from "react-icons/bs";
const Location = () => {
  const [country, setCountry] = useState("India");

  const countryOnChange = (e) => {
    setCountry(e.target.value);
  };

  return (
    <div className="location__container">
      <input
        type="text"
        className="location__input"
        value={country}
        onChange={countryOnChange}
      />
      <GoLocation className="location__Icons" />
      <BsFillPencilFill className="pencil__Icons" />
    </div>
  );
};

export default Location;
