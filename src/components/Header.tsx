import { NavButton } from "@/components/NavButton";
import { HomeIcon, UserIcon, MailIcon, File, UsersRound } from "lucide-react";
import Link from "next/link";
import { ModeToggle } from "./ModeToggle";

export function Header() {
  return (
    <header className="animation-slide bg-background h-12 p-2 border-b sticky top-0 z-50 ">
      <div className="flex h-8 items-center justify-between gap-4 w-full">
        <div className="flex items-center gap-2">
          <NavButton href="/home" label="Home" icon={HomeIcon} /> 
          <Link
            href="/home"
            className="flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-gray-900"
            title="home"
          >
            <h1 className="hidden sm:block m-0 mt-1 text-xl font-bold">Computer repair shop</h1>
          </Link>
        </div>
        <div className="flex items-center">
          <NavButton href="/tickets" label="Tickets" icon={File} /> 
          <NavButton href="/costumers" label="Costumers" icon={UsersRound} /> 
          <ModeToggle />
        </div>
      </div>
      <h1 className="text-2xl font-bold">Header</h1>
    </header>

  );
}
