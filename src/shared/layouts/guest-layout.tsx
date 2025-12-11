import { type FC, type PropsWithChildren } from "react";
import { useNavigate } from "@tanstack/react-router";
import { selectIsAuthenticated, useAuthStore } from "../stores/auth.store";
import { useAuthCheckStore } from "../hooks/use-auth-check";
import { CenteredContainer } from "../components/atoms/container/container";
import { Loading } from "../components/atoms/loading/loading";

export const GuestLayout: FC<PropsWithChildren> = ({ children }) => {
  const navigate = useNavigate();
  const isAuthenticated = useAuthStore(selectIsAuthenticated);

  useAuthCheckStore.init(() => isAuthenticated);

  const isLoading = useAuthCheckStore((s) => s.isLoading);

  if (isLoading)
    return (
      <CenteredContainer size="full" style={{ height: "100vh" }}>
        <Loading />
      </CenteredContainer>
    );
  if (isAuthenticated) {
    navigate({ to: "/dashboard" });
    return null;
  }

  return <>{children}</>;
};
