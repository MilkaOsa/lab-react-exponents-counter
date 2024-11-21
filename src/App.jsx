import React, { useState } from 'react';
import "./app.css";
import Counter from "./components/Counter";
import Exponent from './components/Exponent';

//import ExponentTwo from "./components/ExponentTwo";
// import ExponentThree from "./components/ExponentThree";
// import ExponentFour from "./components/ExponentFour";
// import ExponentFive from "./components/ExponentFive";
// import ExponentSix from "./components/ExponentSix";


function App() {
  // Step 1: Lift the state up to App
  const [count, setCount] = useState(1);

  // Step 2: Define increment and decrement functions in the parent component
  const increment = () => setCount(prevCount => prevCount + 1);
  const decrement = () => setCount(prevCount => prevCount - 1);

  return (
    <div className="App">
      {/* Counter Component */}
      <Counter count={count} increment={increment} decrement={decrement} />

      {/* Reusable Exponent Component with different exponents */}
      <Exponent num={count} exponent={2} />
      <Exponent num={count} exponent={3} />
      <Exponent num={count} exponent={4} />
      <Exponent num={count} exponent={5} />
      <Exponent num={count} exponent={6} />
    </div>
  );
}

  // return (
  //   <div className="App">
  //     {/* Step 3: Pass count, increment, and decrement to the Counter */}
  //     <Counter count={count} increment={increment} decrement={decrement} />

  //     {/* Pass count to each exponent component */}
  //     <ExponentTwo count={count} />
  //     <ExponentThree count={count} />
  //     <ExponentFour count={count} />
  //     <ExponentFive count={count} />
  //     <ExponentSix count={count} />
  //   </div>
  // );
}

export default App;