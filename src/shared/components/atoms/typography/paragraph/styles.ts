import { styled } from "styled-components";

export const BodyParagraphStyle = styled.p`
  font-family: ${({ theme }) => theme.typography.fontFamily.body};
  font-size: ${({ theme }) => theme.typography.fontSize.base};
  font-weight: ${({ theme }) => theme.typography.fontWeight.normal};
  color: ${({ theme }) => theme.colors.black};
  line-height: ${({ theme }) => theme.typography.lineHeight.base};
`;
