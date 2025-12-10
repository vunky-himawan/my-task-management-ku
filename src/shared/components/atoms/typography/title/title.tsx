import type { ElementType } from "react";
import { TitleStyle } from "./styles";

type TitleProps = {
  children: React.ReactNode;
  level?: 1 | 2 | 3 | 4 | 5 | 6;
};

export const Title = ({ children, level = 1 }: TitleProps) => {
  return (
    <TitleStyle as={`h${level}` as ElementType} $level={level}>
      {children}
    </TitleStyle>
  );
};
