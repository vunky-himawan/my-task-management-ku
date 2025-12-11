import type { FC, PropsWithChildren } from "react";
import styled from "styled-components";

const HeaderStyle = styled.header`
  padding: ${({ theme }) => theme.spacing.xl};
  background-color: ${({ theme }) => theme.colors.surface};
  color: ${({ theme }) => theme.colors.onSurface};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

type Props = PropsWithChildren & React.HTMLAttributes<HTMLElement>;

export const Header: FC<Props> = ({ children, ...rest }) => {
  return <HeaderStyle {...rest}>{children}</HeaderStyle>;
};
