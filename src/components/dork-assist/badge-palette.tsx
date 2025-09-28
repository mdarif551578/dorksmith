
"use client";

import { useMemo } from "react";
import { dorkOperators, type DorkOperator } from "@/lib/dork-operators";
import { Badge } from "@/components/ui/badge";
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
      {categories.map((category) => (
        <div key={category}>
          <h3 className="text-md font-medium mb-3">{category}</h3>
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
        </div>
      ))}
    </div>
  );
}
