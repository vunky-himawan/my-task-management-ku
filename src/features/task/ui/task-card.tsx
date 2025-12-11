import { Card } from "@/shared/components/atoms/card/card";
import type { Task } from "../model/types";
import { Title } from "@/shared/components/atoms/typography/title/title";
import { Paragraph } from "@/shared/components/atoms/typography/paragraph/paragraph";
import styled, { useTheme } from "styled-components";
import { useState } from "react";
import { EditTaskForm } from "./edit-task-form";
import { Button } from "@/shared/components/atoms/button/button";
import { Flex } from "@/shared/components/atoms/display/flex/flex";
import { Pencil } from "lucide-react";

type TaskCardProps = {
  task: Task;
};

const TaskCardWrapper = styled.div`
  position: relative;
  transition: all 0.2s ease;

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
  const [isEditing, setIsEditing] = useState<boolean>(false);

  if (isEditing) {
    return <EditTaskForm task={task} onCancel={() => setIsEditing(false)} />;
  }

  return (
    <TaskCardWrapper>
      <Card>
        <Flex direction="column" gap={theme.spacing.sm}>
          <Flex justifyContent="space-between" alignItems="flex-start">
            <TextWrapper>
              <Title level={5}>{task.title}</Title>
            </TextWrapper>
            <EditButtonWrapper>
              <Button variant="ghost" size="sm" onClick={() => setIsEditing(true)}>
                <Pencil size={20} />
              </Button>
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
