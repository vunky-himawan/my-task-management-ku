import type { ElementType } from "react";
import { TitleStyle } from "./styles";

type TitleProps = {
  children: React.ReactNode;
  level?: 1 | 2 | 3 | 4 | 5 | 6;
} & React.HTMLAttributes<HTMLHeadingElement>;

export const Title = ({ children, level = 1, ...props }: TitleProps) => {
  return (
    <TitleStyle as={`h${level}` as ElementType} $level={level} {...props}>
      {children}
    </TitleStyle>
  );
};
