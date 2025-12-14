import { Card } from "@/shared/components/atoms/card/card";
import type { Task } from "../model/types";
import styled, { keyframes, useTheme } from "styled-components";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { UpdateTaskSchema, type UpdateTaskInput } from "../model/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTaskStore } from "../model/stores";
import { Toast } from "@/shared/utils/toast";
import { FormField } from "@/shared/components/molecules/form-field/form-field";
import { Input } from "@/shared/components/atoms/input/input";
import { TextArea } from "@/shared/components/atoms/textarea/textarea";
import { Flex } from "@/shared/components/atoms/display/flex/flex";
import { Button } from "@/shared/components/atoms/button/button";

type EditTaskFormProps = {
  task: Task;
  onCancel: () => void;
};

const slideDown = keyframes`
  from {
    opacity: 0;
    transform: translateY(-10px);
    max-height: 0;
  }
  to {
    opacity: 1;
    transform: translateY(0);
    max-height: 300px;
  }
`;

const slideUp = keyframes`
  from {
    opacity: 1;
    transform: translateY(0);
    max-height: 300px;
  }
  to {
    opacity: 0;
    transform: translateY(-10px);
    max-height: 0;
  }
`;

const AnimatedFieldWrapper = styled.div<{ $isClosing: boolean }>`
  animation: ${({ $isClosing }) => ($isClosing ? slideUp : slideDown)} 0.3s ease-out forwards;
  overflow: hidden;
`;

export const EditTaskForm = ({ task, onCancel }: EditTaskFormProps) => {
  const theme = useTheme();
  const updateTask = useTaskStore((state) => state.updateTask);
  const [isClosing, setIsClosing] = useState<boolean>(false);

  const form = useForm<UpdateTaskInput>({
    resolver: zodResolver(UpdateTaskSchema),
    defaultValues: {
      title: task.title,
      description: task.description || "",
    },
    mode: "onSubmit",
  });

  const onSubmit = async (data: UpdateTaskInput) => {
    const result = await updateTask(task.id, data);

    if (result.success) {
      onCancel();
      Toast.success(result.message);
    } else {
      Toast.error(result.message);
    }
  };

  const handleCancel = () => {
    setIsClosing(true);
    setTimeout(() => {
      form.reset({
        title: task.title,
        description: task.description || "",
      });
      setIsClosing(false);
      onCancel();
    }, 300);
  };

  return (
    <Card>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <Flex gap={theme.spacing.sm} direction="column">
          <Controller
            name="title"
            control={form.control}
            render={({ field, fieldState }) => (
              <FormField label="" error={fieldState.error?.message}>
                <Input {...field} placeholder="Enter title" autoFocus />
              </FormField>
            )}
          />

          <AnimatedFieldWrapper $isClosing={isClosing}>
            <Flex direction="column" gap={theme.spacing.md}>
              <Controller
                name="description"
                control={form.control}
                render={({ field, fieldState }) => (
                  <FormField label="" error={fieldState.error?.message}>
                    <TextArea {...field} placeholder="Enter description" rows={4} />
                  </FormField>
                )}
              />
              <FormField label="">
                <Flex gap={theme.spacing.sm} justifyContent="flex-end">
                  <Button variant="outline" onClick={handleCancel} type="button">
                    Cancel
                  </Button>
                  <Button type="submit" variant="primary">
                    Save
                  </Button>
                </Flex>
              </FormField>
            </Flex>
          </AnimatedFieldWrapper>
        </Flex>
      </form>
    </Card>
  );
};
