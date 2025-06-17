'use client';

import React from 'react';
import './Home.scss';
import Button from '../components/Button';
import Checkbox from '../components/Checkbox';
import Input from '../components/Input';

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

          <div className="component-demo">
            <h4>Checkboxes</h4>
            <div className="component-group">
              <Checkbox 
                state="unselected" 
                active={true} 
                showLabel={false}
                onChange={(checked) => console.log('Checkbox 1:', checked)}
              />
              <Checkbox 
                state="selected" 
                active={true} 
                showLabel={false}
                onChange={(checked) => console.log('Checkbox 2:', checked)}
              />
              <Checkbox 
                state="mixed" 
                active={true} 
                showLabel={false}
                onChange={(checked) => console.log('Checkbox 3:', checked)}
              />
              <Checkbox 
                state="unselected" 
                active={true} 
                showLabel={true}
                label="With Label"
                onChange={(checked) => console.log('Checkbox with label:', checked)}
              />
              <Checkbox 
                state="selected" 
                active={false} 
                showLabel={true}
                label="Inactive"
                onChange={(checked) => console.log('Inactive checkbox:', checked)}
              />
            </div>
          </div>

          <div className="component-demo">
            <h4>Input Fields</h4>
            <div className="component-group">
              <Input 
                placeholder="Enter your text"
                onChange={(value) => console.log('Input 1:', value)}
              />
              <Input 
                placeholder="Password"
                type="password"
                icon="eye"
                onChange={(value) => console.log('Password input:', value)}
              />
              <Input 
                placeholder="Disabled input"
                disabled={true}
                helperText="This field is disabled"
                onChange={(value) => console.log('Disabled input:', value)}
              />
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
