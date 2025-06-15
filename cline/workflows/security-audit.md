# Security Audit Workflow for React/TypeScript Applications

**File**: `.cline/workflows/security-audit.md`

## Description
Comprehensive security audit workflow that checks your React/TypeScript application for common vulnerabilities, insecure patterns, and potential security risks. This workflow performs automated scans and generates detailed reports with remediation suggestions.

## Trigger
Run this workflow by saying: "Run security audit on my React app" or "Check my app for security vulnerabilities"

## Required Tools
- npm/yarn for dependency scanning
- ESLint with security plugins
- TypeScript compiler
- File system access for code analysis

## Workflow Steps

### 1. Dependency Vulnerability Scan

#### Check for Known Vulnerabilities
```bash
# Run npm audit for detailed vulnerability report
npm audit --json > security-audit/npm-audit-report.json

# For yarn users
yarn audit --json > security-audit/yarn-audit-report.json

# Check for outdated packages that might have security patches
npm outdated > security-audit/outdated-packages.txt
```

#### Analyze Critical Dependencies
Review and flag these high-risk dependency categories:
- Authentication libraries (passport, jsonwebtoken, bcrypt)
- Cryptography packages
- File upload/processing libraries
- Database drivers and ORMs
- HTML/Markdown parsers

#### Generate Dependency Report
Create `security-audit/dependency-report.md`:
```markdown
# Dependency Security Report

## Critical Vulnerabilities (High/Critical)
[List all high and critical vulnerabilities with:
- Package name and version
- Vulnerability description
- CVSS score
- Recommended fix/update]

## Outdated Security-Sensitive Packages
[List packages that handle security features and are outdated]

## Action Items
- [ ] Update package X to version Y
- [ ] Replace deprecated package Z
- [ ] Review and test after updates
```

### 2. Code Pattern Security Scan

#### Check for Common React Security Anti-Patterns

**Scan for Dangerous HTML Rendering**
Search for patterns:
```typescript
// DANGEROUS PATTERNS TO FIND:
dangerouslySetInnerHTML=
innerHTML =
document.write(
eval(
new Function(
```

Generate findings in `security-audit/dangerous-patterns.md`:
```markdown
# Dangerous Code Patterns Found

## XSS Vulnerabilities

### File: src/components/Comment.tsx
Line 45: Using dangerouslySetInnerHTML without sanitization
```tsx
<div dangerouslySetInnerHTML={{ __html: userComment }} />
```
**Risk**: High - Direct XSS vulnerability
**Fix**: Use DOMPurify or remove HTML rendering
```tsx
import DOMPurify from 'dompurify';
<div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(userComment) }} />
```
```

**Check for Insecure URL Handling**
```typescript
// PATTERNS TO CHECK:
window.location.href = 
window.open(
<a href={userInput}
<Link to={userInput}
```

**Identify State Management Security Issues**
```typescript
// CHECK FOR:
// Storing sensitive data in:
localStorage.setItem(*password*)
sessionStorage.setItem(*token*)
// Passwords/tokens in Redux state
// Sensitive data in React state that gets logged
```

### 3. Authentication & Authorization Audit

#### Check Authentication Implementation
Scan for these patterns and create `security-audit/auth-audit.md`:

```markdown
# Authentication Security Audit

## Token Storage
- [ ] Tokens stored in httpOnly cookies (GOOD)
- [ ] Tokens in localStorage (RISKY - vulnerable to XSS)
- [ ] Tokens in sessionStorage (MODERATE - better than localStorage)
- [ ] Tokens in Redux/Context state only (RISKY - lost on refresh)

## Token Validation
- [ ] Token expiration checked before API calls
- [ ] Refresh token rotation implemented
- [ ] Token signature validation on backend

## Password Handling
- [ ] Passwords sent over HTTPS only
- [ ] No passwords in console.log statements
- [ ] Password strength requirements enforced
- [ ] No hardcoded credentials in code

## Session Management
- [ ] Logout clears all auth data
- [ ] Session timeout implemented
- [ ] Concurrent session handling
```

#### Review Protected Routes
```typescript
// ANALYZE PATTERNS LIKE:
// Weak route protection
if (user) { return <AdminPanel /> }

// Missing role checks
<Route path="/admin" component={AdminPanel} />

// Client-side only protection
{user.role === 'admin' && <SensitiveData />}
```

### 4. API Security Scan

#### Check API Call Patterns
Create `security-audit/api-security.md`:

```markdown
# API Security Analysis

## Insecure API Patterns Found

### Missing HTTPS Enforcement
File: src/services/api.ts
```typescript
// INSECURE:
const API_BASE = 'http://api.example.com'

// SECURE:
const API_BASE = 'https://api.example.com'
```

### No Request Validation
File: src/hooks/useCreateUser.ts
```typescript
// INSECURE: Direct user input to API
const response = await fetch('/api/users', {
  body: JSON.stringify(userInput)
})

// SECURE: Validate and sanitize
const response = await fetch('/api/users', {
  body: JSON.stringify(validateUserInput(userInput))
})
```

### Missing Error Sanitization
File: src/components/ErrorBoundary.tsx
```typescript
// INSECURE: Exposing stack traces
<div>{error.stack}</div>

// SECURE: Generic error messages
<div>An error occurred. Please try again.</div>
```
```

### 5. Input Validation Audit

#### Scan Form Components
Look for these patterns and document in `security-audit/input-validation.md`:

```markdown
# Input Validation Report

## Missing Validation

### File: src/components/UserForm.tsx
- Email field: No format validation
- Phone field: Accepts any input
- URL field: No protocol validation

## Recommended Validations

### Email Validation
```typescript
const emailSchema = z.string()
  .email()
  .max(255)
  .transform(email => email.toLowerCase().trim());
```

### URL Validation
```typescript
const urlSchema = z.string()
  .url()
  .refine(url => url.startsWith('https://'), {
    message: 'Only HTTPS URLs allowed'
  });
```

### File Upload Validation
```typescript
const fileSchema = z.object({
  size: z.number().max(5 * 1024 * 1024), // 5MB limit
  type: z.enum(['image/jpeg', 'image/png', 'application/pdf']),
  name: z.string().regex(/^[\w\-. ]+$/) // Alphanumeric only
});
```
```

### 6. Environment & Configuration Security

#### Check for Exposed Secrets
Scan for patterns in `security-audit/secrets-scan.md`:

```markdown
# Exposed Secrets Scan

## Hardcoded Secrets Found

### API Keys
File: src/config/maps.ts
Line 12: Hardcoded Google Maps API key
```typescript
const MAPS_API_KEY = 'AIzaSyB...' // EXPOSED
```

### Database Credentials
File: src/utils/db.ts
Line 5: Connection string with credentials
```typescript
const DB_URL = 'postgresql://user:pass@localhost/db' // EXPOSED
```

## Environment Variables Check
- [ ] All secrets in .env files
- [ ] .env in .gitignore
- [ ] .env.example with dummy values
- [ ] No secrets in code comments
- [ ] No secrets in package.json scripts
```

### 7. CORS and CSP Configuration

#### Review Security Headers
Create `security-audit/security-headers.md`:

```markdown
# Security Headers Configuration

## Content Security Policy (CSP)
Recommended CSP for React apps:
```html
<meta http-equiv="Content-Security-Policy" 
  content="default-src 'self'; 
    script-src 'self' 'unsafe-inline' 'unsafe-eval'; 
    style-src 'self' 'unsafe-inline'; 
    img-src 'self' data: https:; 
    font-src 'self'; 
    connect-src 'self' https://api.yourdomain.com">
```

## CORS Configuration
```typescript
// Overly permissive CORS (INSECURE):
cors({ origin: '*' })

// Properly configured CORS (SECURE):
cors({
  origin: ['https://app.yourdomain.com'],
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
})
```

## Additional Headers
- [ ] X-Frame-Options: DENY
- [ ] X-Content-Type-Options: nosniff
- [ ] Referrer-Policy: strict-origin-when-cross-origin
- [ ] Permissions-Policy: geolocation=(), microphone=()
```

### 8. Third-Party Integration Security

#### Audit External Scripts
Document in `security-audit/third-party.md`:

```markdown
# Third-Party Integration Audit

## External Scripts
- Google Analytics: Loaded with SRI hash ✓
- Stripe.js: Loaded from official CDN ✓
- Unknown script from cdn.example.com ✗

## Iframe Security
- Payment iframe: sandbox attribute present ✓
- Marketing widget: No sandbox restrictions ✗

## Recommendations
1. Add Subresource Integrity (SRI) to all external scripts
2. Use sandbox attribute for all iframes
3. Audit all third-party permissions
```

### 9. React-Specific Security Checks

#### Component Security Patterns
Create `security-audit/react-security.md`:

```markdown
# React Security Best Practices Audit

## Component Issues Found

### Unsafe Lifecycle Methods
File: src/components/LegacyComponent.tsx
- Using componentWillMount (deprecated)
- Direct DOM manipulation in componentDidMount

### State Management Security
File: src/store/userSlice.ts
- Storing sensitive tokens in Redux state
- No encryption for sensitive data

### Event Handler Security
File: src/components/SearchBar.tsx
```typescript
// INSECURE: User input directly in query
const handleSearch = (e) => {
  window.location.href = `/search?q=${e.target.value}`;
}

// SECURE: Encode user input
const handleSearch = (e) => {
  const encoded = encodeURIComponent(e.target.value);
  navigate(`/search?q=${encoded}`);
}
```
```

### 10. Generate Security Score and Action Plan

#### Create Executive Summary
Generate `security-audit/executive-summary.md`:

```markdown
# Security Audit Executive Summary

## Overall Security Score: 65/100

### Critical Issues (4)
1. **Hardcoded API keys in source code**
   - Risk: High
   - Files affected: 3
   - Immediate action required

2. **XSS vulnerabilities via dangerouslySetInnerHTML**
   - Risk: High
   - Components affected: 5
   - Sanitization needed

3. **Insecure token storage in localStorage**
   - Risk: High
   - Refactor to httpOnly cookies

4. **Missing input validation on forms**
   - Risk: Medium-High
   - 12 forms need validation

### Security Metrics
- Dependencies with vulnerabilities: 8 (3 critical, 5 moderate)
- Insecure code patterns found: 23
- Missing security headers: 4
- Exposed secrets: 6

### Priority Action Items
1. [ ] Remove all hardcoded secrets (Day 1)
2. [ ] Fix XSS vulnerabilities (Day 1-2)
3. [ ] Update critical dependencies (Day 2)
4. [ ] Implement proper token storage (Day 3-4)
5. [ ] Add input validation (Week 1)
6. [ ] Configure security headers (Week 1)

### Long-term Recommendations
- Implement automated security scanning in CI/CD
- Regular dependency updates schedule
- Security training for development team
- Penetration testing before major releases
```

#### Create Detailed Remediation Guide
Generate `security-audit/remediation-guide.md`:

```markdown
# Security Remediation Guide

## Step-by-Step Fixes

### 1. Fix XSS Vulnerabilities

#### Install DOMPurify
```bash
npm install dompurify
npm install --save-dev @types/dompurify
```

#### Create Sanitization Utility
```typescript
// src/utils/sanitize.ts
import DOMPurify from 'dompurify';

export const sanitizeHTML = (dirty: string): string => {
  return DOMPurify.sanitize(dirty, {
    ALLOWED_TAGS: ['b', 'i', 'em', 'strong', 'a', 'p', 'br'],
    ALLOWED_ATTR: ['href', 'target', 'rel']
  });
};
```

#### Update Components
Replace all instances of:
```typescript
<div dangerouslySetInnerHTML={{ __html: content }} />
```
With:
```typescript
<div dangerouslySetInnerHTML={{ __html: sanitizeHTML(content) }} />
```

### 2. Secure Token Storage

#### Implement Secure Auth Service
```typescript
// src/services/auth/secureAuth.ts
export class SecureAuthService {
  // Use httpOnly cookies instead of localStorage
  static async login(credentials: LoginCredentials) {
    const response = await fetch('/api/auth/login', {
      method: 'POST',
      credentials: 'include', // Include cookies
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(credentials)
    });
    
    // Token is now in httpOnly cookie
    return response.json();
  }

  static async refreshToken() {
    // Refresh token rotation
    const response = await fetch('/api/auth/refresh', {
      method: 'POST',
      credentials: 'include'
    });
    
    return response.json();
  }
}
```

### 3. Environment Variables Setup

#### Create .env.example
```bash
# API Configuration
VITE_API_URL=https://api.example.com
VITE_API_TIMEOUT=30000

# Third Party Services (use your own keys)
VITE_GOOGLE_MAPS_KEY=your_key_here
VITE_STRIPE_PUBLIC_KEY=pk_test_xxx

# Feature Flags
VITE_ENABLE_ANALYTICS=false
```

#### Update gitignore
```bash
# Environment files
.env
.env.local
.env.*.local

# Never commit
*.pem
*.key
secrets/
```
```

## Output Files Generated

The workflow creates these files in a `security-audit/` directory:
1. `npm-audit-report.json` - Raw vulnerability data
2. `dependency-report.md` - Analyzed dependency risks
3. `dangerous-patterns.md` - Code patterns that pose security risks
4. `auth-audit.md` - Authentication implementation review
5. `api-security.md` - API security issues
6. `input-validation.md` - Form validation gaps
7. `secrets-scan.md` - Exposed secrets and credentials
8. `security-headers.md` - Missing security headers
9. `third-party.md` - External script risks
10. `react-security.md` - React-specific issues
11. `executive-summary.md` - High-level overview with scores
12. `remediation-guide.md` - Step-by-step fix instructions

## Usage Example

```
You: "Run security audit on my React app"

Cline: "I'll perform a comprehensive security audit of your React/TypeScript application. This will check for vulnerabilities, insecure patterns, and generate detailed reports..."

[Cline executes all steps and generates reports]

Cline: "Security audit complete! I found 4 critical issues and 12 medium-risk vulnerabilities. Your security score is 65/100. I've created detailed reports in the security-audit/ directory. Would you like me to help fix the critical XSS vulnerabilities first?"
```

## Customization Options

You can extend this workflow by adding:
- Custom security rules specific to your organization
- Integration with security tools (Snyk, SonarQube)
- Automated fix application for common issues
- Slack/email notifications for critical findings
- Comparison with previous audits to track improvements