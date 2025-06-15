# Simple Component Generator Workflow

**File**: `.cline/workflows/component.md`

## Description
Quickly generates a React TypeScript component with SCSS styling and tests.

## Trigger
"Create component [ComponentName]" or "New component [ComponentName]"

## Required Input
- Component name (e.g., "UserCard", "SearchBar", "Modal")

## Output Structure
```
src/components/{ComponentName}/
├── {ComponentName}.tsx
├── {ComponentName}.scss
├── {ComponentName}.test.tsx
└── index.ts
```

## Generated Files

### 1. Component File
`{ComponentName}.tsx`:
```typescript
import React from 'react';
import styles from './{ComponentName}.scss';

interface {ComponentName}Props {
  className?: string;
  children?: React.ReactNode;
}

export const {ComponentName}: React.FC<{ComponentName}Props> = ({ 
  className = '',
  children 
}) => {
  return (
    <div className={`${styles.{componentName}} ${className}`}>
      {children}
    </div>
  );
};
```

### 2. SCSS File
`{ComponentName}.scss`:
```scss
.{componentName} {
  // Component styles
}
```

### 3. Test File
`{ComponentName}.test.tsx`:
```typescript
import { render, screen } from '@testing-library/react';
import { {ComponentName} } from './{ComponentName}';

describe('{ComponentName}', () => {
  it('renders without crashing', () => {
    render(<{ComponentName} />);
  });

  it('renders children', () => {
    render(<{ComponentName}>Test Content</{ComponentName}>);
    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });

  it('applies custom className', () => {
    const { container } = render(<{ComponentName} className="custom-class" />);
    expect(container.firstChild).toHaveClass('custom-class');
  });
});
```

### 4. Export File
`index.ts`:
```typescript
export { {ComponentName} } from './{ComponentName}';
```

## Quick Component Templates

### Hook Component (with state)
```typescript
import React, { useState } from 'react';
import styles from './{ComponentName}.scss';

interface {ComponentName}Props {
  initialValue?: string;
  onChange?: (value: string) => void;
}

export const {ComponentName}: React.FC<{ComponentName}Props> = ({ 
  initialValue = '',
  onChange 
}) => {
  const [value, setValue] = useState(initialValue);

  const handleChange = (newValue: string) => {
    setValue(newValue);
    onChange?.(newValue);
  };

  return (
    <div className={styles.{componentName}}>
      {/* Component content */}
    </div>
  );
};
```

### List Component
```typescript
import React from 'react';
import styles from './{ComponentName}.scss';

interface {ComponentName}Item {
  id: string;
  // other fields
}

interface {ComponentName}Props {
  items: {ComponentName}Item[];
  onItemClick?: (item: {ComponentName}Item) => void;
}

export const {ComponentName}: React.FC<{ComponentName}Props> = ({ 
  items,
  onItemClick 
}) => {
  return (
    <div className={styles.{componentName}}>
      {items.map((item) => (
        <div 
          key={item.id} 
          className={styles.item}
          onClick={() => onItemClick?.(item)}
        >
          {/* Item content */}
        </div>
      ))}
    </div>
  );
};
```