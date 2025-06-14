# AI with Cline: A Practical Guide for VSCode

## Introduction: Why Prompts Matter

### The Power of Clear Communication with AI

When working with AI assistants like Cline, the quality of your results directly correlates with the quality of your prompts. Think of prompts as a conversation with a highly skilled developer who needs clear instructions.

**Why this matters:**
- 🎯 **Precision saves time**: A well-crafted prompt can save hours of back-and-forth
- 🔄 **Iteration efficiency**: Better initial prompts = fewer revisions needed
- 💡 **Creative solutions**: Clear context enables AI to suggest innovative approaches
- 🚀 **Productivity boost**: Master prompting = 10x your development speed

### Real-world Impact Example

**Poor prompt**: "Make a login form"

**Result**: Generic HTML form with minimal functionality

**Great prompt**: "Create a React login form with email/password validation, error handling, loading states, and accessibility features. Use Tailwind CSS for styling with a modern dark theme."

**Result**: Production-ready component with all requested features

---

## The Anatomy of a Good Prompt

### The C.L.E.A.R. Framework

**C** - Context  
**L** - Language/Tech Stack  
**E** - Examples  
**A** - Acceptance Criteria  
**R** - Restrictions/Requirements  

### Breaking Down Each Element

#### 1. **Context** - Set the Stage
```
"I'm building an e-commerce platform for handmade crafts. 
Currently working on the product catalog section."
```

#### 2. **Language/Tech Stack** - Be Specific
```
"Using Next.js 14 with TypeScript, Prisma ORM, and PostgreSQL. 
Styling with Tailwind CSS and shadcn/ui components."
```

#### 3. **Examples** - Show Don't Just Tell
```
"Similar to how Etsy displays products but with a Pinterest-style 
masonry grid layout. Each card should show: image, title, price, 
seller name, and rating."
```

#### 4. **Acceptance Criteria** - Define Success
```
"The component should:
- Load products with infinite scroll
- Show skeleton loaders while fetching
- Handle error states gracefully
- Be fully responsive (mobile-first)
- Support keyboard navigation"
```

#### 5. **Restrictions/Requirements** - Set Boundaries
```
"Must follow our existing design system, use our custom hooks 
for API calls, and maintain under 200ms initial load time."
```

### Prompt Templates for Common Tasks

#### Feature Implementation
```
Context: [Current project state]
Task: Implement [feature name]
Tech: [Your stack]
Requirements:
- [Requirement 1]
- [Requirement 2]
Similar to: [Reference/example]
Constraints: [Any limitations]
```

#### Bug Fixing
```
Issue: [Describe the bug]
Expected: [What should happen]
Actual: [What's happening]
Code location: [File/function]
Stack trace: [If available]
Environment: [OS, versions]
```

#### Code Refactoring
```
Current code: [Paste or describe]
Problems: [What needs improvement]
Goals: [Performance/readability/etc]
Maintain: [What shouldn't change]
Pattern: [Preferred approach]
```

---

## What Does It Mean for Me: Some Automation

### Transform Your Development Workflow

With proper Cline setup, you can automate:

- **Boilerplate Generation**: Complete CRUD operations in seconds
- **Test Writing**: Comprehensive test suites generated from your code
- **Documentation**: Auto-generate docs that actually make sense
- **Code Reviews**: AI-powered suggestions before human review
- **Refactoring**: Safely modernize legacy code

### Cline Rules

#### What Are Cline Rules?

Cline Rules are persistent instructions that guide the AI's behavior across all interactions in your project. Think of them as your AI's personality and coding standards combined.

#### Creating Effective Rules

**Location**: `.cline/rules.md` in your project root

**Example Rules File**:

```markdown
# Project Rules for Cline

## Code Style
- Use functional components with TypeScript
- Prefer const over let, never use var
- Use meaningful variable names (no single letters except in loops)
- Add JSDoc comments for all exported functions

## Architecture
- Follow feature-based folder structure
- Keep components under 200 lines
- Extract custom hooks for reusable logic
- Use React Query for all API calls

## Testing
- Write tests for all new features
- Use React Testing Library, not Enzyme
- Test user behavior, not implementation details
- Maintain minimum 80% code coverage

## Git Commits
- Use conventional commit format
- Include ticket number in commit message
- Keep commits atomic and focused

## Security
- Never commit sensitive data
- Validate all user inputs
- Use parameterized queries for database operations
- Implement proper error boundaries

## Performance
- Lazy load components when possible
- Optimize images before adding to repo
- Use React.memo for expensive components
- Implement virtual scrolling for long lists
```

#### Advanced Rule Patterns

**Project-Specific Rules**:
```markdown
## API Integration
- All API calls must use our custom useAPI hook
- Handle these specific error codes:
  - 401: Redirect to login
  - 429: Show rate limit message
  - 500: Display user-friendly error

## State Management
- Use Zustand for global state
- Keep form state local with react-hook-form
- Persist user preferences in localStorage
```

**Team Collaboration Rules**:
```markdown
## Code Review Prep
- Add // TODO: comments for unclear logic
- Include links to relevant documentation
- Highlight any breaking changes
- Note performance implications
```

### Cline Workflows

#### What Are Workflows?

Workflows are reusable task templates that standardize common development patterns. They ensure consistency and speed up repetitive tasks.

#### Creating Custom Workflows

**Location**: `.cline/workflows/`

**Example 1: New Feature Workflow**

`.cline/workflows/new-feature.md`:
```markdown
# New Feature Workflow

## Steps:
1. Create feature folder structure
2. Generate component with tests
3. Add to routing
4. Create API endpoint
5. Add to documentation
```

```markdown
## Folder Structure:

src/features/{feature-name}/
├── components/
│   ├── {FeatureName}.tsx
│   └── {FeatureName}.test.tsx
├── hooks/
│   └── use{FeatureName}.ts
├── api/
│   └── {feature-name}.api.ts
├── types/
│   └── {feature-name}.types.ts
└── index.ts
```

```markdown
## Component Template:
- TypeScript functional component
- Props interface
- Error boundary
- Loading state
- Empty state
- Accessibility attributes
```

**Example 2: API Integration Workflow**

`.cline/workflows/api-integration.md`:
```markdown
# API Integration Workflow

## Required Information:
- Endpoint URL
- HTTP Method
- Request/Response types
- Authentication method

## Generate:
1. TypeScript interfaces
2. API client function
3. React Query hook
4. Error handling
5. Loading states
6. Unit tests
7. Integration tests

## Code Structure:

### 1. Types Definition
```typescript
// types/api/{endpoint}.types.ts
export interface {Endpoint}Request {
  // Request fields
}

export interface {Endpoint}Response {
  // Response fields
}
```

### 2. API Client
```typescript
// api/{endpoint}.api.ts
export const {endpoint}Api = {
  get: async (params: {Endpoint}Request): Promise<{Endpoint}Response> => {
    // Implementation
  }
}
```

### 3. React Query Hook
```typescript
// hooks/use{Endpoint}.ts
export const use{Endpoint} = (params: {Endpoint}Request) => {
  return useQuery({
    queryKey: ['{endpoint}', params],
    queryFn: () => {endpoint}Api.get(params),
    // Options
  })
}
```
```


#### Using Workflows Effectively

**Trigger a Workflow**:
```
"Hey Cline, execute the new-feature workflow for a user profile feature"
```

**Customize on the Fly**:
```
"Run the api-integration workflow for a POST /api/products endpoint 
that handles file uploads"
```

---

## More automation with MCP Servers.

MCP (Model Context Protocol) enables Cline to interact with external tools and services, dramatically expanding its capabilities beyond just code generation.

### Figma MCP Example: From Design to Code

#### 1. **Install Figma MCP Server**

```bash
# Install the MCP server figma
npm install -g figma-developer-mcp
```

#### 2. **Configure Cline Settings**

**In VSCode**:
1. Open Cline MCP server by clicking the icon 
2. Click the Setting Gear icon
3. Click configure MCP Servers to open the json configs
4. Add the following configuration to the JSON to activate the MCP server
**Example Configuration** (settings.json):
```json
{
  "mcpServers": {
    "Framelink Figma MCP": {
      "command": "figma-developer-mcp",
      "args": [
        "--figma-api-key=API_KEY_FIGMA_ACCOUNT",
        "--stdio"
      ],
      "autoApprove": [
        "get_figma_data",
        "download_figma_images"
      ]
    }
  }
}
```
5. For the `API_KEY_FIGMA_ACCOUNT` if you do not have a Figma account use the one provided during the presentation.

#### 3. **Create a React Component from Figma**
Now that we have a MCP connected to Figma, we can prompt Cline to create a 1 to 1 React component from the Figma design.

1. Open the following Demo link in Figma https://www.figma.com/design/jvew1EDxEPitba0oEtmFHq/EDC-Demo-Login-Form?node-id=3-1524&t=0VzNCWeCbn7mFJHf-0
1. Copy a references link of the Figma design `Create account` button component
    1. Double click the button component to select it
    1. Right click `Copy as` => `Copy link to selection`
3. Prompt Cline to generate the button component in React from the figma
```javascript
// Cline can now:
"Using the figma link {PASTE LINK HERE} implement this button in a react component in shared folder"
```



## Live Demo

### Demo 1: Build a Complete Login form (10 minutes)
1. Show existing codebase
2. Write clear prompt for new feature
3. Watch Cline generate:
   - Component structure
   - API integration
   - Tests
   - Documentation
4. Run and test the feature

### Demo 2: Refactor Legacy Code (5 minutes)
1. Show problematic code
2. Create refactoring prompt with specific goals
3. Review Cline's suggestions
4. Apply changes incrementally

### Demo 3: MCP in Action (7 minutes)
1. Connect to database MCP
2. Query data with natural language
3. Generate reports
4. Update documentation automatically

---

## Key Takeaways

1. **Prompts are Programming**: Treat prompt writing as seriously as code writing
2. **Rules Drive Consistency**: Well-defined rules = consistent, high-quality output
3. **Workflows Save Time**: Automate repetitive tasks with reusable workflows
4. **MCP Extends Possibilities**: Connect Cline to your entire development ecosystem
5. **Practice Makes Perfect**: The more you use AI, the better you'll get at directing it

## Resources

- [Cline Documentation](https://github.com/cline/cline)
- [MCP Protocol Specification](https://modelcontextprotocol.org)
- [Prompt Engineering Guide](https://promptingguide.ai)
- [Community Workflow Library](https://github.com/cline/workflows)

## Questions?

Thank you for joining this session on AI-powered development with Cline!