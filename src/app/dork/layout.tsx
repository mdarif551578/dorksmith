import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Github, Search } from "lucide-react";

export default function DorkLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col h-screen">
      <header className="flex items-center justify-between p-4 border-b bg-card shrink-0">
        <div className="flex items-center gap-3">
          <Link href="/" className="flex items-center gap-3">
            <Search className="h-7 w-7 text-primary" />
            <h1 className="text-2xl font-bold tracking-tight">Dorksmith</h1>
          </Link>
        </div>
        <Button variant="ghost" size="icon" asChild>
          <a
            href="https://github.com/firebase/genkit-patterns/tree/main/nextjs-dork-assistant"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View source on GitHub"
          >
            <Github />
          </a>
        </Button>
      </header>
      <main className="flex-grow overflow-hidden">{children}</main>
    </div>
  );
}
