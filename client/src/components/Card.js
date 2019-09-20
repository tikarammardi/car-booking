import React from 'react';
import Form from './Form';
const Card = () => {
  return (
    <div className="card small">
      <div className="card-content"></div>
      <div className="card-tabs">
        <ul className="tabs tabs-fixed-width">
          <li className="tab">
            <a href="/api/roundtrip">Round Trip</a>
          </li>
          <li className="tab">
            <a className="active" href="/api/multicity">
              Multi City
            </a>
          </li>
          <li className="tab">
            <a href="/api/package">Package</a>
          </li>
        </ul>
      </div>
      <div className="card-content grey lighten-4">
        <Form />
      </div>
    </div>
  );
};

export default Card;
