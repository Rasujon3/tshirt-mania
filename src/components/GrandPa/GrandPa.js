import React, { createContext, useState } from "react";
import Father from "./../Father/Father";
import Uncle from "./../Uncle/Uncle";
import Aunty from "./../Aunty/Aunty";
import "./GrandPa.css";

/*  context api
 1. call createCOntext with a defalut value 
 2. set a variable of the context with uppercase
 3. Make sure you export the context to use it in other places
 4. Warp you child content using RingCOntext.Provider
 5. Provide a vlaue
 6. to consume the context from child component
 7. useContext hook and you eill need to pass the contextName
 8. Make sure you take notes...
 
 */

export const RingContext = createContext("ring");

const GrandPa = () => {
  const [house, setHouse] = useState(1);

  const ornament = "kada matir Rings";

  const handleBuyAHouse = () => {
    const newHouseCOunt = house + 1;
    setHouse(newHouseCOunt);
  };
  return (
    <RingContext.Provider value={[house, setHouse]}>
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
