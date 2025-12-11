import { LoaderCircle } from "lucide-react";
import { SpinnerLoading } from "./styles";

interface LoadingProps {
  size?: number;
  color?: string;
}

export const Loading = ({ size = 36, color }: LoadingProps) => {
  return <SpinnerLoading as={LoaderCircle} size={size} color={color} strokeWidth={2} />;
};
