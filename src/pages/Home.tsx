import React from 'react';
import './Home.scss';

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
        <section className="hero-section">
          <div className="section-with-image">
            <img src="/robot-coding.svg" alt="Robot Coding" className="section-image" />
            <div className="section-text">
              <h2>🤖 Meet Your New Coding Sidekick!</h2>
              <p>
                Forget coffee breaks - Cline never gets tired, never complains about deadlines, 
                and definitely won't steal your lunch from the office fridge! Here's what makes 
                our AI buddy absolutely amazing:
              </p>
              <ul className="features-list">
                <li>🧠 Reads code faster than you can say "Stack Overflow"</li>
                <li>⚡ Writes TypeScript while you're still thinking about breakfast</li>
                <li>🎨 Makes your SCSS look prettier than a European sunset</li>
                <li>🏗️ Builds components like a digital LEGO master</li>
                <li>📱 Responsive design? More like "responsible" design!</li>
              </ul>
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
            <button className="cta-button primary">Start Coding with Cline! 🤖</button>
            <button className="cta-button secondary">Learn More Magic ✨</button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
