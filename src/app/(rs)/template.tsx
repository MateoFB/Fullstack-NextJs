import { Header } from "@/components/Header";

export default async function Template({
  children,
}: {
  readonly children: React.ReactNode;
}) {
  return (

      <div className="animation-appear">{children}</div>

  );
}
