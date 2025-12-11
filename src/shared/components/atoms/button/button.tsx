import { BaseButtonStyle, type ButtonVariant } from "./styles";

type Props = {
  variant?: ButtonVariant;
  children: React.ReactNode;
  isLoading?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({ variant = "primary", children, ...props }: Props) => {
  return (
    <BaseButtonStyle
      data-variant={variant}
      {...props}
      variant={variant}
      disabled={props.disabled || props.isLoading}
    >
      {children}
    </BaseButtonStyle>
  );
};
