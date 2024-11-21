import React from 'react';

const Exponent = ({ num, exponent }) => (
  <div className="exponent-counter-container">
    <p className="exponent-label">n^{exponent}</p>
    <p className="exponent-result">
      {num} ^ {exponent} = <span className="total">{num ** exponent}</span>
    </p>
  </div>
);

export default Exponent;
