import React from 'react';

const Home = () => {
  return (
    <div className="home-page">
      {/* Header Section */}
      <header className="home-header">
        <h1>Task Manager</h1>
        <p>Manage your tasks effectively!</p>
      </header>

      {/* Task List Section */}
      <section className="task-list">
        <h2>Tasks</h2>
        <ul>
          <li>Complete React project - Due: 2024-10-05</li>
          <li>Prepare for meeting - Due: 2024-10-07</li>
          {/* More tasks can be added dynamically */}
        </ul>
      </section>


      {/* Footer Section */}
      <footer>
        
      By continuing past this page, you agree to our Terms of Service, Cookie Policy, Privacy Policy and Content Policies. All trademarks are properties of their respective owners. 2008-2024 © Zomato™ Ltd. All rights reserved. </footer>
    </div>
  );
};

export default Home;
