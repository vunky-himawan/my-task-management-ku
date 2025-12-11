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
import { Link, useNavigate } from "@tanstack/react-router";
import { selectIsLoading, useUserStore } from "../stores/user.store";
import { Toast } from "@/shared/utils/toast";
import { Paragraph } from "@/shared/components/atoms/typography/paragraph/paragraph";

const SignInFormWrapper = styled.form`
  width: 100%;

  @media (min-width: 640px) {
    width: 400px;
  }
`;

export const SignInForm = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const login = useUserStore((state) => state.login);
  const isLoading = useUserStore(selectIsLoading);

  const form = useForm<z.infer<typeof SignInSchema>>({
    resolver: zodResolver(SignInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onSubmit",
  });

  const onSubmit = async (data: z.infer<typeof SignInSchema>) => {
    const result = await login(data.email, data.password);

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
      <SignInFormWrapper onSubmit={form.handleSubmit(onSubmit)}>
        <Flex direction="column" gap={theme.spacing.md}>
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

          <FormField label="">
            <Button type="submit" variant="primary" isLoading={isLoading}>
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
