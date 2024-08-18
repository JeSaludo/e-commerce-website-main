interface headerProps {
  title: string;
}

export default function Header({ title }: headerProps) {
  return <h1 className="text-2xl font-bold">{title}</h1>;
}
