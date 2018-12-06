import React from "react";

const Counter = ({ numberOfItems }) => {
  return (
    <p>
      {numberOfItems} {numberOfItems === 1 ? "ITEM" : "ITEMS"}
    </p>
  );
};

export default Counter;
