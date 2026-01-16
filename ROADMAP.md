# CoachTill Roadmap

## Completed

- [x] T3 project setup with TypeScript, ESLint, Prettier, Tailwind + shadcn/ui
- [x] Database schema designed in Prisma
- [x] Seed script with test data
- [x] GitHub Actions CI (lint, typecheck, build)
- [x] Sentry error tracking configured
- [x] Google OAuth provider added
- [x] Custom sign-in page

---

## Phase 1: Deploy & Auth

### 1. Deploy to Vercel

- [x] Deploy app to Vercel
- [x] Create Vercel Postgres database
- [x] Set environment variables in Vercel
- [x] Run initial database migration

### 2. Complete sign-up flow

- [ ] Add role selection (Mentor/Student) after first OAuth sign-in
- [ ] Create onboarding page that collects role and saves to user record

### 3. Add protected route middleware

- [ ] Create middleware to redirect unauthenticated users to sign-in
- [ ] Redirect users without role to onboarding page

### 4. Build profile setup page

- [ ] Create `/profile/setup` page with form (bio, occupation, timezone)
- [ ] Add tRPC mutation to save profile data

---

## Phase 2: Core Features

### 5. Create student dashboard shell

- [ ] Build `/dashboard` page layout with sidebar navigation
- [ ] Show user info and empty states for goals/check-ins

### 6. Build goal creation form

- [ ] Create `/goals/new` page with form (title, description, category, target date)
- [ ] Add tRPC router for goal CRUD operations

### 7. Build goals list page

- [ ] Create `/goals` page showing user's goals as cards
- [ ] Add goal status badges and progress indicators

### 8. Build goal detail page

- [ ] Create `/goals/[id]` page with goal info and milestones
- [ ] Add ability to edit goal and mark milestones complete

### 9. Set up OpenAI integration

- [ ] Add OpenAI SDK and environment variables
- [ ] Create AI service with basic chat completion helper

### 10. Build daily check-in page

- [ ] Create `/checkin` page with mood/energy selectors
- [ ] Add text inputs for wins, challenges, blockers, intentions
- [ ] Save check-in via tRPC mutation

### 11. Add AI to check-in flow

- [ ] After saving check-in, call AI for personalized response
- [ ] Display AI encouragement/suggestions on check-in completion

### 12. Build check-in history page

- [ ] Create `/checkins` page with list of past check-ins
- [ ] Show mood trends and streak count

---

## Phase 3: Mentor Features

### 13. Build mentor invitation system

- [ ] Create invite code generation for mentors
- [ ] Build `/invite/[code]` page for students to accept

### 14. Build mentor dashboard

- [ ] Create `/mentor` page showing paired students
- [ ] Display each student's recent check-in status and goal count

### 15. Build mentor student detail view

- [ ] Create `/mentor/student/[id]` page
- [ ] Show student's goals, recent check-ins, and trends

### 16. Generate monthly AI summary

- [ ] Create tRPC procedure to aggregate month's check-ins
- [ ] Call AI to generate themes, wins, challenges summary
- [ ] Store in MonthlySummary table

### 17. Build monthly summary view

- [ ] Create `/mentor/student/[id]/summary/[month]` page
- [ ] Display AI-generated insights in readable format

---

## Phase 4: Sessions & Polish

### 18. Build session scheduling

- [ ] Create `/sessions/new` page to schedule mentor session
- [ ] Store session in MentorSession table with date/time

### 19. Build session notes page

- [ ] Create `/sessions/[id]` page for taking notes during session
- [ ] Add action items capture with checkbox list

### 20. Add notification system

- [ ] Create Notification tRPC router
- [ ] Add notification bell to header with unread count
- [ ] Build notifications dropdown/page

### 21. Add dark mode toggle

- [ ] Implement theme toggle in header
- [ ] Persist preference in localStorage

### 22. Mobile responsive pass

- [ ] Audit all pages on mobile viewport
- [ ] Fix layout issues and touch targets

---

## Future (Post-MVP)

- Push notifications / email reminders
- Google Calendar integration
- Advanced analytics dashboard
- Streak achievements and gamification
- Mobile app (React Native)
