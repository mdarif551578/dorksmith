import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Search, ShieldCheck, FileCode, Copy, Github } from 'lucide-react';

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-dvh bg-background text-foreground">
      <header className="flex items-center justify-between p-4 border-b shrink-0">
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
      </header>

      <main className="flex-grow">
        <section className="container mx-auto text-center py-24 sm:py-32 lg:py-40">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tighter mb-6">
            Master Advanced Search
          </h1>
          <p className="max-w-3xl mx-auto text-lg md:text-xl text-muted-foreground mb-10">
            Visually construct complex Google Dork queries, discover operators, and leverage templates to master advanced search techniques responsibly.
          </p>
          <Button asChild size="lg" className="text-lg py-7 px-8">
            <Link href="/dork">
              Start Building Queries <ArrowRight className="ml-2" />
            </Link>
          </Button>
        </section>

        <section className="bg-muted py-20">
          <div className="container mx-auto">
            <div className="text-center mb-14">
              <h2 className="text-4xl font-bold tracking-tighter">Core Features</h2>
              <p className="text-muted-foreground mt-2 text-lg">Everything you need for responsible security research.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <FeatureCard
                icon={<Search className="h-9 w-9 text-primary" />}
                title="Intuitive Query Builder"
                description="Construct complex search queries using a visual interface, supporting all major Google Dork operators."
              />
              <FeatureCard
                icon={<FileCode className="h-9 w-9 text-primary" />}
                title="Query Templates"
                description="Leverage pre-made templates for common searches, a great tool for learning and starting new queries."
              />
              <FeatureCard
                icon={<ShieldCheck className="h-9 w-9 text-primary" />}
                title="Ethical Use AI Tool"
                description="Evaluate queries for ethical issues and get alerts about the implications of Google Dorking."
              />
              <FeatureCard
                icon={<Copy className="h-9 w-9 text-primary" />}
                title="Instant Preview & Actions"
                description="Instantly preview the generated search URL, copy it, or open it directly in a new tab."
              />
            </div>
          </div>
        </section>
      </main>

      <footer className="py-8 border-t">
        <div className="container mx-auto text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Dorksmith. Use responsibly.</p>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <Card className="text-left bg-card border-transparent shadow-sm hover:border-primary/20 hover:shadow-lg transition-all duration-300">
      <CardHeader>
        <div className="mb-4">
          {icon}
        </div>
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
}
