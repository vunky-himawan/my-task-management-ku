import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/(public)/auth/sign-up/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="flex items-center justify-center h-full">
      Sign Up Feature is under construction
    </div>
  );
}
