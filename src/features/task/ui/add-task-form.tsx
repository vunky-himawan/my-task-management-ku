import { Container } from "@/shared/components/atoms/container/container";
import { Controller, useForm } from "react-hook-form";
import { AddTaskSchema, type AddTaskInput } from "../model/schemas";
import { FormField } from "@/shared/components/molecules/form-field/form-field";
import { Input } from "@/shared/components/atoms/input/input";
import { TextArea } from "@/shared/components/atoms/textarea/textarea";
import { useState } from "react";
import styled, { keyframes, useTheme } from "styled-components";
import { Flex } from "@/shared/components/atoms/display/flex/flex";
import { Button } from "@/shared/components/atoms/button/button";
import { Title } from "@/shared/components/atoms/typography/title/title";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTaskStore } from "../model/stores";
import { Toast } from "@/shared/utils/toast";

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

export const AddTaskForm = () => {
  const theme = useTheme();
  const addTask = useTaskStore((state) => state.addTask);
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [isClosing, setIsClosing] = useState<boolean>(false);

  const form = useForm<AddTaskInput>({
    resolver: zodResolver(AddTaskSchema),
    defaultValues: {
      title: "",
      description: "",
    },
    mode: "onSubmit",
  });

  const onSubmit = async (data: AddTaskInput) => {
    const result = await addTask({
      ...data,
      completed: false,
    });

    if (result.success) {
      form.reset();
      setIsFocused(false);
      Toast.success(result.message);
    } else {
      Toast.error(result.message);
    }
  };

  const onCancel = () => {
    setIsClosing(true);
    setTimeout(() => {
      form.reset();
      setIsFocused(false);
      setIsClosing(false);
    }, 300);
  };

  return (
    <Container
      size="full"
      style={{
        margin: 0,
        borderRadius: theme.radius.md,
        backgroundColor: theme.colors.surface,
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
      }}
    >
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <Flex gap={theme.spacing.sm} direction="column">
          <Title level={4}>Add New Task</Title>

          <Controller
            name="title"
            control={form.control}
            render={({ field, fieldState }) => (
              <FormField label="" error={fieldState.error?.message}>
                <Input {...field} placeholder="Enter title" onFocus={() => setIsFocused(true)} />
              </FormField>
            )}
          />

          {/* Expand TextArea on focus */}
          {isFocused && (
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
                    <Button variant="outline" onClick={onCancel} type="button">
                      Cancel
                    </Button>
                    <Button type="submit" variant="primary">
                      Submit
                    </Button>
                  </Flex>
                </FormField>
              </Flex>
            </AnimatedFieldWrapper>
          )}
        </Flex>
      </form>
    </Container>
  );
};
