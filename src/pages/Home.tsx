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
          <h3>Design System Components</h3>
          
          <div className="component-demo">
            <h4>Buttons</h4>
            <div className="component-group">
              <Button variant="primary" onClick={() => console.log('Primary button clicked!')}>
                Primary Button
              </Button>
              <Button variant="secondary" onClick={() => console.log('Secondary button clicked!')}>
                Secondary Button
              </Button>
            </div>
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
