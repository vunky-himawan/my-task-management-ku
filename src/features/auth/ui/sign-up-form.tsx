import { Controller, useForm } from "react-hook-form";
import styled, { useTheme } from "styled-components";
import { zodResolver } from "@hookform/resolvers/zod";
import type z from "zod";
import { CenteredContainer } from "@/shared/components/atoms/container/container";
import { Flex } from "@/shared/components/atoms/display/flex/flex";
import { FormField } from "@/shared/components/molecules/form-field/form-field";
import { Input } from "@/shared/components/atoms/input/input";
import { Button } from "@/shared/components/atoms/button/button";
import { Paragraph } from "@/shared/components/atoms/typography/paragraph/paragraph";
import { Link, useNavigate } from "@tanstack/react-router";
import { SignUpSchema } from "../model/schema";
import { useUserStore, selectIsLoading } from "../stores/user.store";
import { Toast } from "@/shared/utils/toast";

const SignUpFormWrapper = styled.form`
  width: 100%;

  @media (min-width: 640px) {
    width: 400px;
  }
`;

export const SignUpForm = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const register = useUserStore((state) => state.register);
  const isLoading = useUserStore(selectIsLoading);

  const form = useForm<z.infer<typeof SignUpSchema>>({
    resolver: zodResolver(SignUpSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    mode: "onSubmit",
  });

  const onSubmit = async (data: z.infer<typeof SignUpSchema>) => {
    const result = await register(data);

    if (result.success) {
      Toast.success(result.message);
      form.reset();
      navigate({ to: "/dashboard" });
    } else {
      Toast.error(result.message);
    }
  };

  return (
    <CenteredContainer size="sm">
      <SignUpFormWrapper onSubmit={form.handleSubmit(onSubmit)}>
        <Flex direction="column" gap={theme.spacing.md}>
          <Controller
            name="name"
            control={form.control}
            render={({ field, fieldState }) => (
              <FormField label="Name" error={fieldState.error?.message} required>
                <Input type="text" {...field} required placeholder="Enter your name" />
              </FormField>
            )}
          />

          <Controller
            name="email"
            control={form.control}
            render={({ field, fieldState }) => (
              <FormField label="Email" error={fieldState.error?.message} required>
                <Input type="email" {...field} required placeholder="Enter your email" />
              </FormField>
            )}
          />

          <Controller
            name="password"
            control={form.control}
            render={({ field, fieldState }) => (
              <FormField label="Password" error={fieldState.error?.message} required>
                <Input type="password" {...field} required placeholder="Enter your password" />
              </FormField>
            )}
          />

          <Controller
            name="confirmPassword"
            control={form.control}
            render={({ field, fieldState }) => (
              <FormField label="Confirm Password" error={fieldState.error?.message} required>
                <Input
                  type="password"
                  {...field}
                  required
                  placeholder="Enter your confirm password"
                />
              </FormField>
            )}
          />
          <FormField label="">
            <Button type="submit" variant="primary" isLoading={isLoading}>
              Sign Up
            </Button>
          </FormField>

          <Paragraph>
            Already have an account?{" "}
            <Link to="/auth/sign-in">
              <Button variant="link" type="button">
                Sign In
              </Button>
            </Link>
          </Paragraph>
        </Flex>
      </SignUpFormWrapper>
    </CenteredContainer>
  );
};
