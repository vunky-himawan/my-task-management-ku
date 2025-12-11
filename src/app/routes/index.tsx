import { Loading } from "@/shared/components/atoms/loading/loading";
import { createFileRoute } from "@tanstack/react-router";

function RouteComponent() {
  return (
    <div className="min-h-screen w-full bg-[#f8fafc] relative flex flex-col items-center justify-center">
      <h1>Ini Nanti Landing Page</h1>
      <Loading />
    </div>
  );
}

export const Route = createFileRoute("/")({
  component: RouteComponent,
});
