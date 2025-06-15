## 4. Accessibility Compliance Workflow
**File**: `.cline/workflows/a11y-audit.md`

### Purpose
Ensures your React app meets WCAG 2.1 AA standards and is accessible to all users.

### Key Actions
```markdown
# Accessibility Audit Workflow

## Steps

### 1. Automated A11y Scanning
- Run axe-core on all components
- Check color contrast ratios
- Verify ARIA labels and roles
- Detect missing alt text
- Find keyboard navigation issues

### 2. Generate Accessibility Report
```markdown
# Accessibility Audit Report

## Critical Issues (Must Fix)
- [ ] Missing alt text on 12 images
- [ ] Form inputs without labels (3 instances)
- [ ] Insufficient color contrast on primary buttons (3.2:1, needs 4.5:1)

## Component-Specific Issues
### Button Component
- Missing aria-label when only icon is present
- Focus outline removed with CSS

### Modal Component
- Focus not trapped within modal
- Escape key doesn't close modal
- Background not marked as inert
3. Generate A11y Fixes
typescript// Before: Inaccessible image
<img src="logo.png" />

// After: Accessible image
<img src="logo.png" alt="Company logo" />

// Before: Icon button without label
<button onClick={handleDelete}>
  <TrashIcon />
</button>

// After: Accessible icon button
<button onClick={handleDelete} aria-label="Delete item">
  <TrashIcon aria-hidden="true" />
</button>

// Add skip links
<a href="#main-content" className="skip-link">
  Skip to main content
</a>