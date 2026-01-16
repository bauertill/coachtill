import { redirect } from "next/navigation";
import { auth } from "~/server/auth";
import { api } from "~/trpc/server";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();

  if (!session) {
    redirect("/auth/signin");
  }

  const { needsOnboarding } = await api.user.getOnboardingStatus();

  if (needsOnboarding) {
    redirect("/onboarding");
  }

  return <>{children}</>;
}
