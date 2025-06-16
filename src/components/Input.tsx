import React, { useState } from 'react';
import './Input.scss';

export interface InputProps {
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  icon?: 'none' | 'eye';
  type?: 'text' | 'password';
  helperText?: string;
  className?: string;
  disabled?: boolean;
}

const Input: React.FC<InputProps> = ({
  placeholder = 'Placeholder',
  value = '',
  onChange,
  icon = 'none',
  type = 'text',
  helperText,
  className = '',
  disabled = false
}) => {
  const [inputValue, setInputValue] = useState(value);
  const [showPassword, setShowPassword] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setInputValue(newValue);
    onChange?.(newValue);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const getInputType = () => {
    if (type === 'password' && !showPassword) {
      return 'password';
    }
    return 'text';
  };

  const getInputClasses = () => {
    const classes = ['input'];
    if (icon !== 'none') classes.push('input--with-icon');
    if (disabled) classes.push('input--disabled');
    if (className) classes.push(className);
    return classes.join(' ');
  };

  const renderIcon = () => {
    if (icon === 'eye') {
      return (
        <button
          type="button"
          className="input__icon-button"
          onClick={togglePasswordVisibility}
          disabled={disabled}
        >
          <svg
            width="20"
            height="14"
            viewBox="0 0 20 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="input__eye-icon"
          >
            <path
              d="M10 0C5.45 0 1.73 2.89 0.5 7C1.73 11.11 5.45 14 10 14C14.55 14 18.27 11.11 19.5 7C18.27 2.89 14.55 0 10 0ZM10 11.5C7.52 11.5 5.5 9.48 5.5 7C5.5 4.52 7.52 2.5 10 2.5C12.48 2.5 14.5 4.52 14.5 7C14.5 9.48 12.48 11.5 10 11.5ZM10 4.5C8.62 4.5 7.5 5.62 7.5 7C7.5 8.38 8.62 9.5 10 9.5C11.38 9.5 12.5 8.38 12.5 7C12.5 5.62 11.38 4.5 10 4.5Z"
              fill="currentColor"
            />
          </svg>
        </button>
      );
    }
    return null;
  };

  return (
    <div className={getInputClasses()}>
      <div className="input__field-container">
        <input
          type={getInputType()}
          value={inputValue}
          onChange={handleInputChange}
          placeholder={placeholder}
          className="input__field"
          disabled={disabled}
        />
        {renderIcon()}
      </div>
      {helperText && (
        <div className="input__helper-text">{helperText}</div>
      )}
    </div>
  );
};

export default Input;
