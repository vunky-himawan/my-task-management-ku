import styled from "styled-components";

type AlignItems = "flex-start" | "center" | "flex-end" | "stretch" | "baseline";

type JustifyContent =
  | "flex-start"
  | "center"
  | "flex-end"
  | "space-between"
  | "space-around"
  | "space-evenly";

type Direction = "row" | "column";

export type FlexProps = {
  direction?: Direction;
  alignItems?: AlignItems;
  justifyContent?: JustifyContent;
  gap?: string;
};

export const FlexStyles = styled.div<{
  direction?: Direction;
  alignItems?: AlignItems;
  justifyContent?: JustifyContent;
  gap?: string;
}>`
  display: flex;
  flex-direction: ${({ direction }) => direction || "row"};
  align-items: ${({ alignItems }) => alignItems || "stretch"};
  justify-content: ${({ justifyContent }) => justifyContent || "flex-start"};
  gap: ${({ gap }) => gap || "0"};
`;
