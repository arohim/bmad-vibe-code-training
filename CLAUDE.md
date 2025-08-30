# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a **Logistics CRM MVP** project using a monorepo architecture with BMAD™ Core framework for AI agent-driven development. The system targets Thai logistics companies, emphasizing simplicity and ease-of-use for non-technical operators.

## Architecture & Tech Stack

**Monorepo Structure:**
```
/logistics-crm-mvp
├── apps/web/          # React frontend with Vite
├── packages/shared/   # Shared TypeScript types
├── docs/             # Sharded documentation (PRD, Architecture)
├── .bmad-core/       # BMAD agent configurations and tasks
└── .cursor/rules/    # Cursor IDE agent rules
```

**Technology Stack:**
- **Frontend**: React 18.x + TypeScript 5.x + Vite 5.x
- **UI Library**: shadcn/ui + Tailwind CSS 3.x
- **State Management**: React Context API
- **Backend**: Supabase (PostgreSQL 15.x, Auth, Edge Functions)
- **API**: PostgREST (auto-generated from Supabase)
- **Testing**: Vitest + React Testing Library
- **CI/CD**: GitHub Actions
- **Infrastructure**: Supabase CLI for migrations

## Development Commands

**Setup:**
```bash
npm install                    # Install all dependencies
# Create .env with Supabase URL + Anon Key (see SETUP.md)
```

**Development:**
```bash
npm run dev                    # Start web development server (default workspace)
npm run dev --workspace=web    # Alternative syntax
```

**Build & Type Checking:**
```bash
npm run build                  # Build web app (tsc + vite build)
npm run build --workspace=web  # Alternative syntax
npm run type-check             # TypeScript type checking only
npm run lint                   # ESLint with TypeScript rules
```

**Testing:**
```bash
npm run test                   # Run tests for web app
npm run test --workspace=web   # Alternative syntax
npm run test:watch             # Tests in watch mode (if available)
```

**Database (Supabase):**
```bash
supabase start                 # Start local Supabase
supabase db reset             # Reset database with migrations
supabase gen types typescript  # Generate TypeScript types
```

## BMAD™ Agent System

This project uses BMAD™ Core framework with specialized AI agents accessible via slash commands:

**Primary Agents:**
- `/BMad\agents:sm` - Scrum Master (story creation, agile processes)
- `/BMad\agents:po` - Product Owner (requirements, validation)
- `/BMad\agents:dev` - Full Stack Developer (implementation)
- `/BMad\agents:qa` - QA Tester (testing, validation)

**Specialized Task Agents:**
- `react-crm-builder` - React CRM component development
- `supabase-backend-specialist` - Backend infrastructure
- `ux-design-reviewer` - UI/UX feedback
- `crm-qa-tester` - CRM-specific testing

## Key Architecture Principles

**Data Access Patterns:**
- All database access must use Supabase Client Library
- Shared types are centralized in `packages/shared/types.ts`
- Environment variables accessed via `import.meta.env.VITE_*`

**Documentation Structure:**
- PRD is sharded in `docs/prd/` (requirements, epics, stories)
- Architecture documentation in `docs/architecture/` (tech stack, patterns, standards)
- User stories tracked in `docs/stories/` using format `{epic}.{story}.story.md`

**MVP Development Strategy:**
- Epic 1: Core CRM scaffolding with dummy data (no authentication) - IN PROGRESS
- Epic 2: User authentication and security
- Focus on simplicity over feature completeness
- Responsive web application for desktop browsers

**Current Implementation Status:**
- ✅ Story 1.1: Project scaffolding complete (React + TypeScript + shadcn/ui)
- ✅ Story 1.2: Main layout shell with sidebar navigation complete
- ⚠️ Components: MainLayout, Sidebar implemented in `apps/web/src/components/layout/`

## Development Context Files

When working on development tasks, always reference these key files:
- `docs/architecture/coding-standards.md` - Code standards and patterns
- `docs/architecture/tech-stack.md` - Technology specifications
- `docs/architecture/unified-project-structure.md` - Project organization
- `.bmad-core/core-config.yaml` - Project configuration

## Story-Driven Development

Development follows a structured story-driven approach:
1. Stories created by Scrum Master agent in `docs/stories/`
2. Each story contains full technical context and acceptance criteria
3. Development agent implements following story specifications
4. QA agent validates implementation against acceptance criteria

Current active stories: Epic 1 implementation in progress
- Story 1.1: Project Scaffolding - Status: Complete
- Story 1.2: Main Layout Shell - Status: Complete  
- Next: Story 1.3+ (future CRM components)

## Agent Interaction Patterns

- Use `@dev` in Cursor to activate Full Stack Developer persona
- BMAD agents maintain state and context across interactions
- Each agent has specific commands accessible via `*help`
- Tasks and checklists are executable workflows in `.bmad-core/`
- Always load project config via `bmad-core/core-config.yaml` before agent operations
- Project includes Thai language support in components and documentation
- SETUP.md contains detailed Thai setup instructions for Supabase configuration