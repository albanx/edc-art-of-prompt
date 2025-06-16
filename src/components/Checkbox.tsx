import React, { useState } from 'react';
import './Checkbox.scss';

export interface CheckboxProps {
  state?: 'unselected' | 'selected' | 'mixed';
  active?: boolean;
  label?: string;
  showLabel?: boolean;
  onChange?: (checked: boolean) => void;
  className?: string;
}

const Checkbox: React.FC<CheckboxProps> = ({
  state = 'unselected',
  active = true,
  label = 'label',
  showLabel = false,
  onChange,
  className = ''
}) => {
  const [currentState, setCurrentState] = useState(state);

  const handleClick = () => {
    if (!active) return;
    
    const newState = currentState === 'unselected' ? 'selected' : 'unselected';
    setCurrentState(newState);
    onChange?.(newState === 'selected');
  };

  const getCheckboxClasses = () => {
    const classes = ['checkbox'];
    classes.push(`checkbox--${currentState}`);
    classes.push(`checkbox--${active ? 'active' : 'inactive'}`);
    if (showLabel) classes.push('checkbox--with-label');
    if (className) classes.push(className);
    return classes.join(' ');
  };

  const renderCheckmark = () => {
    if (currentState === 'selected') {
      return <div className="checkbox__check" />;
    }
    if (currentState === 'mixed') {
      return <div className="checkbox__mixed" />;
    }
    return null;
  };

  return (
    <div className={getCheckboxClasses()} onClick={handleClick}>
      <div className="checkbox__box">
        {renderCheckmark()}
      </div>
      {showLabel && (
        <span className="checkbox__label">{label}</span>
      )}
    </div>
  );
};

export default Checkbox;
