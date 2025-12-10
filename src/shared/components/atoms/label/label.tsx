import type React from "react";
import { LabelStyle } from "./styles";
import type { FC } from "react";

type Props = React.PropsWithChildren &
  React.LabelHTMLAttributes<HTMLLabelElement> & {
    required?: boolean;
  };

export const Label: FC<Props> = ({ children, htmlFor, required, ...props }) => {
  return (
    <LabelStyle htmlFor={htmlFor} {...props}>
      {children}
      {required && <span className="required">*</span>}
    </LabelStyle>
  );
};
