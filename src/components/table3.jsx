

import React from 'react';

function Table3({ data }) {
  return (
    <div className="parent">
      {data.map(({ imageSrc, title, description, user, date }, index) => (
        <div className="card3" key={index}>
          <img className="card-image3" src={imageSrc}  style={{width:'250px', height:'250px'}} alt="Card" />
          <br/><br/>
          <div className="card-text3">
            <h3 className="card-title3">{title}</h3>
            <p className="card-description3">{description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Table3;