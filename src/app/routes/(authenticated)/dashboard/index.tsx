import { AddTaskForm } from "@/features/task/ui/add-task-form";
import { Container } from "@/shared/components/atoms/container/container";
import { Flex } from "@/shared/components/atoms/display/flex/flex";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/(authenticated)/dashboard/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <Container size="sm">
      <Flex direction="column">
        <AddTaskForm />
      </Flex>
    </Container>
  );
}
