import React, { useState } from "react";
import Father from "./../Father/Father";
import Uncle from "./../Uncle/Uncle";
import Aunty from "./../Aunty/Aunty";
import "./GrandPa.css";

const GrandPa = () => {
  const [house, setHouse] = useState(1);

  const ornament = "Diamond Rings";

  const handleBuyAHouse = () => {
    const newHouseCOunt = house + 1;
    setHouse(newHouseCOunt);
  };
  return (
    <div className="grandpa">
      <h3>Grand Pa</h3>
      <p>
        House: {house} <button onClick={handleBuyAHouse}>Buy A House</button>
      </p>
      <section style={{ display: "flex" }}>
        <Father house={house} ornament={ornament} />
        <Uncle house={house} />
        <Aunty house={house} />
      </section>
    </div>
  );
};

export default GrandPa;
