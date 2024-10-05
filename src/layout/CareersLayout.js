import React from 'react'
import { Outlet } from 'react-router-dom'

const CareersLayout = () => {
  return (
    <>
        <header className="careers-header">
        <h1>Join Our Team</h1>
        <p>Explore exciting career opportunities and become part of our journey.</p>
        <h2>Current Openings</h2>
      </header>

           <Outlet/>

          <section className="apply-section">
        <h2>How to Apply</h2>
        <p>If you're passionate and ready to grow with us, send your resume and a cover letter to <strong>careers@ourcompany.com</strong>.</p>
        <button>View All Jobs</button>
      </section>

      {/* Footer Section */}
      <footer className="careers-footer">
        <p>&copy; 2024 Our Company. All rights reserved.</p>
      </footer>

    </>  )
}

export default CareersLayout