import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Search, ShieldCheck, FileCode, Copy } from 'lucide-react';

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <header className="flex items-center justify-between p-4 border-b bg-card shrink-0">
        <div className="flex items-center gap-3">
          <Search className="h-7 w-7 text-primary" />
          <h1 className="text-2xl font-bold tracking-tight">Dorksmith</h1>
        </div>
      </header>

      <main className="flex-grow">
        <section className="container mx-auto text-center py-20 lg:py-32">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tighter mb-4">
            Advanced Search Query Builder
          </h1>
          <p className="max-w-3xl mx-auto text-lg md:text-xl text-muted-foreground mb-8">
            Visually construct complex Google Dork queries, discover operators, and leverage templates to master advanced search techniques responsibly.
          </p>
          <Button asChild size="lg">
            <Link href="/dork">
              Start Building Queries <ArrowRight className="ml-2" />
            </Link>
          </Button>
        </section>

        <section className="bg-muted py-20">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Core Features</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <FeatureCard
                icon={<Search className="h-10 w-10 text-accent" />}
                title="Intuitive Query Builder"
                description="Construct complex search queries using a visual interface, supporting all major Google Dork operators."
              />
              <FeatureCard
                icon={<FileCode className="h-10 w-10 text-accent" />}
                title="Query Templates"
                description="Leverage pre-made templates for common searches, serving as a learning tool and a jumpstart for new queries."
              />
              <FeatureCard
                icon={<ShieldCheck className="h-10 w-10 text-accent" />}
                title="Ethical Use AI Tool"
                description="Evaluate your queries for potential ethical issues and get alerts about the implications of Google Dorking."
              />
              <FeatureCard
                icon={<Copy className="h-10 w-10 text-accent" />}
                title="Instant Preview & Actions"
                description="Instantly preview the generated search URL and copy it or open it directly in a new tab."
              />
            </div>
          </div>
        </section>
      </main>

      <footer className="py-6 border-t bg-card">
        <div className="container mx-auto text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Dorksmith. Use responsibly.</p>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <Card className="text-center bg-card">
      <CardHeader>
        <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit mb-4">
          {icon}
        </div>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
}
