import { SignInForm } from "@/features/sign-in/ui/sign-in-form";
import { CenteredContainer } from "@/shared/components/atoms/container/container";

export const SignInPage = () => {
  return (
    <CenteredContainer size="full" style={{ height: "100vh" }}>
      <SignInForm />
    </CenteredContainer>
  );
};
