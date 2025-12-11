import { Card } from "@/shared/components/atoms/card/card";
import type { Task } from "../model/types";
import { Title } from "@/shared/components/atoms/typography/title/title";
import { Paragraph } from "@/shared/components/atoms/typography/paragraph/paragraph";
import styled, { useTheme } from "styled-components";
import { useState } from "react";
import { EditTaskForm } from "./edit-task-form";
import { Button } from "@/shared/components/atoms/button/button";
import { Flex } from "@/shared/components/atoms/display/flex/flex";
import { Pencil, Trash2 } from "lucide-react";
import { Toast } from "@/shared/utils/toast";
import { useTaskStore } from "../model/stores";
import { Checkbox } from "@/shared/components/atoms/checkbox/checkbox";

type TaskCardProps = {
  task: Task;
};

const TaskCardWrapper = styled.div`
  position: relative;
  transition: all 0.2s ease;
  border-radius: ${({ theme }) => theme.radius.md};

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }
`;

const TextWrapper = styled.div`
  flex: 1;
  min-width: 0;
  overflow-wrap: break-word;
  word-break: break-word;
  padding-right: ${({ theme }) => theme.spacing.sm};
`;

const EditButtonWrapper = styled.div`
  flex-shrink: 0;
`;

export const TaskCard = ({ task }: TaskCardProps) => {
  const theme = useTheme();
  const deleteTask = useTaskStore((state) => state.deleteTask);
  const toggleComplete = useTaskStore((state) => state.toggleComplete);
  const [isEditing, setIsEditing] = useState<boolean>(false);

  const handleDelete = async () => {
    if (window.confirm("Are you sure you want to delete this task?")) {
      const result = await deleteTask(task.id);

      if (result.success) {
        Toast.success(result.message);
      } else {
        Toast.error(result.message);
      }
    }
  };

  const handleToggleComplete = async (e: React.MouseEvent) => {
    e.stopPropagation();
    try {
      const result = await toggleComplete(task.id);

      if (result.success) {
        Toast.success(result.message);
      } else {
        Toast.error(result.message);
      }
    } catch (error) {
      console.error("Toggle complete error:", error);
      Toast.error("Failed to update task");
    }
  };

  if (isEditing) {
    return <EditTaskForm task={task} onCancel={() => setIsEditing(false)} />;
  }

  return (
    <TaskCardWrapper>
      <Card>
        <Flex direction="column" gap={theme.spacing.sm}>
          <Flex justifyContent="space-between" alignItems="flex-start">
            <Flex gap={theme.spacing.sm} alignItems="flex-start">
              <Checkbox completed={task.completed ?? false} onClick={handleToggleComplete} />
              <TextWrapper>
                <Title
                  level={5}
                  style={{
                    textDecoration: task.completed ? "line-through" : "none",
                    opacity: task.completed ? 0.6 : 1,
                    transition: "all 0.2s ease",
                  }}
                >
                  {task.title}
                </Title>
              </TextWrapper>
            </Flex>
            <EditButtonWrapper>
              <Flex gap={theme.spacing.xs}>
                <Button variant="ghost" size="sm" onClick={() => setIsEditing(true)}>
                  <Pencil size={20} color={theme.colors.primary} />
                </Button>
                <Button variant="ghost" size="sm" onClick={handleDelete}>
                  <Trash2 size={20} color={theme.colors.error} />
                </Button>
              </Flex>
            </EditButtonWrapper>
          </Flex>
          <TextWrapper>
            <Paragraph style={{ color: theme.colors.secondary }}>{task.description}</Paragraph>
          </TextWrapper>
        </Flex>
      </Card>
    </TaskCardWrapper>
  );
};
