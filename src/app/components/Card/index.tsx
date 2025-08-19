import { cn } from "../../../utils/index";

interface Props {
  className: string;
  children?: React.ReactNode;
}

export default function Card({ children, className }: Props) {
  return (
    <div
      className={cn(
        "flex items-center gap-4 p-3 h-fit text-lg rounded-xl scale-75 md:scale-100  bg-[#ffffff19] border border-transparent bg-gradient-to-tr from-white/40 via-white/10 to-white/20 bg-clip-border backdrop-blur-[6px] ",
        className
      )}
    >
      {children}
    </div>
  );
}
