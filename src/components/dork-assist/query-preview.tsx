"use client";

import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { useToast } from "@/hooks/use-toast";
import { makeGoogleSearchUrl } from "@/lib/google-search";
import { Copy, ExternalLink, ShieldAlert } from "lucide-react";

interface QueryPreviewProps {
  query: string;
}

export function QueryPreview({ query }: QueryPreviewProps) {
  const [generatedUrl, setGeneratedUrl] = useState("");
  const { toast } = useToast();

  useEffect(() => {
    const url = makeGoogleSearchUrl(query);
    setGeneratedUrl(url);
  }, [query]);

  const handleCopy = () => {
    navigator.clipboard.writeText(generatedUrl).then(() => {
      toast({
        title: "Copied to clipboard!",
        description: "The Google search URL has been copied.",
      });
    });
  };

  const handleOpen = () => {
    window.open(generatedUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="flex flex-col gap-6">
      <div>
        <Label htmlFor="generated-url" className="text-lg font-semibold">
          Preview & Actions
        </Label>
        <div className="relative mt-2">
          <Input
            id="generated-url"
            readOnly
            value={generatedUrl}
            placeholder="Your Google search URL will appear here"
            className="pr-10 font-mono"
            aria-label="Generated Google search URL"
          />
        </div>
        <div className="flex gap-2 mt-2">
          <Button onClick={handleCopy} disabled={!generatedUrl} size="sm">
            <Copy className="mr-2 h-4 w-4" />
            Copy URL
          </Button>
          <Button onClick={handleOpen} disabled={!generatedUrl} variant="secondary" size="sm">
            <ExternalLink className="mr-2 h-4 w-4" />
            Open in New Tab
          </Button>
        </div>
      </div>
      
      <Alert>
        <ShieldAlert className="h-4 w-4" />
        <AlertTitle className="font-semibold">Ethical Use Notice</AlertTitle>
        <AlertDescription className="mt-2">
          Google Dorking can unintentionally access sensitive information. Always use these techniques responsibly and legally. Respect privacy and do not attempt to access systems without authorization.
        </AlertDescription>
      </Alert>
    </div>
  );
}
