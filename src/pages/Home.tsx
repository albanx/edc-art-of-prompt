'use client';

import React from 'react';
import './Home.scss';
import Button from '../components/Button';

const Home: React.FC = () => {
  return (
    <div className="home-container">
      <header className="home-header">
        <div className="hero-illustration">
          <img src="/microsoft.png" alt="Microsoft AI Magic" className="hero-image" />
        </div>
        <h1>🎉 Welcome to the EDC AI & Cline Adventure!</h1>
        <p className="home-subtitle">
          Where Microsoft's European Development Center meets the future of AI-powered coding! 
          Buckle up for a wild ride through the digital cosmos! 🚀
        </p>
      </header>
      
      <main className="home-content">
        <section className="component-section">
          <h3>List of present react components</h3>
          <div className="cta-buttons">
            <Button variant="primary" onClick={() => console.log('Start Coding clicked!')}>
              Simple button
            </Button>
            <Button variant="secondary" onClick={() => console.log('Learn More clicked!')}>
             Secondary button
            </Button>
          </div>
        </section>

        <section className="cta-section">
          <h3>🚀 Ready to Launch into the AI Future?</h3>
          <p>
            Join the EDC revolution where humans and AI collaborate to create digital magic! 
            No capes required, but enthusiasm is mandatory! 
          </p>
          <div className="cta-buttons">
            <Button variant="primary" onClick={() => console.log('Start Coding clicked!')}>
              Start Coding with Cline! 🤖
            </Button>
            <Button variant="secondary" onClick={() => console.log('Learn More clicked!')}>
              Learn More Magic ✨
            </Button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
