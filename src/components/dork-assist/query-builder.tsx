"use client";

import type { Dispatch, SetStateAction } from "react";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { X } from "lucide-react";

interface QueryBuilderProps {
  query: string;
  setQuery: Dispatch<SetStateAction<string>>;
}

export function QueryBuilder({ query, setQuery }: QueryBuilderProps) {
  return (
    <div className="flex flex-col gap-4 h-full">
      <div className="flex justify-between items-center">
        <Label htmlFor="query-builder" className="text-lg font-semibold">
          Query Builder
        </Label>
        {query && (
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setQuery("")}
            className="text-muted-foreground"
            aria-label="Clear query"
          >
            <X className="mr-2 h-4 w-4" />
            Clear
          </Button>
        )}
      </div>
      <div className="relative flex-grow">
        <Textarea
          id="query-builder"
          placeholder="Build your advanced search query here..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="h-full resize-none text-base font-mono"
          aria-label="Query builder text area"
        />
      </div>
    </div>
  );
}
