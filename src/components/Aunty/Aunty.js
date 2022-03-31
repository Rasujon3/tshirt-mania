import React, { useContext } from "react";
import { RingContext } from "../GrandPa/GrandPa";

const Aunty = () => {
  const [house, setHouse] = useContext(RingContext);
  const handleHouseIncrease = () => {
    const newHouseCOunt = house + 1;
    setHouse(newHouseCOunt);
  };
  return (
    <div>
      <h4>Aunty</h4>
      <p>house: {house}</p>
      <p>
        <small>Ring: {house}</small>
      </p>
      <button onClick={handleHouseIncrease}>Aunty Magic</button>
    </div>
  );
};

export default Aunty;
