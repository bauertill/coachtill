# CoachTill - Task Tracker

## Sprint 1: Foundation (Week 1)

### Project Setup

| ID  | Task                                                                              | Priority | Status  | Est. Hours |
| --- | --------------------------------------------------------------------------------- | -------- | ------- | ---------- |
| 1.1 | Run `pnpm create t3-app@latest` with TypeScript, tRPC, Prisma, Tailwind, NextAuth | P0       | ⬜ Todo | 0.5        |
| 1.2 | Configure Tailwind theme with custom colors (coaching-themed palette)             | P1       | ⬜ Todo | 1          |
| 1.3 | Set up Prettier and ESLint with stricter rules                                    | P1       | ⬜ Todo | 0.5        |
| 1.4 | Create `.env.example` with all required variables                                 | P0       | ⬜ Todo | 0.5        |
| 1.5 | Set up PostgreSQL database (recommend: Neon or Supabase)                          | P0       | ⬜ Todo | 1          |

### Database Schema

| ID   | Task                                                      | Priority | Status  | Est. Hours |
| ---- | --------------------------------------------------------- | -------- | ------- | ---------- |
| 1.6  | Create User model with role enum (STUDENT, MENTOR, ADMIN) | P0       | ⬜ Todo | 1          |
| 1.7  | Create Profile model for extended user info               | P1       | ⬜ Todo | 0.5        |
| 1.8  | Create Mentorship model for mentor-student relationships  | P0       | ⬜ Todo | 1          |
| 1.9  | Create Goal and Milestone models                          | P0       | ⬜ Todo | 1          |
| 1.10 | Create CheckIn model for daily AI conversations           | P0       | ⬜ Todo | 1          |
| 1.11 | Create MonthlySummary model                               | P0       | ⬜ Todo | 0.5        |
| 1.12 | Create MentorSession model                                | P0       | ⬜ Todo | 0.5        |
| 1.13 | Run initial migration and verify schema                   | P0       | ⬜ Todo | 0.5        |
| 1.14 | Create seed script with test data                         | P2       | ⬜ Todo | 2          |

---

## Sprint 2: Authentication (Week 2)

### Auth Setup

| ID  | Task                                           | Priority | Status  | Est. Hours |
| --- | ---------------------------------------------- | -------- | ------- | ---------- |
| 2.1 | Configure NextAuth with Google provider        | P0       | ⬜ Todo | 2          |
| 2.2 | Add Email magic link provider                  | P1       | ⬜ Todo | 2          |
| 2.3 | Create custom sign-in page with role selection | P0       | ⬜ Todo | 3          |
| 2.4 | Create sign-up page with onboarding context    | P0       | ⬜ Todo | 3          |
| 2.5 | Implement protected route middleware           | P0       | ⬜ Todo | 2          |
| 2.6 | Add role-based route protection                | P0       | ⬜ Todo | 2          |

### User Profiles

| ID   | Task                                  | Priority | Status  | Est. Hours |
| ---- | ------------------------------------- | -------- | ------- | ---------- |
| 2.7  | Create profile setup wizard component | P1       | ⬜ Todo | 4          |
| 2.8  | Build profile edit page               | P1       | ⬜ Todo | 3          |
| 2.9  | Add avatar upload with uploadthing    | P2       | ⬜ Todo | 2          |
| 2.10 | Implement timezone picker             | P1       | ⬜ Todo | 1          |

---

## Sprint 3: Goal Management (Week 3)

### Goal CRUD

| ID  | Task                                        | Priority | Status  | Est. Hours |
| --- | ------------------------------------------- | -------- | ------- | ---------- |
| 3.1 | Create `goals.create` tRPC mutation         | P0       | ⬜ Todo | 1          |
| 3.2 | Create `goals.getAll` tRPC query            | P0       | ⬜ Todo | 1          |
| 3.3 | Create `goals.getById` tRPC query           | P0       | ⬜ Todo | 0.5        |
| 3.4 | Create `goals.update` tRPC mutation         | P0       | ⬜ Todo | 1          |
| 3.5 | Create `goals.delete` tRPC mutation         | P1       | ⬜ Todo | 0.5        |
| 3.6 | Create `goals.updateProgress` tRPC mutation | P0       | ⬜ Todo | 1          |

### Goal UI

| ID   | Task                                             | Priority | Status  | Est. Hours |
| ---- | ------------------------------------------------ | -------- | ------- | ---------- |
| 3.7  | Build goal creation modal/page                   | P0       | ⬜ Todo | 4          |
| 3.8  | Create goal card component with progress ring    | P0       | ⬜ Todo | 3          |
| 3.9  | Build goals dashboard/list view                  | P0       | ⬜ Todo | 4          |
| 3.10 | Create goal detail page                          | P1       | ⬜ Todo | 3          |
| 3.11 | Add goal status toggle (active/paused/completed) | P1       | ⬜ Todo | 2          |
| 3.12 | Build milestone sub-task component               | P1       | ⬜ Todo | 3          |

---

## Sprint 4: Daily Check-ins Part 1 (Week 4)

### AI Integration

| ID  | Task                                    | Priority | Status  | Est. Hours |
| --- | --------------------------------------- | -------- | ------- | ---------- |
| 4.1 | Set up OpenAI SDK and configuration     | P0       | ⬜ Todo | 1          |
| 4.2 | Create AI service with error handling   | P0       | ⬜ Todo | 2          |
| 4.3 | Design coaching prompt template         | P0       | ⬜ Todo | 3          |
| 4.4 | Create context builder (goals, history) | P0       | ⬜ Todo | 3          |
| 4.5 | Implement streaming response handler    | P1       | ⬜ Todo | 2          |

### Check-in Backend

| ID   | Task                                            | Priority | Status  | Est. Hours |
| ---- | ----------------------------------------------- | -------- | ------- | ---------- |
| 4.6  | Create `checkIns.create` tRPC mutation          | P0       | ⬜ Todo | 1          |
| 4.7  | Create `checkIns.getToday` tRPC query           | P0       | ⬜ Todo | 1          |
| 4.8  | Create `checkIns.getHistory` tRPC query         | P0       | ⬜ Todo | 1          |
| 4.9  | Create `checkIns.chat` tRPC mutation (AI)       | P0       | ⬜ Todo | 3          |
| 4.10 | Create `checkIns.generateSummary` tRPC mutation | P0       | ⬜ Todo | 2          |

---

## Sprint 5: Daily Check-ins Part 2 (Week 5)

### Check-in UI

| ID  | Task                                 | Priority | Status  | Est. Hours |
| --- | ------------------------------------ | -------- | ------- | ---------- |
| 5.1 | Build chat interface component       | P0       | ⬜ Todo | 6          |
| 5.2 | Create message bubble components     | P0       | ⬜ Todo | 2          |
| 5.3 | Add mood/energy selection UI         | P1       | ⬜ Todo | 2          |
| 5.4 | Build check-in start flow            | P0       | ⬜ Todo | 3          |
| 5.5 | Create check-in completion screen    | P1       | ⬜ Todo | 2          |
| 5.6 | Build check-in history calendar view | P1       | ⬜ Todo | 4          |
| 5.7 | Create individual check-in view      | P1       | ⬜ Todo | 2          |

### Streaks & Gamification

| ID   | Task                                  | Priority | Status  | Est. Hours |
| ---- | ------------------------------------- | -------- | ------- | ---------- |
| 5.8  | Calculate and display check-in streak | P2       | ⬜ Todo | 2          |
| 5.9  | Create streak celebration animations  | P3       | ⬜ Todo | 2          |
| 5.10 | Build achievement badges system       | P3       | ⬜ Todo | 4          |

---

## Sprint 6: Mentor-Student Pairing (Week 6)

### Pairing System

| ID  | Task                                       | Priority | Status  | Est. Hours |
| --- | ------------------------------------------ | -------- | ------- | ---------- |
| 6.1 | Create `mentorship.invite` tRPC mutation   | P0       | ⬜ Todo | 2          |
| 6.2 | Create `mentorship.accept` tRPC mutation   | P0       | ⬜ Todo | 1          |
| 6.3 | Create `mentorship.decline` tRPC mutation  | P1       | ⬜ Todo | 0.5        |
| 6.4 | Create `mentorship.getStudents` tRPC query | P0       | ⬜ Todo | 1          |
| 6.5 | Create `mentorship.getMentor` tRPC query   | P0       | ⬜ Todo | 1          |
| 6.6 | Set up email service (Resend)              | P1       | ⬜ Todo | 2          |
| 6.7 | Create invitation email template           | P1       | ⬜ Todo | 2          |

### Pairing UI

| ID   | Task                                     | Priority | Status  | Est. Hours |
| ---- | ---------------------------------------- | -------- | ------- | ---------- |
| 6.8  | Build mentor invite student modal        | P0       | ⬜ Todo | 3          |
| 6.9  | Create pending invitations list          | P1       | ⬜ Todo | 2          |
| 6.10 | Build student invitation acceptance page | P0       | ⬜ Todo | 3          |
| 6.11 | Create mentor's student list view        | P0       | ⬜ Todo | 3          |

---

## Sprint 7: Mentor Dashboard (Week 7)

### Student Overview

| ID  | Task                                          | Priority | Status  | Est. Hours |
| --- | --------------------------------------------- | -------- | ------- | ---------- |
| 7.1 | Create `mentor.getStudentOverview` tRPC query | P0       | ⬜ Todo | 2          |
| 7.2 | Create `mentor.getStudentGoals` tRPC query    | P0       | ⬜ Todo | 1          |
| 7.3 | Create `mentor.getStudentCheckIns` tRPC query | P0       | ⬜ Todo | 2          |
| 7.4 | Build mentor home dashboard                   | P0       | ⬜ Todo | 5          |
| 7.5 | Create student card with quick stats          | P0       | ⬜ Todo | 3          |
| 7.6 | Build detailed student view page              | P0       | ⬜ Todo | 5          |
| 7.7 | Add "needs attention" indicators              | P1       | ⬜ Todo | 2          |

---

## Sprint 8: Monthly Summaries (Week 8)

### Summary Generation

| ID  | Task                                      | Priority | Status  | Est. Hours |
| --- | ----------------------------------------- | -------- | ------- | ---------- |
| 8.1 | Design summary generation prompt          | P0       | ⬜ Todo | 3          |
| 8.2 | Create `summaries.generate` tRPC mutation | P0       | ⬜ Todo | 4          |
| 8.3 | Extract themes from check-ins             | P0       | ⬜ Todo | 3          |
| 8.4 | Generate mood/energy trend analysis       | P1       | ⬜ Todo | 2          |
| 8.5 | Create suggested discussion topics        | P1       | ⬜ Todo | 2          |

### Summary UI

| ID   | Task                                  | Priority | Status  | Est. Hours |
| ---- | ------------------------------------- | -------- | ------- | ---------- |
| 8.6  | Build monthly summary report view     | P0       | ⬜ Todo | 6          |
| 8.7  | Create themes visualization           | P1       | ⬜ Todo | 3          |
| 8.8  | Build mood trend chart                | P1       | ⬜ Todo | 3          |
| 8.9  | Create goals progress summary section | P0       | ⬜ Todo | 2          |
| 8.10 | Add mentor notes section              | P1       | ⬜ Todo | 2          |
| 8.11 | Implement print/export functionality  | P2       | ⬜ Todo | 2          |

---

## Sprint 9: Session Management (Week 9)

### Session Backend

| ID  | Task                                     | Priority | Status  | Est. Hours |
| --- | ---------------------------------------- | -------- | ------- | ---------- |
| 9.1 | Create `sessions.schedule` tRPC mutation | P0       | ⬜ Todo | 2          |
| 9.2 | Create `sessions.update` tRPC mutation   | P1       | ⬜ Todo | 1          |
| 9.3 | Create `sessions.getUpcoming` tRPC query | P0       | ⬜ Todo | 1          |
| 9.4 | Create `sessions.getHistory` tRPC query  | P1       | ⬜ Todo | 1          |
| 9.5 | Create `sessions.addNotes` tRPC mutation | P1       | ⬜ Todo | 1          |

### Session UI

| ID   | Task                            | Priority | Status  | Est. Hours |
| ---- | ------------------------------- | -------- | ------- | ---------- |
| 9.6  | Build session scheduling modal  | P0       | ⬜ Todo | 4          |
| 9.7  | Create session preparation view | P0       | ⬜ Todo | 4          |
| 9.8  | Build session notes interface   | P1       | ⬜ Todo | 3          |
| 9.9  | Create action items capture     | P1       | ⬜ Todo | 3          |
| 9.10 | Build session history list      | P1       | ⬜ Todo | 2          |

---

## Sprint 10: Polish & Launch (Week 10-11)

### UI Polish

| ID   | Task                                   | Priority | Status  | Est. Hours |
| ---- | -------------------------------------- | -------- | ------- | ---------- |
| 10.1 | Implement dark mode                    | P2       | ⬜ Todo | 4          |
| 10.2 | Add loading skeletons throughout       | P1       | ⬜ Todo | 3          |
| 10.3 | Create error boundary and error states | P1       | ⬜ Todo | 2          |
| 10.4 | Add empty states with helpful CTAs     | P1       | ⬜ Todo | 3          |
| 10.5 | Mobile responsive audit and fixes      | P0       | ⬜ Todo | 6          |
| 10.6 | Add micro-animations (Framer Motion)   | P2       | ⬜ Todo | 4          |

### Testing

| ID    | Task                                    | Priority | Status  | Est. Hours |
| ----- | --------------------------------------- | -------- | ------- | ---------- |
| 10.7  | Set up Vitest and React Testing Library | P1       | ⬜ Todo | 2          |
| 10.8  | Write tests for auth flows              | P1       | ⬜ Todo | 4          |
| 10.9  | Write tests for tRPC routers            | P1       | ⬜ Todo | 6          |
| 10.10 | E2E testing with Playwright             | P2       | ⬜ Todo | 8          |

### Deployment

| ID    | Task                                       | Priority | Status  | Est. Hours |
| ----- | ------------------------------------------ | -------- | ------- | ---------- |
| 10.11 | Set up Vercel project                      | P0       | ⬜ Todo | 1          |
| 10.12 | Configure production environment variables | P0       | ⬜ Todo | 1          |
| 10.13 | Set up production database                 | P0       | ⬜ Todo | 1          |
| 10.14 | Configure Sentry error tracking            | P1       | ⬜ Todo | 1          |
| 10.15 | Run production migration                   | P0       | ⬜ Todo | 0.5        |
| 10.16 | Deploy and verify                          | P0       | ⬜ Todo | 2          |

---

## Status Legend

- ⬜ Todo
- 🔄 In Progress
- ✅ Complete
- ⏸️ Blocked
- ❌ Cancelled

## Priority Legend

- P0: Must have for MVP
- P1: Should have
- P2: Nice to have
- P3: Future enhancement
