import { SignInSchema } from "../model/schema";
import { Controller, useForm } from "react-hook-form";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormField } from "@/shared/components/molecules/form-field/form-field";
import { Input } from "@/shared/components/atoms/input/input";
import { Button } from "@/shared/components/atoms/button/button";
import { Flex } from "@/shared/components/atoms/display/flex/flex";
import styled, { useTheme } from "styled-components";
import { CenteredContainer } from "@/shared/components/atoms/container/container";
import { Paragraph } from "@/shared/components/atoms/typography/paragraph/paragraph";
import { Link } from "@tanstack/react-router";
import { Toast } from "@/shared/utils/toast";

const SignInFormWrapper = styled.form`
  width: 100%;

  @media (min-width: 640px) {
    width: 400px;
  }
`;

export const SignInForm = () => {
  const theme = useTheme();

  const form = useForm<z.infer<typeof SignInSchema>>({
    resolver: zodResolver(SignInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onSubmit",
  });

  const onSubmit = () => {
    Toast.warning(`This feature is not implemented yet.`);
  };

  return (
    <CenteredContainer size="sm">
      <SignInFormWrapper onSubmit={form.handleSubmit(onSubmit)}>
        <Flex direction="column" gap={theme.spacing.md}>
          <Controller
            name="email"
            control={form.control}
            render={({ field, fieldState }) => (
              <FormField label="Email" error={fieldState.error?.message} required>
                <Input type="email" {...field} required />
              </FormField>
            )}
          />

          <Controller
            name="password"
            control={form.control}
            render={({ field, fieldState }) => (
              <FormField label="Password" error={fieldState.error?.message} required>
                <Input type="password" {...field} required />
              </FormField>
            )}
          />

          <FormField label="">
            <Button type="submit" variant="primary">
              Sign In
            </Button>
          </FormField>

          <Paragraph>
            Don't have an account?{" "}
            <Link to="/auth/sign-up">
              <Button variant="link">Sign Up</Button>
            </Link>
          </Paragraph>
        </Flex>
      </SignInFormWrapper>
    </CenteredContainer>
  );
};
