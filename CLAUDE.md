# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

CoachTill is an AI-powered coaching application built with the T3 Stack. It enables mentor-student relationships with AI-assisted daily check-ins, goal tracking, and monthly summaries.

## Development Commands

```bash
pnpm dev              # Start dev server with Turbopack
pnpm build            # Production build
pnpm check            # Run lint + typecheck
pnpm lint             # ESLint only
pnpm typecheck        # TypeScript only
pnpm format:write     # Format with Prettier
pnpm db:generate      # Create new Prisma migration
pnpm db:push          # Push schema changes (dev only)
pnpm db:studio        # Open Prisma Studio
```

## Architecture

### Tech Stack
- **Framework:** Next.js 15 with App Router
- **API:** tRPC v11 with React Query
- **Auth:** NextAuth.js v5 (beta) with Discord provider
- **Database:** PostgreSQL with Prisma ORM
- **Styling:** Tailwind CSS v4 + Shadcn/ui components

### Key Directories
- `src/app/` - Next.js App Router pages and API routes
- `src/server/api/` - tRPC routers and initialization
- `src/server/auth/` - NextAuth configuration
- `src/trpc/` - tRPC client setup (react.tsx for client, server.ts for RSCs)
- `src/components/ui/` - Shadcn/ui components
- `prisma/schema.prisma` - Database schema

### tRPC Pattern
- Routers defined in `src/server/api/routers/` and composed in `root.ts`
- Use `publicProcedure` for unauthenticated endpoints
- Use `protectedProcedure` for authenticated endpoints (throws UNAUTHORIZED if no session)
- Input validation with Zod schemas
- Context provides `db` (Prisma), `session`, and `headers`

### Server-Side tRPC Calls
For React Server Components, use the server caller from `src/trpc/server.ts`:
```typescript
import { api, HydrateClient } from "~/trpc/server";
const data = await api.router.procedure();
```

### Client-Side tRPC Calls
For client components, use hooks from `src/trpc/react.tsx`:
```typescript
import { api } from "~/trpc/react";
const { data } = api.router.procedure.useQuery();
```

### Database Models
Core entities: User (with roles), Profile, Mentorship, Goal, Milestone, CheckIn, MonthlySummary, Notification

### Path Aliases
Use `~/` for imports from `src/` (e.g., `import { api } from "~/trpc/react"`)

## Environment Variables

Required variables defined in `src/env.js`. Key ones:
- `DATABASE_URL` - PostgreSQL connection string
- `AUTH_SECRET` - NextAuth secret
- `AUTH_DISCORD_ID/SECRET` - Discord OAuth credentials
