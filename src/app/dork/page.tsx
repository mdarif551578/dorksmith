"use client";

import { useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import { BadgePalette } from "@/components/dork-assist/badge-palette";
import { QueryBuilder } from "@/components/dork-assist/query-builder";
import { QueryPreview } from "@/components/dork-assist/query-preview";
import { QueryTemplates } from "@/components/dork-assist/query-templates";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable";

export default function DorkPage() {
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

  if (isMobile === undefined) {
    return (
      <div className="flex items-center justify-center h-full">
        <p>Loading...</p>
      </div>
    );
  }

  if (isMobile) {
    return (
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
  }

  return (
    <ResizablePanelGroup direction="horizontal" className="h-full w-full">
      <ResizablePanel defaultSize={25} minSize={20} maxSize={35}>
        <ScrollArea className="h-full p-6">
          <BadgePalette onBadgeClick={handleBadgeClick} />
          <QueryTemplates onSelectTemplate={handleSelectTemplate} />
        </ScrollArea>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={45} minSize={30}>
        <div className="p-6 h-full">
          <QueryBuilder query={query} setQuery={setQuery} />
        </div>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={30} minSize={25} maxSize={40}>
        <ScrollArea className="h-full p-6">
          <QueryPreview query={query} />
        </ScrollArea>
      </ResizablePanel>
    </ResizablePanelGroup>
  );
}
