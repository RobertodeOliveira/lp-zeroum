import { cn } from "../../../utils/index";

interface Props {
  className: string;
  children?: React.ReactNode;
}

export default function Card({ children, className }: Props) {
  return (
    <div
      className={cn(
        "flex items-center gap-4 p-3 w-80 border bg-[#ffffff19]  text-lg rounded-lg scale-75 md:scale-100",
        className
      )}
    >
      {children}
    </div>
  );
}
