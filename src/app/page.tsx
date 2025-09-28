import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Search, ShieldCheck, FileCode, Copy, Github } from 'lucide-react';

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-dvh bg-background text-foreground">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur-sm">
        <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
          <Link href="/" className="flex items-center gap-3">
            <Search className="h-7 w-7 text-primary" />
            <h1 className="text-2xl font-bold tracking-tight">Dorksmith</h1>
          </Link>
          <div className="flex items-center gap-2">
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
            <Button asChild>
              <Link href="/dork">
                Launch App <ArrowRight className="ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-grow">
        <section className="relative">
          <div className="container mx-auto flex flex-col items-center justify-center space-y-8 px-4 py-24 text-center md:py-32 lg:py-40">
            <h1 className="text-5xl font-extrabold tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl">
              Master Advanced Search
            </h1>
            <p className="max-w-4xl text-lg text-muted-foreground md:text-xl lg:text-2xl">
              Visually construct complex Google Dork queries, discover operators, and leverage templates to master advanced search techniques responsibly.
            </p>
            <div className="flex flex-col items-center gap-4 sm:flex-row">
              <Button asChild size="lg" className="text-lg py-7 px-8">
                <Link href="/dork">
                  Start Building Queries <ArrowRight className="ml-2" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg py-7 px-8">
                <a
                  href="https://github.com/firebase/genkit-patterns/tree/main/nextjs-dork-assistant"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="mr-2" />
                  View on GitHub
                </a>
              </Button>
            </div>
          </div>
        </section>

        <section id="features" className="bg-muted py-20 lg:py-28">
          <div className="container mx-auto">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl">Why Dorksmith?</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Everything you need for responsible and powerful security research, right at your fingertips.
              </p>
            </div>
            <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              <FeatureCard
                icon={<Search className="h-10 w-10 text-primary" />}
                title="Intuitive Query Builder"
                description="Construct complex search queries using a visual interface, supporting all major Google Dork operators."
              />
              <FeatureCard
                icon={<FileCode className="h-10 w-10 text-primary" />}
                title="Query Templates"
                description="Leverage pre-made templates for common searches, a great tool for learning and starting new queries."
              />
              <FeatureCard
                icon={<ShieldCheck className="h-10 w-10 text-primary" />}
                title="Ethical Use AI Tool"
                description="Evaluate queries for ethical issues and get alerts about the implications of Google Dorking."
              />
              <FeatureCard
                icon={<Copy className="h-10 w-10 text-primary" />}
                title="Instant Preview & Actions"
                description="Instantly preview the generated search URL, copy it, or open it directly in a new tab."
              />
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t py-8">
        <div className="container mx-auto text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Dorksmith. A tool for ethical and responsible use.
          </p>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <Card className="flex h-full flex-col bg-card text-left transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl">
      <CardHeader>
        <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-lg bg-primary/10">
          {icon}
        </div>
        <CardTitle className="text-xl font-bold">{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
}
