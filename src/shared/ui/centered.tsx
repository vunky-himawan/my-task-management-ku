import type { HtmlHTMLAttributes, ReactNode } from "react";

interface Props extends HtmlHTMLAttributes<HTMLDivElement> {
  row?: boolean;
  isFullScreen?: boolean;
  children: ReactNode;
}

export const Centered = ({ children, row, isFullScreen, ...props }: Props) => {
  return (
    <div
      {...props}
      className={
        "flex items-center justify-center" +
        (row ? " flex-row" : " flex-col") +
        (isFullScreen ? " w-screen h-screen" : "") +
        (props.className ? ` ${props.className}` : "")
      }
    >
      {children}
    </div>
  );
};
