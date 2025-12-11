import { selectAllTasks, useTaskStore } from "@/features/task/model/stores";
import { AddTaskForm } from "@/features/task/ui/add-task-form";
import { TaskCard } from "@/features/task/ui/task-card";
import { Container } from "@/shared/components/atoms/container/container";
import { Flex } from "@/shared/components/atoms/display/flex/flex";
import { Title } from "@/shared/components/atoms/typography/title/title";
import { selectUser, useAuthStore } from "@/shared/stores/auth.store";
import { createFileRoute } from "@tanstack/react-router";
import { useMemo } from "react";
import { useTheme } from "styled-components";

export const Route = createFileRoute("/(authenticated)/dashboard/")({
  component: RouteComponent,
});

function RouteComponent() {
  const currentUser = useAuthStore(selectUser);
  const tasks = useTaskStore(selectAllTasks);

  const userTasks = useMemo(() => {
    if (!currentUser) return [];
    return tasks.filter((task) => task.userId === currentUser.id);
  }, [tasks, currentUser]);

  const theme = useTheme();

  return (
    <Container size="sm">
      <Flex direction="column">
        <AddTaskForm />

        {/* <TaskCard task={...} /> */}
        <div
          style={{
            marginTop: theme.spacing.md,
          }}
        >
          <Title level={4}>Your Tasks</Title>
          {userTasks.length === 0 ? (
            <p>No tasks available. Add a new task to get started!</p>
          ) : (
            <Flex
              direction="column"
              gap={theme.spacing.sm}
              style={{
                marginTop: theme.spacing.sm,
                overflowY: "scroll",
                maxHeight: "70vh",
                paddingBottom: theme.spacing.md,
              }}
            >
              {userTasks.map((task) => (
                <TaskCard key={task.id} task={task} />
              ))}
            </Flex>
          )}
        </div>
      </Flex>
    </Container>
  );
}
