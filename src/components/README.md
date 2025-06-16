# EDC Design System Components

This directory contains a collection of reusable React components built based on the Figma design system. The components are implemented with TypeScript and SCSS, following modern React patterns and accessibility best practices.

## Components

### Button
A versatile button component with multiple variants and states.

**Props:**
- `variant`: 'primary' | 'secondary' (default: 'primary')
- `onClick`: Click handler function
- `disabled`: Boolean to disable the button
- `children`: Button content
- `className`: Additional CSS classes

**Usage:**
```tsx
import { Button } from '../components';

<Button variant="primary" onClick={handleClick}>
  Click me
</Button>
```

### Checkbox
A checkbox component with multiple states and optional labels.

**Props:**
- `state`: 'unselected' | 'selected' | 'mixed' (default: 'unselected')
- `active`: Boolean for active/inactive state (default: true)
- `label`: Label text (default: 'label')
- `showLabel`: Boolean to show/hide label (default: false)
- `onChange`: Change handler function
- `className`: Additional CSS classes

**Usage:**
```tsx
import { Checkbox } from '../components';

<Checkbox 
  state="unselected"
  active={true}
  showLabel={true}
  label="Accept terms"
  onChange={(checked) => console.log(checked)}
/>
```

### Input
An input field component with optional icons and helper text.

**Props:**
- `placeholder`: Placeholder text (default: 'Placeholder')
- `value`: Input value (default: '')
- `onChange`: Change handler function
- `icon`: 'none' | 'eye' (default: 'none')
- `type`: 'text' | 'password' (default: 'text')
- `helperText`: Helper text below the input
- `className`: Additional CSS classes
- `disabled`: Boolean to disable the input

**Usage:**
```tsx
import { Input } from '../components';

<Input 
  placeholder="Enter password"
  type="password"
  icon="eye"
  onChange={(value) => console.log(value)}
/>
```

## Design Tokens

The components use consistent design tokens based on the Figma designs:

### Colors
- Primary: `#605DEC`
- Active Border: `#6E7491`
- Inactive Border: `#A1B0CC`
- Text Primary: `#333333`
- Text Secondary: `#6E7491`
- Placeholder: `#7C8DB0`
- Background: `#FFFFFF`

### Typography
- Font Family: 'Nunito Sans', sans-serif
- Button: 600 weight, 16px
- Input: 400 weight, 18px
- Checkbox Label: 400 weight, 16px

### Spacing
- Component gap: 8px
- Padding: 4px - 12px
- Border radius: 2px - 4px

## File Structure

```
src/components/
├── Button.tsx
├── Button.scss
├── Checkbox.tsx
├── Checkbox.scss
├── Input.tsx
├── Input.scss
├── Navigation.tsx
├── Navigation.scss
├── index.ts
└── README.md
```

## Development Notes

- All components are implemented as functional components with TypeScript
- SCSS is used for styling with BEM naming convention
- Components include hover and focus states
- Accessibility considerations are built-in
- All components are exported through the index.ts file for easy importing
