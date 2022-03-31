import React from "react";
import Special from "../Special/Special";

const MySelf = ({ house, ornament }) => {
  return (
    <div>
      <h4>me</h4>
      <p>
        <small>House: {house}</small>
      </p>
      <Special ornament={ornament} />
    </div>
  );
};

export default MySelf;
