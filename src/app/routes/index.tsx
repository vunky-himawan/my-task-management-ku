import { CenteredContainer } from "@/shared/components/atoms/container/container";
import { Loading } from "@/shared/components/atoms/loading/loading";
import { useAuthCheckStore } from "@/shared/hooks/use-auth-check";
import { selectIsAuthenticated, useAuthStore } from "@/shared/stores/auth.store";
import { createFileRoute, useNavigate } from "@tanstack/react-router";

function RouteComponent() {
  const navigate = useNavigate();
  const isAuthenticated = useAuthStore(selectIsAuthenticated);

  useAuthCheckStore.init(() => isAuthenticated);

  const isLoading = useAuthCheckStore((s) => s.isLoading);

  if (isLoading) {
    return (
      <CenteredContainer size="full" style={{ height: "100vh" }}>
        <Loading />
      </CenteredContainer>
    );
  }

  if (isAuthenticated) {
    navigate({ to: "/dashboard" });
  } else {
    navigate({ to: "/auth/sign-in" });
  }

  return null;
}

export const Route = createFileRoute("/")({
  component: RouteComponent,
});
