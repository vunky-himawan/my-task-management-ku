import { styled } from "styled-components";

export const InputWrapper = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
`;

export const BaseInputStyle = styled.input`
  width: 100%;
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
  padding-right: 3rem;
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  border-radius: ${({ theme }) => theme.radius.md};
  font-size: ${({ theme }) => theme.typography.fontSize.base};
  background: ${({ theme }) => theme.colors.surface};
  color: ${({ theme }) => theme.colors.black};

  &:focus {
    border-color: ${({ theme }) => theme.colors.primary};
    outline: none;
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.primary}33;
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.secondary};
    font-size: ${({ theme }) => theme.typography.fontSize.sm}
`;

export const EyeIconButton = styled.button`
  position: absolute;
  top: 50%;
  right: ${({ theme }) => theme.spacing.sm};
  transform: translateY(-50%);

  width: 1.75rem;
  height: 1.75rem;

  background: transparent;
  border: none;
  padding: 0;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  color: ${({ theme }) => theme.colors.secondary};

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;
