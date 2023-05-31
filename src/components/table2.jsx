

import React from 'react';

function Table2({ data }) {
  return (
    <div className="parent">
      {data.map(({ imageSrc, title, description }, index) => (
        <div className="card2" key={index}>
          <img className="card-image2" src={imageSrc}  style={{width:'250px', height:'250px'}} alt="Card" />
          <br/><br/>
          <div className="card-text2">
            <h3 className="card-title2">{title}</h3>
            <p className="card-description2">{description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Table2;