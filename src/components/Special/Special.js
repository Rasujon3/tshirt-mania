import React, { useContext } from "react";
import { RingContext } from "../GrandPa/GrandPa";

const Special = () => {
  const [house, setHouse] = useContext(RingContext);
  return (
    <div>
      <h5>Special</h5>
      <p>
        <small>Gift: {house}</small>
      </p>
      <p>
        <button onClick={() => setHouse(house + 1)}>Buy a house</button>
      </p>
    </div>
  );
};

export default Special;
