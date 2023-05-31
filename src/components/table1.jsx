

import React from 'react';

function Table1({ data }) {
  return (
    <div className="parent">
      {data.map(({ imageSrc, title, description,user }, index) => (
        <div className="card" key={index}>
          <img className="card-image" src={imageSrc} alt="Card" 
          style={{width:'250px', height:'250px'}} />
          <br/><br/>
          <div className="card-text">
            <h3 className="card-title">{title}</h3>
            <p className="card-description">{description}</p>
            <p className='user'> {user}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Table1;