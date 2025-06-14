import React from 'react';
import './Home.scss';

const Home: React.FC = () => {
  return (
    <div className="home-container">
      <header className="home-header">
        <h1>Welcome to Our React App</h1>
        <p className="home-subtitle">A modern React application built with Next.js and TypeScript</p>
      </header>
      
      <main className="home-content">
        <section className="hero-section">
          <h2>Getting Started</h2>
          <p>
            This is a sample home page with some demonstration content. 
            The application is built using modern web technologies including:
          </p>
          <ul className="features-list">
            <li>Next.js 15 with App Router</li>
            <li>TypeScript for type safety</li>
            <li>SCSS for enhanced styling</li>
            <li>Component-based architecture</li>
            <li>Responsive design principles</li>
          </ul>
        </section>

        <section className="info-section">
          <h3>Project Structure</h3>
          <p>
            This application follows best practices with organized folders for components and pages,
            making it easy to scale and maintain as your project grows.
          </p>
        </section>
      </main>
    </div>
  );
};

export default Home;
