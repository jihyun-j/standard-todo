import React from "react";

function Child({ name, age, children }) {
  return (
    <div>
      <div>{name}</div>
      <div>{age}</div>
      <div>{children}</div>
    </div>
  );
}

export default Child;
