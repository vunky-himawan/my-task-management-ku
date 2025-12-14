import { SignInForm } from "@/features/auth/ui/sign-in-form";
import { CenteredContainer } from "@/shared/components/atoms/container/container";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/(public)/auth/sign-in/")({
  component: SignInPage,
});

function SignInPage() {
  return (
    <CenteredContainer size="full" style={{ height: "100vh" }}>
      <SignInForm />
    </CenteredContainer>
  );
}
