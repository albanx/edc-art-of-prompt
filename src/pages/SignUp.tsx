'use client';

import React, { useState } from 'react';
import './SignUp.scss';
import Button from '../components/Button';
import Checkbox from '../components/Checkbox';
import Input from '../components/Input';
import Navigation from '../components/Navigation';

const SignUp: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [dealAlerts, setDealAlerts] = useState(false);

  const handleCreateAccount = () => {
    console.log('Creating account with:', {
      email,
      password,
      agreeTerms,
      dealAlerts
    });
  };

  const handleSocialLogin = (provider: string) => {
    console.log(`Continue with ${provider}`);
  };

  const handleClose = () => {
    console.log('Close signup');
    // Navigate back or close modal
  };

  return (
    <div className="signup-page">
      <Navigation />
      
      <div className="signup-container">
        <div className="signup-form">
          <div className="signup-header">
            <div className="title-row">
              <h1 className="signup-title">Sign up</h1>
              <button className="close-button" onClick={handleClose}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path 
                    d="M18 6L6 18M6 6L18 18" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
            <p className="signup-description">
              Totally free to use. Sign up using your email address or phone number below to get started.
            </p>
          </div>

          <div className="form-fields">
            <Input
              placeholder="Email or phone number"
              value={email}
              onChange={setEmail}
              type="text"
            />

            <Input
              placeholder="Password"
              value={password}
              onChange={setPassword}
              type="password"
              icon="eye"
            />

            <div className="checkbox-group">
              <Checkbox
                state={agreeTerms ? 'selected' : 'unselected'}
                active={true}
                showLabel={true}
                label="I agree to the terms and conditions"
                onChange={setAgreeTerms}
              />
              <Checkbox
                state={dealAlerts ? 'selected' : 'unselected'}
                active={true}
                showLabel={true}
                label="Send me the latest deal alerts"
                onChange={setDealAlerts}
              />
            </div>

            <Button
              variant="primary"
              onClick={handleCreateAccount}
              className="create-account-btn"
            >
              Create account
            </Button>
          </div>

          <div className="social-signup">
            <div className="divider-row">
              <div className="divider-line"></div>
              <span className="divider-text">or</span>
              <div className="divider-line"></div>
            </div>

            <div className="social-buttons">
              <Button
                variant="secondary"
                onClick={() => handleSocialLogin('Google')}
                className="social-button google-button"
              >
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M17.64 9.2c0-.64-.06-1.25-.16-1.84H9v3.48h4.84c-.21 1.12-.84 2.07-1.8 2.71v2.26h2.92c1.7-1.57 2.68-3.88 2.68-6.61z" fill="#4285F4"/>
                  <path d="M9 18c2.43 0 4.47-.8 5.96-2.18l-2.92-2.26c-.8.54-1.83.86-3.04.86-2.34 0-4.32-1.58-5.03-3.71H.98v2.33C2.46 15.99 5.48 18 9 18z" fill="#34A853"/>
                  <path d="M3.97 10.71c-.18-.54-.28-1.12-.28-1.71s.1-1.17.28-1.71V4.96H.98C.36 6.2 0 7.55 0 9s.36 2.8.98 4.04l2.99-2.33z" fill="#FBBC05"/>
                  <path d="M9 3.58c1.32 0 2.51.45 3.44 1.34l2.58-2.58C13.46.68 11.43 0 9 0 5.48 0 2.46 2.01.98 4.96l2.99 2.33C4.68 5.16 6.66 3.58 9 3.58z" fill="#EB4335"/>
                </svg>
                Continue with Google
              </Button>

              <Button
                variant="secondary"
                onClick={() => handleSocialLogin('Apple')}
                className="social-button apple-button"
              >
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M12.86 7.84c-.03-2.43 1.98-3.6 2.07-3.66-1.13-1.65-2.88-1.88-3.5-1.9-1.49-.15-2.91.88-3.67.88-.76 0-1.93-.86-3.17-.83-1.63.02-3.13.95-3.97 2.41-1.69 2.93-.43 7.27 1.21 9.65.8 1.16 1.76 2.47 3.02 2.42 1.23-.05 1.69-.79 3.18-.79 1.49 0 1.91.79 3.2.76 1.32-.02 2.15-1.2 2.95-2.37.93-1.35 1.31-2.66 1.33-2.73-.03-.01-2.55-.98-2.58-3.88z" fill="#27273F"/>
                  <path d="M10.53 4.33c.67-.8 1.12-1.91 1-3.02-.96.04-2.13.64-2.82 1.45-.61.71-1.15 1.85-1.01 2.94 1.07.08 2.16-.54 2.83-1.37z" fill="#27273F"/>
                </svg>
                Continue with Apple
              </Button>

              <Button
                variant="secondary"
                onClick={() => handleSocialLogin('Facebook')}
                className="social-button facebook-button"
              >
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M18 9c0-4.97-4.03-9-9-9S0 4.03 0 9c0 4.49 3.29 8.21 7.59 8.88v-6.28H5.31V9h2.28V7.02c0-2.25 1.34-3.49 3.39-3.49.98 0 2.01.17 2.01.17v2.21h-1.13c-1.11 0-1.46.69-1.46 1.4V9h2.49l-.4 2.6h-2.09v6.28C14.71 17.21 18 13.49 18 9z" fill="#407AEA"/>
                </svg>
                Continue with Facebook
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
