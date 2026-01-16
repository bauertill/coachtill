"use client";

import { useRouter } from "next/navigation";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { api } from "~/trpc/react";

interface OnboardingFormProps {
  userName: string;
}

export function OnboardingForm({ userName }: OnboardingFormProps) {
  const router = useRouter();
  const completeOnboarding = api.user.completeOnboarding.useMutation({
    onSuccess: () => {
      router.push("/dashboard");
      router.refresh();
    },
  });

  const handleRoleSelect = (role: "STUDENT" | "MENTOR") => {
    completeOnboarding.mutate({ role });
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-background">
      {/* Decorative background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-40 -top-40 h-80 w-80 rounded-full bg-teal-500/10 blur-3xl" />
        <div className="absolute -bottom-40 -right-40 h-80 w-80 rounded-full bg-violet-500/10 blur-3xl" />
      </div>

      <div className="container relative z-10 flex flex-col items-center justify-center gap-8 px-4 py-16">
        {/* Logo */}
        <h1 className="text-4xl font-bold tracking-tight">
          <span className="text-teal-600">Coach</span>
          <span className="text-amber-500">Till</span>
        </h1>

        {/* Welcome message */}
        <div className="text-center">
          <h2 className="text-2xl font-semibold">Welcome, {userName}!</h2>
          <p className="mt-2 text-muted-foreground">
            How would you like to use CoachTill?
          </p>
        </div>

        {/* Role selection cards */}
        <div className="grid w-full max-w-2xl grid-cols-1 gap-6 sm:grid-cols-2">
          {/* Student Card */}
          <button
            onClick={() => handleRoleSelect("STUDENT")}
            disabled={completeOnboarding.isPending}
            className="text-left"
          >
            <Card className="h-full cursor-pointer border-teal-200/50 bg-card/80 backdrop-blur-sm transition-all hover:border-teal-400 hover:shadow-lg dark:border-teal-800/50 dark:hover:border-teal-600">
              <CardHeader>
                <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-teal-100 dark:bg-teal-900/50">
                  <svg
                    className="h-6 w-6 text-teal-600 dark:text-teal-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                    />
                  </svg>
                </div>
                <CardTitle className="text-xl">I&apos;m here to grow</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Daily AI check-ins, goal tracking, and optional mentor
                  guidance to help you achieve your goals.
                </CardDescription>
              </CardContent>
            </Card>
          </button>

          {/* Mentor Card */}
          <button
            onClick={() => handleRoleSelect("MENTOR")}
            disabled={completeOnboarding.isPending}
            className="text-left"
          >
            <Card className="h-full cursor-pointer border-violet-200/50 bg-card/80 backdrop-blur-sm transition-all hover:border-violet-400 hover:shadow-lg dark:border-violet-800/50 dark:hover:border-violet-600">
              <CardHeader>
                <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-violet-100 dark:bg-violet-900/50">
                  <svg
                    className="h-6 w-6 text-violet-600 dark:text-violet-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  </svg>
                </div>
                <CardTitle className="text-xl">
                  I&apos;m here to guide
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Support your students with AI-generated monthly summaries and
                  focused 1:1 sessions.
                </CardDescription>
              </CardContent>
            </Card>
          </button>
        </div>

        {/* Loading state */}
        {completeOnboarding.isPending && (
          <p className="text-muted-foreground">Setting up your account...</p>
        )}
      </div>
    </main>
  );
}
