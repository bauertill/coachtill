# CoachTill - AI Coaching App Roadmap

## Overview

An AI-powered coaching platform connecting Mentors with Students through daily AI check-ins and monthly mentor sessions.

**Tech Stack:** T3 Stack (Next.js, TypeScript, tRPC, Prisma, Tailwind CSS, NextAuth.js)

---

## Epic 1: Project Foundation & Infrastructure

_Estimated: 1 week_

### 1.1 Project Setup

- [x] Initialize T3 app with `create-t3-app`
- [x] Configure TypeScript strict mode
- [x] Set up ESLint and Prettier
- [x] Configure Tailwind with custom theme (colors, typography) + shadcn/ui
- [x] Set up environment variables structure

### 1.2 Vercel Infrastructure & Database

- [x] Design complete database schema (Prisma)
- [x] Create seed script with test data
- [x] Configure Sentry error tracking
- [x] Set up GitHub Actions CI (lint, typecheck, build)
- [ ] Deploy to Vercel
- [ ] Create Vercel Postgres database (Neon-powered)
- [ ] Configure environment variables in Vercel
- [ ] Run initial database migration
- [ ] Connect custom domain (optional)

---

## Epic 2: Authentication & User Management

_Estimated: 1 week_

### 2.1 Authentication System

- [ ] Configure NextAuth.js with providers (Google, Email magic link)
- [ ] Implement role-based access (Mentor vs Student)
- [ ] Create sign-up flow with role selection
- [ ] Build login page with beautiful UI
- [ ] Implement session management
- [ ] Add protected route middleware

### 2.2 User Profiles

- [ ] Create user profile schema
- [ ] Build profile setup wizard (onboarding)
- [ ] Implement profile edit functionality
- [ ] Add avatar upload (using uploadthing or similar)
- [ ] Create timezone selection for scheduling

### 2.3 Mentor-Student Relationships

- [ ] Design invitation/pairing system
- [ ] Build mentor invitation flow (email invite)
- [ ] Create student acceptance flow
- [ ] Implement relationship management UI
- [ ] Add ability to view paired users

---

## Epic 3: Goal Management System

_Estimated: 1.5 weeks_

### 3.1 Goal Creation

- [ ] Design goal data model (title, description, target date, milestones)
- [ ] Build goal creation form with rich editor
- [ ] Implement goal categories/tags
- [ ] Add SMART goal guidance prompts
- [ ] Create goal templates for common objectives

### 3.2 Goal Dashboard

- [ ] Build student goals dashboard
- [ ] Create goal cards with progress indicators
- [ ] Implement goal filtering and sorting
- [ ] Add goal status management (active, paused, completed)
- [ ] Build goal detail view

### 3.3 Milestones & Progress

- [ ] Implement milestone sub-goals
- [ ] Create progress tracking system
- [ ] Build visual progress indicators (charts, streaks)
- [ ] Add milestone completion celebrations
- [ ] Implement goal editing and updates

### 3.4 Goal Sharing with Mentor

- [ ] Build mentor view of student goals
- [ ] Create goal visibility settings
- [ ] Implement goal comments/notes from mentor
- [ ] Add goal approval workflow (optional)

---

## Epic 4: Daily AI Check-ins

_Estimated: 2 weeks_

### 4.1 AI Integration Setup

- [ ] Set up OpenAI API integration
- [ ] Create AI service layer with error handling
- [ ] Implement conversation context management
- [ ] Design prompt engineering for coaching style
- [ ] Add rate limiting and cost tracking

### 4.2 Check-in Flow

- [ ] Design check-in data model (mood, progress, blockers, reflections)
- [ ] Build check-in initiation trigger (push notification, email, in-app)
- [ ] Create conversational check-in interface
- [ ] Implement structured questions based on goals
- [ ] Add mood/energy tracking component

### 4.3 AI Conversation Engine

- [ ] Build chat UI for AI check-ins
- [ ] Implement streaming responses
- [ ] Create context injection (goals, previous check-ins)
- [ ] Add follow-up question logic
- [ ] Implement encouragement and accountability prompts
- [ ] Build check-in summary generation

### 4.4 Check-in History

- [ ] Create check-in history view
- [ ] Build calendar view of check-ins
- [ ] Implement check-in search and filtering
- [ ] Add streak tracking and gamification
- [ ] Create missed check-in handling

### 4.5 Notifications & Reminders

- [ ] Implement daily check-in reminders
- [ ] Create customizable reminder schedules
- [ ] Build push notification system
- [ ] Add email reminder fallback
- [ ] Implement smart timing based on user behavior

---

## Epic 5: Mentor Dashboard & Insights

_Estimated: 1.5 weeks_

### 5.1 Mentor Home Dashboard

- [ ] Build mentor overview dashboard
- [ ] Create list of paired students
- [ ] Add quick stats per student
- [ ] Implement student status indicators
- [ ] Build attention-needed alerts

### 5.2 Student Progress View

- [ ] Create detailed student view for mentors
- [ ] Build goal progress overview
- [ ] Display check-in frequency and consistency
- [ ] Add trend indicators (improving, struggling)
- [ ] Create engagement metrics

### 5.3 AI-Generated Summaries

- [ ] Design monthly summary data model
- [ ] Implement AI summary generation from check-ins
- [ ] Create key themes extraction
- [ ] Build progress highlights section
- [ ] Generate suggested discussion topics
- [ ] Add blocker/challenge patterns identification
- [ ] Create mood/sentiment analysis visualization

### 5.4 Summary Presentation

- [ ] Build summary report view
- [ ] Create printable/shareable format
- [ ] Add mentor notes section
- [ ] Implement summary comparison (month over month)
- [ ] Create visual data representations

---

## Epic 6: Monthly Session Management

_Estimated: 1 week_

### 6.1 Session Scheduling

- [ ] Build calendar integration (Google Calendar)
- [ ] Create session booking flow
- [ ] Implement availability management
- [ ] Add session reminders
- [ ] Build reschedule/cancel functionality

### 6.2 Session Preparation

- [ ] Create pre-session summary view
- [ ] Build session agenda template
- [ ] Add mentor preparation notes
- [ ] Implement student pre-session reflection prompt
- [ ] Create previous session context view

### 6.3 During Session Tools

- [ ] Build session note-taking interface
- [ ] Create real-time summary reference panel
- [ ] Add action item capture
- [ ] Implement goal updates during session
- [ ] Build new goal creation flow

### 6.4 Post-Session

- [ ] Create session summary storage
- [ ] Build action item tracking
- [ ] Implement follow-up reminders
- [ ] Add session history view
- [ ] Create session effectiveness tracking

---

## Epic 7: Analytics & Reporting

_Estimated: 1 week_

### 7.1 Student Analytics

- [ ] Build personal analytics dashboard
- [ ] Create goal completion rate metrics
- [ ] Add check-in consistency charts
- [ ] Implement mood trends visualization
- [ ] Build streak and milestone achievements

### 7.2 Mentor Analytics

- [ ] Create mentor analytics overview
- [ ] Build student engagement comparisons
- [ ] Add coaching effectiveness metrics
- [ ] Implement time tracking
- [ ] Create export functionality

### 7.3 Platform Insights (Admin)

- [ ] Build admin dashboard
- [ ] Create platform usage metrics
- [ ] Add AI usage and cost tracking
- [ ] Implement user growth analytics
- [ ] Build system health monitoring

---

## Epic 8: Polish & User Experience

_Estimated: 1 week_

### 8.1 UI/UX Refinement

- [ ] Implement dark/light mode
- [ ] Create loading states and skeletons
- [ ] Add micro-interactions and animations
- [ ] Build empty states with helpful prompts
- [ ] Optimize mobile responsive design

### 8.2 Onboarding Experience

- [ ] Create student onboarding tour
- [ ] Build mentor onboarding flow
- [ ] Add contextual help tooltips
- [ ] Implement first-goal guidance
- [ ] Create first check-in celebration

### 8.3 Accessibility & Performance

- [ ] Audit and fix accessibility issues
- [ ] Optimize Core Web Vitals
- [ ] Implement lazy loading
- [ ] Add offline support for check-ins
- [ ] Optimize AI response times

---

## Epic 9: Launch Preparation

_Estimated: 1 week_

### 9.1 Testing & QA

- [ ] Write unit tests for critical paths
- [ ] Implement integration tests
- [ ] Conduct user acceptance testing
- [ ] Perform security audit
- [ ] Load testing for AI endpoints

### 9.2 Documentation

- [ ] Create user documentation
- [ ] Build FAQ section
- [ ] Write API documentation
- [ ] Create admin guides
- [ ] Document deployment process

### 9.3 Deployment

- [ ] Set up production environment (Vercel)
- [ ] Configure production database
- [ ] Set up monitoring and alerts
- [ ] Implement backup strategy
- [ ] Create rollback procedures

### 9.4 Launch

- [ ] Beta user onboarding
- [ ] Collect and address feedback
- [ ] Soft launch
- [ ] Monitor for issues
- [ ] Public launch

---

## Database Schema (Prisma)

```prisma
// User & Authentication
model User {
  id            String    @id @default(cuid())
  name          String?
  email         String    @unique
  emailVerified DateTime?
  image         String?
  role          Role      @default(STUDENT)
  timezone      String    @default("UTC")
  createdAt     DateTime  @default(now())
  updatedAt     DateTime  @updatedAt

  // Relations
  accounts      Account[]
  sessions      Session[]

  // As Student
  goals         Goal[]
  checkIns      CheckIn[]
  mentorships   Mentorship[] @relation("StudentMentorships")

  // As Mentor
  students      Mentorship[] @relation("MentorMentorships")

  profile       Profile?
}

enum Role {
  STUDENT
  MENTOR
  ADMIN
}

model Profile {
  id          String   @id @default(cuid())
  userId      String   @unique
  user        User     @relation(fields: [userId], references: [id], onDelete: Cascade)
  bio         String?
  occupation  String?
  goals       String?  // Why they're here
  preferences Json?    // Check-in time preferences, etc.
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt
}

// Mentor-Student Relationship
model Mentorship {
  id        String           @id @default(cuid())
  mentorId  String
  studentId String
  status    MentorshipStatus @default(PENDING)
  createdAt DateTime         @default(now())
  updatedAt DateTime         @updatedAt

  mentor    User @relation("MentorMentorships", fields: [mentorId], references: [id])
  student   User @relation("StudentMentorships", fields: [studentId], references: [id])

  sessions  Session[]
  summaries MonthlySummary[]

  @@unique([mentorId, studentId])
}

enum MentorshipStatus {
  PENDING
  ACTIVE
  PAUSED
  ENDED
}

// Goals
model Goal {
  id          String     @id @default(cuid())
  userId      String
  user        User       @relation(fields: [userId], references: [id], onDelete: Cascade)
  title       String
  description String?
  category    String?
  targetDate  DateTime?
  status      GoalStatus @default(ACTIVE)
  progress    Int        @default(0) // 0-100
  createdAt   DateTime   @default(now())
  updatedAt   DateTime   @updatedAt

  milestones  Milestone[]
  checkIns    CheckIn[]
}

enum GoalStatus {
  ACTIVE
  PAUSED
  COMPLETED
  ABANDONED
}

model Milestone {
  id          String    @id @default(cuid())
  goalId      String
  goal        Goal      @relation(fields: [goalId], references: [id], onDelete: Cascade)
  title       String
  completed   Boolean   @default(false)
  completedAt DateTime?
  order       Int
  createdAt   DateTime  @default(now())
  updatedAt   DateTime  @updatedAt
}

// Daily Check-ins
model CheckIn {
  id           String   @id @default(cuid())
  userId       String
  user         User     @relation(fields: [userId], references: [id], onDelete: Cascade)
  date         DateTime @default(now())
  mood         Int?     // 1-5 scale
  energy       Int?     // 1-5 scale

  // Structured responses
  wins         String?  // What went well
  challenges   String?  // What was difficult
  blockers     String?  // What's blocking progress
  intentions   String?  // Tomorrow's intentions

  // AI Conversation
  conversation Json?    // Full conversation history
  summary      String?  // AI-generated summary

  // Related goals discussed
  goals        Goal[]

  createdAt    DateTime @default(now())
  updatedAt    DateTime @updatedAt

  @@unique([userId, date])
}

// Monthly Sessions
model MentorSession {
  id           String     @id @default(cuid())
  mentorshipId String
  mentorship   Mentorship @relation(fields: [mentorshipId], references: [id])

  scheduledAt  DateTime
  completedAt  DateTime?
  status       SessionStatus @default(SCHEDULED)

  // Session content
  agenda       String?
  notes        String?
  actionItems  Json?      // Array of action items

  // Pre-session
  summaryId    String?
  summary      MonthlySummary? @relation(fields: [summaryId], references: [id])

  createdAt    DateTime   @default(now())
  updatedAt    DateTime   @updatedAt
}

enum SessionStatus {
  SCHEDULED
  IN_PROGRESS
  COMPLETED
  CANCELLED
}

// AI-Generated Monthly Summaries
model MonthlySummary {
  id            String     @id @default(cuid())
  mentorshipId  String
  mentorship    Mentorship @relation(fields: [mentorshipId], references: [id])

  periodStart   DateTime
  periodEnd     DateTime

  // AI-generated content
  overview      String     // High-level summary
  themes        Json       // Key themes identified
  wins          Json       // Accomplishments
  challenges    Json       // Struggles and blockers
  moodTrends    Json       // Mood/energy analysis
  goalProgress  Json       // Progress on each goal
  suggestions   Json       // Discussion topics for mentor

  // Metadata
  checkInCount  Int
  generatedAt   DateTime   @default(now())

  sessions      MentorSession[]

  createdAt     DateTime   @default(now())
  updatedAt     DateTime   @updatedAt
}

// Notifications
model Notification {
  id        String           @id @default(cuid())
  userId    String
  type      NotificationType
  title     String
  message   String
  read      Boolean          @default(false)
  actionUrl String?
  createdAt DateTime         @default(now())
}

enum NotificationType {
  CHECK_IN_REMINDER
  SESSION_REMINDER
  MENTOR_MESSAGE
  GOAL_MILESTONE
  STREAK_ACHIEVEMENT
}
```

---

## Priority Matrix

### Must Have (MVP)

1. User authentication with role selection
2. Basic goal creation and tracking
3. Daily AI check-in flow
4. Mentor-student pairing
5. Monthly summary generation
6. Basic session scheduling

### Should Have (v1.1)

1. Advanced analytics
2. Push notifications
3. Calendar integration
4. Milestone tracking
5. Streaks and gamification

### Nice to Have (v1.2+)

1. Mobile app (React Native)
2. Video session integration
3. Group coaching
4. Goal templates library
5. Community features

---

## Timeline Overview

| Phase | Epic                 | Duration   |
| ----- | -------------------- | ---------- |
| 1     | Foundation & Auth    | Week 1-2   |
| 2     | Goals & Check-ins    | Week 3-5   |
| 3     | Mentor Features      | Week 6-7   |
| 4     | Sessions & Analytics | Week 8-9   |
| 5     | Polish & Launch      | Week 10-11 |

**Total Estimated Timeline: 10-12 weeks to MVP**

---

## Next Steps

1. [x] Review and finalize this roadmap
2. [x] Set up the T3 project
3. [x] Design database schema
4. [ ] Deploy to Vercel and create database
5. [ ] Complete Epic 2 (Authentication)

---

_Last Updated: January 15, 2026_
