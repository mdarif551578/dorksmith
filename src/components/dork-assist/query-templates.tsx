"use client";

import { queryTemplates } from "@/lib/query-templates";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Code } from "lucide-react";

interface QueryTemplatesProps {
  onSelectTemplate: (query: string) => void;
}

export function QueryTemplates({ onSelectTemplate }: QueryTemplatesProps) {
  return (
    <div className="flex flex-col gap-4">
      <div className="grid gap-4 md:grid-cols-1">
        {queryTemplates.map((template) => (
          <Card key={template.title} className="flex flex-col transition-shadow hover:shadow-md">
            <CardHeader>
              <CardTitle className="text-md">{template.title}</CardTitle>
              <CardDescription>{template.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-xs bg-muted p-3 rounded-md font-mono text-muted-foreground break-all">
                {template.query}
              </p>
            </CardContent>
            <CardFooter>
              <Button
                size="sm"
                onClick={() => onSelectTemplate(template.query)}
                className="w-full"
              >
                <Code className="mr-2 h-4 w-4" />
                Use Template
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
