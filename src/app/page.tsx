import Link from "next/link";

import { Button } from "~/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "~/components/ui/card";
import { auth } from "~/server/auth";

export default async function Home() {
  const session = await auth();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-background">
      {/* Decorative background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-40 -top-40 h-80 w-80 rounded-full bg-teal-500/10 blur-3xl" />
        <div className="absolute -bottom-40 -right-40 h-80 w-80 rounded-full bg-violet-500/10 blur-3xl" />
        <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber-500/5 blur-3xl" />
      </div>

      <div className="container relative z-10 flex flex-col items-center justify-center gap-12 px-4 py-16">
        {/* Logo & Tagline */}
        <div className="flex flex-col items-center gap-4 text-center">
          <h1 className="text-5xl font-bold tracking-tight text-foreground sm:text-6xl">
            <span className="text-teal-600">Coach</span>
            <span className="text-amber-500">Till</span>
          </h1>
          <p className="max-w-md text-lg text-muted-foreground">
            AI-powered daily check-ins that help you achieve your goals, with guidance from your
            personal mentor.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid w-full max-w-4xl grid-cols-1 gap-6 sm:grid-cols-3">
          <Card className="border-teal-200/50 bg-card/80 backdrop-blur-sm dark:border-teal-800/50">
            <CardHeader className="pb-3">
              <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-teal-100 dark:bg-teal-900/50">
                <svg
                  className="h-5 w-5 text-teal-600 dark:text-teal-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <CardTitle className="text-lg">Daily Check-ins</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                5-minute AI conversations to track progress, celebrate wins, and stay accountable.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="border-amber-200/50 bg-card/80 backdrop-blur-sm dark:border-amber-800/50">
            <CardHeader className="pb-3">
              <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-amber-100 dark:bg-amber-900/50">
                <svg
                  className="h-5 w-5 text-amber-600 dark:text-amber-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <CardTitle className="text-lg">Goal Tracking</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Set meaningful goals, break them into milestones, and watch your progress grow.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="border-violet-200/50 bg-card/80 backdrop-blur-sm dark:border-violet-800/50">
            <CardHeader className="pb-3">
              <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-violet-100 dark:bg-violet-900/50">
                <svg
                  className="h-5 w-5 text-violet-600 dark:text-violet-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <CardTitle className="text-lg">Mentor Sessions</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Monthly 1:1 sessions with AI-generated summaries to maximize your time together.
              </CardDescription>
            </CardContent>
          </Card>
        </div>

        {/* Auth Section */}
        <div className="flex flex-col items-center gap-4">
          {session ? (
            <>
              <p className="text-muted-foreground">
                Welcome back, <span className="font-medium text-foreground">{session.user.name}</span>
              </p>
              <div className="flex gap-3">
                <Button asChild>
                  <Link href="/dashboard">Go to Dashboard</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/api/auth/signout">Sign out</Link>
                </Button>
              </div>
            </>
          ) : (
            <>
              <p className="text-muted-foreground">Ready to start your growth journey?</p>
              <Button size="lg" asChild>
                <Link href="/api/auth/signin">Get Started</Link>
              </Button>
            </>
          )}
        </div>
      </div>
    </main>
  );
}
