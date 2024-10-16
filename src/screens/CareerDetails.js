import React, { useState } from 'react';
import { useLoaderData, useParams, Link } from 'react-router-dom';

const CareerDetails = () => {
  const { id } = useParams();
  const jobData = useLoaderData();

  // the tooltip (popup)
  const [showTooltip, setShowTooltip] = useState(true);

  // Toggle tooltip mouse hovers over or leaves the title
  const handleMouseEnter = () => {
    setShowTooltip(true);
  };
  const handleMouseLeave = () => {
    setShowTooltip(true);
  };

  return (
    <>
      <div style={{ backgroundColor: 'lightgray' }}>
        <hr />
        {/* Job Title with Tooltip on Hover */}
        <b>
          <h1
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{ cursor: 'pointer' }} // Change the cursor to pointer for interactivity
          >
            {jobData.title}
          </h1>
        </b>

        {/* Tooltip: Displayed only when hovered */}
        {showTooltip && (
  <div style={tooltipStyles}>
    <Link to={`/careers/apply/${id}`} style={{ color: 'white' }}>
      Apply for this job
    </Link>
  </div>
)}


        <h1 style={{ color: 'blue' }}>{jobData.salary}</h1>
        <h3>{jobData.location}</h3>
        <hr />
      </div>
    </>
  );
};

// Tooltip styles (adjust as needed)
const tooltipStyles = {
  position: 'absolute',
  backgroundColor: 'black',
  color: 'white',
  border: '2px solid #ccc',
  borderRadius: '60px',
  padding: '20px',
  zIndex: 1,
  top: '390px', // Adjust the position as needed
  left: '1400px',
  boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
};

export const jobDetailsLoader = async ({ params }) => {
  const { id } = params;
  const response = await fetch('http://localhost:8000/careers/' + id);

  if (!response.ok) {
    throw new Error('Job post not found');
  }
  const jsonResponse = await response.json();
  return jsonResponse;
};

export default CareerDetails;
