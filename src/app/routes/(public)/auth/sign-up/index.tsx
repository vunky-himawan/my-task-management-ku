import { SignUpForm } from "@/features/auth/ui/sign-up-form";
import { CenteredContainer } from "@/shared/components/atoms/container/container";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/(public)/auth/sign-up/")({
  component: SignUpPage,
});

function SignUpPage() {
  return (
    <CenteredContainer size="full" style={{ height: "100vh" }}>
      <SignUpForm />
    </CenteredContainer>
  );
}
