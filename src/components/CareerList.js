import React from 'react';
import './CareerList.css'; 

const CareerList = ({ title, location }) => {
  return (
<>

<div className="career-list-container">
      <ul className="career-list">
        <li className="career-list-item">
          <h3 className="career-title">{title}</h3>
          <p className="career-location">{location}</p>
        </li>
      </ul>
      <hr /> {/* Divider */}
    </div>
    </>

  );
};

export default CareerList;
