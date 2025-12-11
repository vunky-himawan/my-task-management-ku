import { useNavigate } from "@tanstack/react-router";
import { selectIsAuthenticated, useAuthStore } from "../stores/auth.store";
import { useAuthCheckStore } from "../hooks/use-auth-check";
import { CenteredContainer } from "../components/atoms/container/container";
import { Loading } from "../components/atoms/loading/loading";
import { useEffect } from "react";

export const AuthenticatedLayout = ({ children }: { children: React.ReactNode }) => {
  const navigate = useNavigate();
  const isAuthenticated = useAuthStore(selectIsAuthenticated);
  const isLoading = useAuthCheckStore((s) => s.isLoading);

  useEffect(() => {
    useAuthCheckStore.init(() => isAuthenticated);
  }, [isAuthenticated]);

  useEffect(() => {
    if (!isLoading) {
      if (!isAuthenticated) {
        navigate({ to: "/auth/sign-in", replace: true });
      }
    }
  }, [isLoading, isAuthenticated, navigate]);

  if (isLoading)
    return (
      <CenteredContainer size="full" style={{ height: "100vh" }}>
        <Loading />
      </CenteredContainer>
    );

  return <>{children}</>;
};
