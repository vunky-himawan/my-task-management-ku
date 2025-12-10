import { BaseButtonStyle, type ButtonVariant } from "./styles";

type Props = {
  variant?: ButtonVariant;
  children: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({ variant = "primary", children, ...props }: Props) => {
  return (
    <BaseButtonStyle data-variant={variant} {...props} variant={variant}>
      {children}
    </BaseButtonStyle>
  );
};
