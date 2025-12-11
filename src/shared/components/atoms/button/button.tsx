import { BaseButtonStyle, type ButtonVariant, type ButtonSize } from "./styles";

type Props = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: React.ReactNode;
  isLoading?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({
  variant = "primary",
  size = "md",
  children,
  isLoading,
  ...props
}: Props) => {
  return (
    <BaseButtonStyle
      data-variant={variant}
      data-size={size}
      {...props}
      variant={variant}
      size={size}
      disabled={props.disabled || isLoading}
    >
      {children}
    </BaseButtonStyle>
  );
};
