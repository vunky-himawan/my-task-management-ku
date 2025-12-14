import { CenteredContainer } from "@/shared/components/atoms/container/container";
import { Loading } from "@/shared/components/atoms/loading/loading";
import { useAuthCheckStore } from "@/shared/hooks/use-auth-check";
import { selectIsAuthenticated, useAuthStore } from "@/shared/stores/auth.store";
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect } from "react";

function RouteComponent() {
  const navigate = useNavigate();
  const isAuthenticated = useAuthStore(selectIsAuthenticated);
  const isLoading = useAuthCheckStore((s) => s.isLoading);

  useEffect(() => {
    useAuthCheckStore.init(() => isAuthenticated);
  }, [isAuthenticated]);

  useEffect(() => {
    if (!isLoading) {
      if (isAuthenticated) {
        navigate({ to: "/dashboard", replace: true });
      } else {
        navigate({ to: "/auth/sign-in", replace: true });
      }
    }
  }, [isLoading, isAuthenticated, navigate]);

  if (isLoading) {
    return (
      <CenteredContainer size="full" style={{ height: "100vh" }}>
        <Loading />
      </CenteredContainer>
    );
  }

  return null;
}

export const Route = createFileRoute("/")({
  component: RouteComponent,
});
