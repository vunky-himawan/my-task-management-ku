import { CenteredContainerStyle, ContainerStyle, type ContainerSize } from "./styles";

type ContainerProps = {
  children: React.ReactNode;
  size?: ContainerSize;
} & React.HTMLAttributes<HTMLDivElement>;

const Container = ({ children, size, ...props }: ContainerProps) => {
  return (
    <ContainerStyle $size={size ?? "full"} {...props}>
      {children}
    </ContainerStyle>
  );
};

const CenteredContainer = ({ children, size, ...props }: ContainerProps) => {
  return (
    <CenteredContainerStyle $size={size ?? "full"} {...props}>
      {children}
    </CenteredContainerStyle>
  );
};

export { Container, CenteredContainer };
