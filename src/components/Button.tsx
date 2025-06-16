'use client';

import React from 'react';
import './Button.scss';

export interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  size?: 'large';
  disabled?: boolean;
  onClick?: () => void;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'large',
  disabled = false,
  onClick,
  className = ''
}) => {
  const buttonClasses = [
    'edc-button',
    `edc-button--${variant}`,
    `edc-button--${size}`,
    disabled ? 'edc-button--disabled' : '',
    className
  ].filter(Boolean).join(' ');

  return (
    <button
      className={buttonClasses}
      onClick={onClick}
      disabled={disabled}
      type="button"
    >
      <span className="edc-button__label">{children}</span>
    </button>
  );
};

export default Button;
