type Props = {
  children: React.ReactNode;
  url: string;
};

export default function Redirect({ children, url }: Props) {
  return (
    <a href={url} className="anchor">
      {children}
    </a>
  );
}
