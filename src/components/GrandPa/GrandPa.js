import React, { createContext, useState } from "react";
import Father from "./../Father/Father";
import Uncle from "./../Uncle/Uncle";
import Aunty from "./../Aunty/Aunty";
import "./GrandPa.css";

export const RingContext = createContext("ring");

const GrandPa = () => {
  const [house, setHouse] = useState(1);

  const ornament = "kada matir Rings";

  const handleBuyAHouse = () => {
    const newHouseCOunt = house + 1;
    setHouse(newHouseCOunt);
  };
  return (
    <RingContext.Provider value={ornament}>
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
    </RingContext.Provider>
  );
};

export default GrandPa;
