import { redirect } from "next/navigation";
import { auth } from "~/server/auth";
import { api } from "~/trpc/server";
import { OnboardingForm } from "./onboarding-form";

export default async function OnboardingPage() {
  const session = await auth();

  if (!session) {
    redirect("/auth/signin");
  }

  const { needsOnboarding } = await api.user.getOnboardingStatus();

  if (!needsOnboarding) {
    redirect("/dashboard");
  }

  return <OnboardingForm userName={session.user.name ?? "there"} />;
}
