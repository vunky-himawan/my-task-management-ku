import { Outlet, createRootRoute, useNavigate } from "@tanstack/react-router";
import { ErrorBoundary } from "../error/ui/error-boundary";
import { useErrorStore } from "@/app/error/store/error.store";
import { errorHandler } from "../error/model/handler";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  const navigate = useNavigate();
  const { error, clearError } = useErrorStore();

  const errorData = error ? errorHandler(error) : null;

  const resetAndRedirect = async () => {
    await navigate({ to: "/" });
    clearError();
    return null;
  };

  return (
    <ErrorBoundary error={error} message={errorData?.message} onReset={resetAndRedirect}>
      <Outlet />
    </ErrorBoundary>
  );
}
