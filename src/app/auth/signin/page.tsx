import { redirect } from "next/navigation";
import Link from "next/link";
import { auth, signIn } from "~/server/auth";
import { Button } from "~/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "~/components/ui/card";
import { authConfig } from "~/server/auth/config";

export default async function SignInPage() {
  const session = await auth();

  if (session) {
    redirect("/");
  }

  const providers = authConfig.providers;

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

        {/* Sign In Card */}
        <Card className="w-full max-w-md border-border/50 bg-card/80 backdrop-blur-sm">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">Welcome back</CardTitle>
            <CardDescription>Sign in to continue your growth journey</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-4">
            {providers.length > 0 ? (
              providers.map((provider) => {
                const providerInfo = getProviderInfo(provider.id);
                return (
                  <form
                    key={provider.id}
                    action={async () => {
                      "use server";
                      await signIn(provider.id, { redirectTo: "/dashboard" });
                    }}
                  >
                    <Button type="submit" variant="outline" className="w-full gap-2" size="lg">
                      {providerInfo.icon}
                      Continue with {providerInfo.name}
                    </Button>
                  </form>
                );
              })
            ) : (
              <div className="flex flex-col items-center gap-4 py-4 text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-100 dark:bg-amber-900/50">
                  <svg
                    className="h-6 w-6 text-amber-600 dark:text-amber-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="font-medium text-foreground">No sign-in providers configured</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Add OAuth credentials to your environment variables to enable sign-in.
                  </p>
                </div>
                <div className="mt-2 rounded-lg bg-muted/50 p-4 text-left text-sm">
                  <p className="font-medium text-foreground">Required in .env:</p>
                  <code className="mt-2 block text-xs text-muted-foreground">
                    AUTH_GOOGLE_ID=&quot;...&quot;
                    <br />
                    AUTH_GOOGLE_SECRET=&quot;...&quot;
                  </code>
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Back link */}
        <Link href="/" className="text-sm text-muted-foreground hover:text-foreground">
          &larr; Back to home
        </Link>
      </div>
    </main>
  );
}

function getProviderInfo(providerId: string) {
  switch (providerId) {
    case "google":
      return {
        name: "Google",
        icon: (
          <svg className="h-5 w-5" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
            />
            <path
              fill="currentColor"
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
            />
            <path
              fill="currentColor"
              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
            />
            <path
              fill="currentColor"
              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
            />
          </svg>
        ),
      };
    case "discord":
      return {
        name: "Discord",
        icon: (
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
          </svg>
        ),
      };
    default:
      return {
        name: providerId.charAt(0).toUpperCase() + providerId.slice(1),
        icon: null,
      };
  }
}
