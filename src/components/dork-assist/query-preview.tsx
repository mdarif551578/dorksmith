"use client";

import { useState, useEffect, useTransition } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { useToast } from "@/hooks/use-toast";
import { makeGoogleSearchUrl } from "@/lib/google-search";
import { analyzeQuery, type EthicalQueryAnalysisOutput } from "@/ai/flows/ethical-query-analysis";
import { Copy, ExternalLink, ShieldAlert, Sparkles, AlertTriangle, CheckCircle } from "lucide-react";

interface QueryPreviewProps {
  query: string;
}

export function QueryPreview({ query }: QueryPreviewProps) {
  const [generatedUrl, setGeneratedUrl] = useState("");
  const { toast } = useToast();
  const [isPending, startTransition] = useTransition();
  const [analysis, setAnalysis] = useState<EthicalQueryAnalysisOutput | null>(null);

  useEffect(() => {
    const url = makeGoogleSearchUrl(query);
    setGeneratedUrl(url);
    setAnalysis(null); // Reset analysis when query changes
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

  const handleAnalyze = () => {
    if (!query) return;
    startTransition(async () => {
      const result = await analyzeQuery({ query });
      setAnalysis(result);
    });
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
      
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Ethical Use AI Tool</h3>
        <Button onClick={handleAnalyze} disabled={!query || isPending} className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
            <Sparkles className="mr-2 h-4 w-4" />
            {isPending ? "Analyzing..." : "Analyze Query for Ethical Risks"}
        </Button>
        {isPending && <p className="text-sm text-muted-foreground text-center">AI analysis in progress...</p>}
        {analysis && (
          <Alert variant={analysis.isEthical ? "default" : "destructive"}>
            {analysis.isEthical ? <CheckCircle className="h-4 w-4 text-green-500" /> : <AlertTriangle className="h-4 w-4" />}
            <AlertTitle className="font-semibold">{analysis.isEthical ? "Analysis Complete: No immediate risks found" : "Potential Risk Detected"}</AlertTitle>
            <AlertDescription className="mt-2">
              {analysis.reason}
            </AlertDescription>
          </Alert>
        )}
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
