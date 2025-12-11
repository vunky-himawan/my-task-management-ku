import { Card } from "@/shared/components/atoms/card/card";
import type { Task } from "../model/types";
import { Title } from "@/shared/components/atoms/typography/title/title";
import { Paragraph } from "@/shared/components/atoms/typography/paragraph/paragraph";
import { useTheme } from "styled-components";

type TaskCardProps = {
  task: Task;
};

export const TaskCard = ({ task }: TaskCardProps) => {
  const theme = useTheme();

  return (
    <Card>
      <Title level={5}>{task.title}</Title>
      <Paragraph style={{ color: theme.colors.secondary }}>{task.description}</Paragraph>
    </Card>
  );
};
