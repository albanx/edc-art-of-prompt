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

## Folder Structure:
```
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

**Example 3: Database Migration Workflow**

`.cline/workflows/db-migration.md`:
```markdown
# Database Migration Workflow

## Pre-Migration Checklist:
- [ ] Backup current database
- [ ] Review schema changes
- [ ] Test rollback procedure
- [ ] Check for breaking changes

## Migration Steps:
1. Generate migration file
2. Add up/down migrations
3. Update Prisma schema
4. Generate TypeScript types
5. Update seed data
6. Test in development
7. Document changes

## Template:
```sql
-- Migration: {description}
-- Author: {author}
-- Date: {date}

-- UP
BEGIN;
  -- Migration queries here
COMMIT;

-- DOWN
BEGIN;
  -- Rollback queries here
COMMIT;
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

**Chain Workflows**:
```
"First run the db-migration workflow to add a 'status' field, 
then update the api-integration workflow for the affected endpoints"
```

---

## A More Realistic Example: How to Connect MCP Servers to Cline

### Understanding MCP (Model Context Protocol)

MCP enables Cline to interact with external tools and services, dramatically expanding its capabilities beyond just code generation.

### Step-by-Step MCP Setup

#### 1. **Install MCP Server**

```bash
# Install the MCP server package
npm install -g @modelcontextprotocol/server

# Or for a specific tool (e.g., filesystem access)
npm install -g @modelcontextprotocol/server-filesystem
```

#### 2. **Configure Cline Settings**

**In VSCode**:
1. Open Settings (Cmd/Ctrl + ,)
2. Search for "Cline MCP"
3. Add your MCP configuration

**Example Configuration** (settings.json):
```json
{
  "cline.mcpServers": {
    "filesystem": {
      "command": "node",
      "args": [
        "/path/to/mcp-server-filesystem/index.js",
        "--allowed-directories",
        "/Users/yourname/projects"
      ],
      "env": {
        "NODE_ENV": "production"
      }
    },
    "github": {
      "command": "mcp-server-github",
      "args": ["--token", "${env:GITHUB_TOKEN}"],
      "env": {
        "GITHUB_TOKEN": "your-token-here"
      }
    },
    "database": {
      "command": "mcp-server-postgres",
      "args": [
        "--connection-string",
        "${env:DATABASE_URL}"
      ]
    }
  }
}
```

#### 3. **Create Custom MCP Server**

**Basic MCP Server Structure**:

`my-mcp-server/index.js`:
```javascript
const { Server } = require('@modelcontextprotocol/server');

class MyCustomServer extends Server {
  constructor() {
    super({
      name: 'my-custom-server',
      version: '1.0.0',
      capabilities: {
        tools: true,
        resources: true
      }
    });
  }

  // Define available tools
  async getTools() {
    return [
      {
        name: 'analyze_code_quality',
        description: 'Analyze code quality metrics',
        inputSchema: {
          type: 'object',
          properties: {
            filePath: { type: 'string' },
            metrics: { 
              type: 'array',
              items: { type: 'string' }
            }
          },
          required: ['filePath']
        }
      }
    ];
  }

  // Handle tool execution
  async executeTool(name, params) {
    switch(name) {
      case 'analyze_code_quality':
        return this.analyzeCodeQuality(params);
      default:
        throw new Error(`Unknown tool: ${name}`);
    }
  }

  async analyzeCodeQuality({ filePath, metrics }) {
    // Your implementation here
    const results = {
      complexity: 8,
      maintainability: 85,
      testCoverage: 92
    };
    
    return {
      success: true,
      results
    };
  }
}

// Start the server
const server = new MyCustomServer();
server.start();
```

#### 4. **Practical MCP Use Cases**

**Example 1: Database Query MCP**
```javascript
// Cline can now execute:
"Query the database to find all users who signed up in the last 7 days 
and create a summary report"

// MCP handles the actual database connection and query execution
```

**Example 2: CI/CD Integration MCP**
```javascript
// Cline can now:
"Check the status of the latest deployment and rollback if there are 
more than 5 errors in the last hour"
```

**Example 3: Documentation Generator MCP**
```javascript
// Cline can now:
"Scan all components in src/components and generate a complete 
API documentation with examples"
```

### Advanced MCP Patterns

#### 1. **Chaining MCP Servers**

```json
{
  "cline.mcpWorkflows": {
    "full-stack-feature": [
      {
        "server": "database",
        "action": "create-migration"
      },
      {
        "server": "backend-api",
        "action": "generate-endpoints"
      },
      {
        "server": "frontend",
        "action": "create-components"
      },
      {
        "server": "testing",
        "action": "generate-e2e-tests"
      }
    ]
  }
}
```

#### 2. **MCP Server Communication**

```javascript
// Enable servers to share context
class CollaborativeMCPServer extends Server {
  async shareContext(targetServer, data) {
    return this.emit('context-share', {
      target: targetServer,
      data: data
    });
  }
  
  async onContextReceived(source, data) {
    // Handle shared context from other servers
    this.updateLocalContext(source, data);
  }
}
```

#### 3. **Security Best Practices**

```javascript
// Implement proper authentication
class SecureMCPServer extends Server {
  async authenticate(token) {
    // Validate token
    return await this.validateToken(token);
  }
  
  async authorizeAction(user, action) {
    // Check permissions
    return this.checkPermissions(user, action);
  }
  
  // Sanitize inputs
  sanitizeInput(input) {
    // Implement input validation
    return this.validator.clean(input);
  }
}
```

### Troubleshooting MCP Connections

**Common Issues and Solutions**:

1. **Connection Timeout**
   ```json
   {
     "cline.mcpServers": {
       "slow-server": {
         "command": "...",
         "timeout": 30000  // Increase timeout to 30 seconds
       }
     }
   }
   ```

2. **Permission Errors**
   ```bash
   # Grant necessary permissions
   chmod +x /path/to/mcp-server
   
   # Check file access
   ls -la ~/.cline/mcp/
   ```

3. **Debug Mode**
   ```json
   {
     "cline.mcpDebug": true,
     "cline.mcpLogLevel": "verbose"
   }
   ```

---

## Live Demo Ideas

### Demo 1: Build a Complete Feature (10 minutes)
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