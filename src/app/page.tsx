"use client";

import { useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import { BadgePalette } from "@/components/dork-assist/badge-palette";
import { QueryBuilder } from "@/components/dork-assist/query-builder";
import { QueryPreview } from "@/components/dork-assist/query-preview";
import { QueryTemplates } from "@/components/dork-assist/query-templates";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Github, Search } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Home() {
  const [query, setQuery] = useState("");
  const [activeTab, setActiveTab] = useState("builder");
  const isMobile = useIsMobile();

  const handleBadgeClick = (operator: string) => {
    const newQuery = `${query} ${operator}`.trim();
    setQuery(newQuery);
    if (isMobile) {
      setActiveTab("builder");
    }
  };

  const handleSelectTemplate = (templateQuery: string) => {
    setQuery(templateQuery);
    if (isMobile) {
      setActiveTab("builder");
    }
  };

  const DesktopLayout = () => (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 h-full p-6">
      <div className="lg:col-span-4 xl:col-span-3">
        <ScrollArea className="h-full pr-4">
          <BadgePalette onBadgeClick={handleBadgeClick} />
          <QueryTemplates onSelectTemplate={handleSelectTemplate} />
        </ScrollArea>
      </div>
      <div className="lg:col-span-4 xl:col-span-5">
        <QueryBuilder query={query} setQuery={setQuery} />
      </div>
      <div className="lg:col-span-4">
        <ScrollArea className="h-full pr-4">
          <QueryPreview query={query} />
        </ScrollArea>
      </div>
    </div>
  );

  const MobileLayout = () => (
    <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full flex flex-col h-full">
      <TabsList className="grid w-full grid-cols-3 mx-auto max-w-sm sticky top-0 bg-background/95 z-10">
        <TabsTrigger value="tools">Tools</TabsTrigger>
        <TabsTrigger value="builder">Builder</TabsTrigger>
        <TabsTrigger value="preview">Preview</TabsTrigger>
      </TabsList>
      <TabsContent value="tools" className="flex-grow overflow-auto p-4">
        <BadgePalette onBadgeClick={handleBadgeClick} />
        <QueryTemplates onSelectTemplate={handleSelectTemplate} />
      </TabsContent>
      <TabsContent value="builder" className="flex-grow p-4">
        <QueryBuilder query={query} setQuery={setQuery} />
      </TabsContent>
      <TabsContent value="preview" className="flex-grow overflow-auto p-4">
        <QueryPreview query={query} />
      </TabsContent>
    </Tabs>
  );

  return (
    <div className="flex flex-col h-screen">
      <header className="flex items-center justify-between p-4 border-b bg-card shrink-0">
        <div className="flex items-center gap-3">
          <Search className="h-7 w-7 text-primary" />
          <h1 className="text-2xl font-bold tracking-tight">Dorksmith</h1>
        </div>
        <Button variant="ghost" size="icon" asChild>
          <a href="https://github.com/firebase/genkit-patterns/tree/main/nextjs-dork-assistant" target="_blank" rel="noopener noreferrer" aria-label="View source on GitHub">
            <Github />
          </a>
        </Button>
      </header>
      <main className="flex-grow overflow-hidden">
        {isMobile === undefined ? (
          <div className="flex items-center justify-center h-full">
            <p>Loading...</p>
          </div>
        ) : isMobile ? (
          <MobileLayout />
        ) : (
          <DesktopLayout />
        )}
      </main>
    </div>
  );
}
