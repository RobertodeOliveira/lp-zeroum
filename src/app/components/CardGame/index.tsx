import { cn } from "../../../utils/index";

interface Props {
  className: string;
  children?: React.ReactNode;
}

export default function CardGame({ children, className }: Props) {
  return <div className={cn("", className)}>{children}</div>;
}
