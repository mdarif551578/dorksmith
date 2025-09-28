"use client";

import { useMemo } from "react";
import { dorkOperators, type DorkOperator } from "@/lib/dork-operators";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

interface BadgePaletteProps {
  onBadgeClick: (operator: string) => void;
}

export function BadgePalette({ onBadgeClick }: BadgePaletteProps) {
  const groupedOperators = useMemo(() => {
    return dorkOperators.reduce((acc, operator) => {
      const category = operator.category;
      if (!acc[category]) {
        acc[category] = [];
      }
      acc[category].push(operator);
      return acc;
    }, {} as Record<string, DorkOperator[]>);
  }, []);

  const categories = Object.keys(groupedOperators);

  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-lg font-semibold">Operator Palette</h2>
      <Accordion type="multiple" defaultValue={categories} className="w-full">
        {categories.map((category) => (
          <AccordionItem value={category} key={category}>
            <AccordionTrigger className="text-md font-medium hover:no-underline">{category}</AccordionTrigger>
            <AccordionContent>
              <div className="flex flex-wrap gap-2">
                {groupedOperators[category].map((op) => (
                  <Tooltip key={op.name}>
                    <TooltipTrigger asChild>
                      <Badge
                        variant="secondary"
                        onClick={() => onBadgeClick(op.name === '""' ? '""' : op.name)}
                        className="cursor-pointer text-sm font-mono hover:bg-accent hover:text-accent-foreground"
                      >
                        {op.name}
                      </Badge>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{op.description}</p>
                    </TooltipContent>
                  </Tooltip>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
