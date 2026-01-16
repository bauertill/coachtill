import Link from "next/link";
import { auth, signOut } from "~/server/auth";
import { api } from "~/trpc/server";
import { Button } from "~/components/ui/button";

export default async function DashboardPage() {
  const session = await auth();
  const { role } = await api.user.getOnboardingStatus();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-background">
      {/* Decorative background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-40 -top-40 h-80 w-80 rounded-full bg-teal-500/10 blur-3xl" />
        <div className="absolute -bottom-40 -right-40 h-80 w-80 rounded-full bg-violet-500/10 blur-3xl" />
      </div>

      <div className="container relative z-10 flex flex-col items-center justify-center gap-8 px-4 py-16">
        {/* Logo */}
        <Link href="/" className="flex flex-col items-center gap-2">
          <h1 className="text-4xl font-bold tracking-tight">
            <span className="text-teal-600">Coach</span>
            <span className="text-amber-500">Till</span>
          </h1>
        </Link>

        <div className="text-center">
          <h2 className="text-2xl font-semibold">
            Welcome to your {role === "MENTOR" ? "Mentor" : "Student"} Dashboard
          </h2>
          <p className="mt-2 text-muted-foreground">
            Signed in as {session?.user.name ?? session?.user.email}
          </p>
        </div>

        <p className="text-muted-foreground">
          Dashboard features coming soon...
        </p>

        <form
          action={async () => {
            "use server";
            await signOut({ redirectTo: "/" });
          }}
        >
          <Button type="submit" variant="outline">
            Sign out
          </Button>
        </form>
      </div>
    </main>
  );
}
