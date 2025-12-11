import { Check } from "lucide-react";
import styled, { useTheme } from "styled-components";

const CheckboxWrapper = styled.div<{ $completed: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid
    ${({ theme, $completed }) => ($completed ? theme.colors.success : theme.colors.secondary)};
  border-radius: ${({ theme }) => theme.radius.sm};
  cursor: pointer;
  transition: all 0.2s ease;
  background-color: ${({ theme, $completed }) =>
    $completed ? theme.colors.success : "transparent"};
  flex-shrink: 0;

  &:hover {
    border-color: ${({ theme }) => theme.colors.success};
    background-color: ${({ theme, $completed }) =>
      $completed ? theme.colors.success : "rgba(34, 197, 94, 0.1)"};
  }

  svg {
    opacity: ${({ $completed }) => ($completed ? 1 : 0)};
    transition: opacity 0.2s ease;
  }
`;

type CheckboxProps = {
  completed: boolean;
} & React.HTMLAttributes<HTMLDivElement>;

export const Checkbox = ({ completed, ...props }: CheckboxProps) => {
  const theme = useTheme();

  return (
    <CheckboxWrapper $completed={completed} role="checkbox" aria-checked={completed} {...props}>
      <Check size={16} color={theme.colors.onSuccess} />
    </CheckboxWrapper>
  );
};
