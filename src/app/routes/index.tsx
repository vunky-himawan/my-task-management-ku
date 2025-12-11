import { createFileRoute } from "@tanstack/react-router";

function RouteComponent() {
  return (
    <div className="min-h-screen w-full bg-[#f8fafc] relative">
      <h1>Ini Nanti Landing Page</h1>
    </div>
  );
}

export const Route = createFileRoute("/")({
  component: RouteComponent,
});
