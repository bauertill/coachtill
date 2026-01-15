import { PrismaClient, Role, GoalStatus, MentorshipStatus } from "../generated/prisma";

const prisma = new PrismaClient();

async function main() {
  console.log("🌱 Seeding database...");

  // Clean existing data
  await prisma.notification.deleteMany();
  await prisma.mentorSession.deleteMany();
  await prisma.monthlySummary.deleteMany();
  await prisma.checkIn.deleteMany();
  await prisma.milestone.deleteMany();
  await prisma.goal.deleteMany();
  await prisma.mentorship.deleteMany();
  await prisma.profile.deleteMany();
  await prisma.session.deleteMany();
  await prisma.account.deleteMany();
  await prisma.user.deleteMany();

  // Create Mentor
  const mentor = await prisma.user.create({
    data: {
      email: "mentor@example.com",
      name: "Alex Thompson",
      role: Role.MENTOR,
      timezone: "America/New_York",
      emailVerified: new Date(),
      profile: {
        create: {
          bio: "Executive coach with 10+ years of experience helping professionals achieve their goals.",
          occupation: "Executive Coach",
          whyHere: "To help others unlock their potential through structured guidance and accountability.",
          preferences: { checkInReminder: "09:00", notificationsEnabled: true },
        },
      },
    },
  });
  console.log(`✅ Created mentor: ${mentor.name}`);

  // Create Students
  const student1 = await prisma.user.create({
    data: {
      email: "student1@example.com",
      name: "Jordan Lee",
      role: Role.STUDENT,
      timezone: "America/Los_Angeles",
      emailVerified: new Date(),
      profile: {
        create: {
          bio: "Software engineer looking to transition into engineering management.",
          occupation: "Senior Software Engineer",
          whyHere: "I want to develop my leadership skills and prepare for a management role.",
          preferences: { checkInReminder: "20:00", notificationsEnabled: true },
        },
      },
    },
  });

  const student2 = await prisma.user.create({
    data: {
      email: "student2@example.com",
      name: "Sam Rivera",
      role: Role.STUDENT,
      timezone: "America/Chicago",
      emailVerified: new Date(),
      profile: {
        create: {
          bio: "Marketing professional aiming to start my own business.",
          occupation: "Marketing Manager",
          whyHere: "Building the discipline and skills needed to launch my startup.",
          preferences: { checkInReminder: "21:00", notificationsEnabled: true },
        },
      },
    },
  });
  console.log(`✅ Created students: ${student1.name}, ${student2.name}`);

  // Create Mentorships
  const mentorship1 = await prisma.mentorship.create({
    data: {
      mentorId: mentor.id,
      studentId: student1.id,
      status: MentorshipStatus.ACTIVE,
      note: "Looking forward to helping you on your management journey!",
    },
  });

  const mentorship2 = await prisma.mentorship.create({
    data: {
      mentorId: mentor.id,
      studentId: student2.id,
      status: MentorshipStatus.ACTIVE,
      note: "Excited to support your entrepreneurial goals!",
    },
  });
  console.log(`✅ Created mentorships`);

  // Create Goals for Student 1
  const goal1 = await prisma.goal.create({
    data: {
      userId: student1.id,
      title: "Become an Engineering Manager",
      description: "Transition from IC to engineering management role within 12 months.",
      category: "Career",
      targetDate: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000),
      status: GoalStatus.ACTIVE,
      progress: 25,
      milestones: {
        create: [
          { title: "Complete management training course", order: 1, completed: true, completedAt: new Date() },
          { title: "Lead a cross-functional project", order: 2, completed: false },
          { title: "Mentor 2 junior engineers", order: 3, completed: false },
          { title: "Interview for management positions", order: 4, completed: false },
        ],
      },
    },
  });

  const goal2 = await prisma.goal.create({
    data: {
      userId: student1.id,
      title: "Improve Public Speaking",
      description: "Become confident presenting to large audiences.",
      category: "Personal",
      targetDate: new Date(Date.now() + 180 * 24 * 60 * 60 * 1000),
      status: GoalStatus.ACTIVE,
      progress: 40,
      milestones: {
        create: [
          { title: "Join Toastmasters", order: 1, completed: true, completedAt: new Date() },
          { title: "Give 5 speeches at club", order: 2, completed: true, completedAt: new Date() },
          { title: "Present at team all-hands", order: 3, completed: false },
          { title: "Speak at a tech meetup", order: 4, completed: false },
        ],
      },
    },
  });
  console.log(`✅ Created goals for ${student1.name}`);

  // Create Goals for Student 2
  const goal3 = await prisma.goal.create({
    data: {
      userId: student2.id,
      title: "Launch Side Business",
      description: "Start a marketing consultancy with first paying client.",
      category: "Career",
      targetDate: new Date(Date.now() + 200 * 24 * 60 * 60 * 1000),
      status: GoalStatus.ACTIVE,
      progress: 15,
      milestones: {
        create: [
          { title: "Define service offerings", order: 1, completed: true, completedAt: new Date() },
          { title: "Create website and branding", order: 2, completed: false },
          { title: "Reach out to 20 potential clients", order: 3, completed: false },
          { title: "Sign first paying client", order: 4, completed: false },
        ],
      },
    },
  });
  console.log(`✅ Created goals for ${student2.name}`);

  // Create Check-ins for Student 1 (last 7 days)
  const checkInDates = Array.from({ length: 7 }, (_, i) => {
    const date = new Date();
    date.setDate(date.getDate() - i);
    date.setHours(20, 0, 0, 0);
    return date;
  });

  for (const date of checkInDates) {
    await prisma.checkIn.create({
      data: {
        userId: student1.id,
        date,
        mood: Math.floor(Math.random() * 2) + 3, // 3-4
        energy: Math.floor(Math.random() * 2) + 3, // 3-4
        wins: "Made progress on my project. Had a good 1:1 with my manager.",
        challenges: "Struggled with prioritization. Too many meetings.",
        blockers: null,
        intentions: "Focus on deep work in the morning. Block calendar time.",
        gratitude: "Grateful for supportive team members.",
        summary: "Productive day with good progress. Main focus on improving time management.",
        goals: { connect: [{ id: goal1.id }] },
      },
    });
  }
  console.log(`✅ Created 7 check-ins for ${student1.name}`);

  // Create a Monthly Summary
  const periodStart = new Date();
  periodStart.setMonth(periodStart.getMonth() - 1);

  await prisma.monthlySummary.create({
    data: {
      mentorshipId: mentorship1.id,
      periodStart,
      periodEnd: new Date(),
      overview: "Jordan had a productive month with consistent progress toward the engineering management goal. Completed the management training course and has been actively mentoring junior engineers.",
      themes: [
        { theme: "Time Management", count: 5, examples: ["Too many meetings", "Need focus time"] },
        { theme: "Leadership Development", count: 4, examples: ["Mentoring juniors", "Leading project"] },
      ],
      wins: [
        { win: "Completed management training course", date: new Date().toISOString() },
        { win: "Started mentoring 2 junior engineers", date: new Date().toISOString() },
      ],
      challenges: [
        { challenge: "Balancing IC work with management preparation" },
        { challenge: "Finding time for deep work" },
      ],
      moodTrends: { average: 3.7, trend: "stable", weeklyAverages: [3.5, 3.8, 3.6, 3.9] },
      goalProgress: [
        { goalId: goal1.id, title: "Become an Engineering Manager", startProgress: 10, endProgress: 25 },
        { goalId: goal2.id, title: "Improve Public Speaking", startProgress: 20, endProgress: 40 },
      ],
      suggestions: [
        "Discuss strategies for managing time between IC and management prep",
        "Review progress on mentoring junior engineers",
        "Plan next steps for management interview preparation",
      ],
      checkInCount: 7,
    },
  });
  console.log(`✅ Created monthly summary`);

  // Create a scheduled mentor session
  const nextSession = new Date();
  nextSession.setDate(nextSession.getDate() + 7);
  nextSession.setHours(14, 0, 0, 0);

  await prisma.mentorSession.create({
    data: {
      mentorshipId: mentorship1.id,
      scheduledAt: nextSession,
      status: "SCHEDULED",
      agenda: "Review monthly progress\nDiscuss time management strategies\nPlan next milestones",
    },
  });
  console.log(`✅ Created upcoming mentor session`);

  // Create notifications
  await prisma.notification.createMany({
    data: [
      {
        userId: student1.id,
        type: "CHECK_IN_REMINDER",
        title: "Time for your daily check-in!",
        message: "Take a few minutes to reflect on your day and track your progress.",
        read: false,
      },
      {
        userId: student1.id,
        type: "SESSION_REMINDER",
        title: "Upcoming session with Alex",
        message: "You have a mentor session scheduled in 7 days.",
        read: false,
      },
      {
        userId: mentor.id,
        type: "SUMMARY_READY",
        title: "Monthly summary ready",
        message: "Jordan's monthly summary is ready for review before your next session.",
        read: false,
      },
    ],
  });
  console.log(`✅ Created notifications`);

  console.log("\n🎉 Seeding complete!");
  console.log(`
  Test accounts created:
  - Mentor: mentor@example.com
  - Student 1: student1@example.com
  - Student 2: student2@example.com
  `);
}

main()
  .catch((e) => {
    console.error("❌ Seeding failed:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
