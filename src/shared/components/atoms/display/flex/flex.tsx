import type { FC } from "react";
import type React from "react";
import { FlexStyles, type FlexProps } from "./styles";

type Props = React.PropsWithChildren & React.HTMLAttributes<HTMLDivElement> & FlexProps;

export const Flex: FC<Props> = ({ children, ...rest }) => {
  return <FlexStyles {...rest}>{children}</FlexStyles>;
};
