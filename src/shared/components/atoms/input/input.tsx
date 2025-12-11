import { useState } from "react";
import { BaseInputStyle, InputWrapper, EyeIconButton } from "./styles";
import { Eye, EyeOff } from "lucide-react";

type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

export const Input = ({ type = "text", ...props }: InputProps) => {
  const [showPassword, setShowPassword] = useState(false);

  const isPassword = type === "password";
  const inputType = isPassword ? (showPassword ? "text" : "password") : type;

  return (
    <InputWrapper>
      <BaseInputStyle type={inputType} {...props} />
      {isPassword && (
        <EyeIconButton
          type="button"
          onClick={() => setShowPassword((p) => !p)}
          aria-label="Toggle password visibility"
        >
          {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
        </EyeIconButton>
      )}
    </InputWrapper>
  );
};
