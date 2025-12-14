import type { FC, ReactNode, HTMLAttributes } from "react";
import { FormFieldStyles } from "./styles";
import { Label } from "../../atoms/label/label";
import { Paragraph } from "../../atoms/typography/paragraph/paragraph";
import { useTheme } from "styled-components";

type Props = {
  label: string;
  htmlFor?: string;
  error?: string;
  children: ReactNode;
  required?: boolean;
} & HTMLAttributes<HTMLDivElement>;

export const FormField: FC<Props> = ({ label, htmlFor, error, children, required, ...props }) => {
  const theme = useTheme();

  return (
    <FormFieldStyles {...props}>
      <Label htmlFor={htmlFor} required={required}>
        {label}
      </Label>

      {/* Render custom input */}
      {children}

      {/* Error Message */}
      {error && <Paragraph style={{ color: theme.colors.error }}>{error}</Paragraph>}
    </FormFieldStyles>
  );
};
