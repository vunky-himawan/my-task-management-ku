import { type FC, type PropsWithChildren } from "react";
import "./styles.css";
import { CenteredContainer } from "@/shared/components/atoms/container/container";
import { Title } from "@/shared/components/atoms/typography/title/title";
import { Paragraph } from "@/shared/components/atoms/typography/paragraph/paragraph";
import { useTheme } from "styled-components";
import { Button } from "@/shared/components/atoms/button/button";
import { type AppError } from "../model/types";

interface IErrorBoundaryProps extends PropsWithChildren {
  error: AppError | null;
  message?: string;
  onReset: () => void;
}

export const ErrorBoundary: FC<IErrorBoundaryProps> = ({ children, error, message, onReset }) => {
  const theme = useTheme();

  const processedMessage = error ? message : "Something went wrong";

  if (!error) {
    return <>{children}</>;
  }

  return (
    <CenteredContainer
      size="full"
      style={{ height: "100vh", flexDirection: "column", gap: "1rem" }}
    >
      <Title level={1} style={{ color: theme.colors.error }}>
        Error
      </Title>
      <Paragraph>{processedMessage}</Paragraph>
      <Button onClick={onReset}>Back</Button>
    </CenteredContainer>
  );
};
