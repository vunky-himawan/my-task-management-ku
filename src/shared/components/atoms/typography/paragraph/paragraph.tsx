import { BodyParagraphStyle } from "./styles";

type ParagraphProps = {
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLParagraphElement>;

export const Paragraph = ({ children, ...props }: ParagraphProps) => {
  return <BodyParagraphStyle {...props}>{children}</BodyParagraphStyle>;
};
