import React from "react";
import Father from "./../Father/Father";
import Uncle from "./../Uncle/Uncle";
import Aunty from "./../Aunty/Aunty";
import "./GrandPa.css";

const GrandPa = () => {
  const house = 7;
  return (
    <div className="grandpa">
      <h3>Grand Pa</h3>
      <section style={{ display: "flex" }}>
        <Father house={house} />
        <Uncle house={house} />
        <Aunty house={house} />
      </section>
    </div>
  );
};

export default GrandPa;
