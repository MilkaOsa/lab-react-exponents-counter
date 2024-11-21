import { useState } from "react";

const Counter = ({ count, increment, decrement }) => {
  return (
    <div className="counter-container">
      {/* Display the current count */}
      <p className="counter-value">{count}</p>
      {/* Use increment and decrement functions from props */}
      <button className="counter-button" onClick={decrement}>-</button>
      <button className="counter-button" onClick={increment}>+</button>
    </div>
  );
};


export default Counter;