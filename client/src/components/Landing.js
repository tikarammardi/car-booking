import React from 'react';
import Info from './Info';
export default () => {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>InstaCar</h1>
      Get Ride at your doorstep.
      <div>
        <h3>Drivers Available</h3>
        <Info></Info>
      </div>
    </div>
  );
};
