import { LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

type Props = {
  readonly href?: string;
  readonly icon: LucideIcon;
  readonly label: string;
};

export function NavButton({ href, icon: Icon, label }: Props) {
  const iconOnly = <Icon className="h-4 w-4" />;

  return (
    <Button
      asChild
      variant="ghost"
      size="icon"
      title={label}
      aria-label={label}
      className="rounded-full"
    >
      {href ? <Link href={href}>{iconOnly}</Link> : iconOnly}
    </Button>
  );
}
