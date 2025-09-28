import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Search, Github, ArrowRight } from 'lucide-react';

export default function PrivacyPolicyPage() {
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
                href="https://github.com/mdarif551578/dorksmith"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View source on GitHub"
              >
                <Github />
              </a>
            </Button>
            <Button asChild>
              <Link href="/dork">
                Open Builder <ArrowRight className="ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-12 md:px-6 lg:py-16">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl font-extrabold tracking-tight mb-6">Privacy Policy</h1>
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p>
                Your privacy is important to us. It is Dorksmith's policy to respect your privacy regarding any information we may collect from you across our website,{' '}
                <Link href="/">https://dorksmith.pages.dev</Link>, and other sites we own and operate.
              </p>
              <p>
                We only ask for personal information when we truly need it to provide a service to you. We collect it by fair and lawful means, with your knowledge and consent. We also let you know why we’re collecting it and how it will be used.
              </p>
              <p>
                We only retain collected information for as long as necessary to provide you with your requested service. What data we store, we’ll protect within commercially acceptable means to prevent loss and theft, as well as unauthorized access, disclosure, copying, use or modification.
              </p>
              <p>
                We don’t share any personally identifying information publicly or with third-parties, except when required to by law.
              </p>
              <p>
                Our website may link to external sites that are not operated by us. Please be aware that we have no control over the content and practices of these sites, and cannot accept responsibility or liability for their respective privacy policies.
              </p>
              <p>
                You are free to refuse our request for your personal information, with the understanding that we may be unable to provide you with some of your desired services.
              </p>
              <p>
                Your continued use of our website will be regarded as acceptance of our practices around privacy and personal information. If you have any questions about how we handle user data and personal information, feel free to contact us.
              </p>
              <p>This policy is effective as of 1 January 2024.</p>
            </div>
            <div className="mt-8">
              <Button asChild variant="outline">
                <Link href="/">
                  &larr; Back to Home
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </main>
      <footer className="border-t py-8">
        <div className="container mx-auto px-4 md:px-6 flex flex-col sm:flex-row justify-between items-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Dorksmith. A tool for ethical and responsible use.</p>
          <div className="flex gap-4 mt-4 sm:mt-0">
            <Link href="/privacy" className="hover:text-primary">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-primary">Terms of Service</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
