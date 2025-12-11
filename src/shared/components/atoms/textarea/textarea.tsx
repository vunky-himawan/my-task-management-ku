import type { FC } from "react";
import { TextareaStyles } from "./styles";

type TextAreaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>;

export const TextArea: FC<TextAreaProps> = (props) => {
  return <TextareaStyles {...props} />;
};
