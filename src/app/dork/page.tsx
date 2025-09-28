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
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { SlidersHorizontal, ListChecks } from "lucide-react";

export default function DorkPage() {
  const [query, setQuery] = useState("");
  const isMobile = useIsMobile();
  const [activeTab, setActiveTab] = useState("builder");

  const handleBadgeClick = (operator: string) => {
    // Add a space only if the query is not empty and doesn't already end with a space
    const separator = query && !query.endsWith(' ') ? ' ' : '';
    const newQuery = `${query}${separator}${operator}`;
    setQuery(newQuery);
  };

  const handleSelectTemplate = (templateQuery: string) => {
    setQuery(templateQuery);
    if(isMobile) {
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
        <TabsList className="grid w-full grid-cols-2 mx-auto max-w-sm sticky top-0 bg-background/95 z-10">
          <TabsTrigger value="builder">Builder</TabsTrigger>
          <TabsTrigger value="preview">Preview</TabsTrigger>
        </TabsList>
        <TabsContent value="builder" className="flex-grow overflow-auto p-4">
          <div className="flex flex-col gap-4 h-full">
            <QueryBuilder query={query} setQuery={setQuery} />
            <Accordion type="multiple" className="w-full">
              <AccordionItem value="operators">
                <AccordionTrigger className="text-md font-medium hover:no-underline">
                  <SlidersHorizontal className="mr-2" /> Operator Palette
                </AccordionTrigger>
                <AccordionContent>
                  <BadgePalette onBadgeClick={handleBadgeClick} />
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="templates">
                <AccordionTrigger className="text-md font-medium hover:no-underline">
                  <ListChecks className="mr-2" /> Query Templates
                </AccordionTrigger>
                <AccordionContent>
                  <QueryTemplates onSelectTemplate={handleSelectTemplate} />
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
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
          <h2 className="text-lg font-semibold mb-4">Templates & Operators</h2>
          <Accordion type="multiple" defaultValue={["operators", "templates"]} className="w-full">
            <AccordionItem value="operators">
              <AccordionTrigger className="text-md font-medium hover:no-underline">
                <SlidersHorizontal className="mr-2" /> Operator Palette
              </AccordionTrigger>
              <AccordionContent>
                <BadgePalette onBadgeClick={handleBadgeClick} />
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="templates">
              <AccordionTrigger className="text-md font-medium hover:no-underline">
                <ListChecks className="mr-2" /> Query Templates
              </AccordionTrigger>
              <AccordionContent>
                <QueryTemplates onSelectTemplate={handleSelectTemplate} />
              </AccordionContent>
            </AccordionItem>
          </Accordion>
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
