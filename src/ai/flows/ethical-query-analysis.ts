'use server';

/**
 * @fileOverview A flow for analyzing search queries for ethical and legal compliance.
 *
 * - analyzeQuery - Analyzes a given search query for potential ethical or legal violations.
 * - EthicalQueryAnalysisInput - The input type for the analyzeQuery function.
 * - EthicalQueryAnalysisOutput - The return type for the analyzeQuery function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const EthicalQueryAnalysisInputSchema = z.object({
  query: z
    .string()
    .describe('The search query to analyze for ethical and legal concerns.'),
});
export type EthicalQueryAnalysisInput = z.infer<
  typeof EthicalQueryAnalysisInputSchema
>;

const EthicalQueryAnalysisOutputSchema = z.object({
  isEthical: z
    .boolean()
    .describe(
      'Whether the query is deemed ethical and legal.  True if it is, false if it poses potential concerns.'
    ),
  reason: z
    .string()
    .describe(
      'The reasoning behind the ethical assessment, explaining potential risks or violations.'
    ),
});
export type EthicalQueryAnalysisOutput = z.infer<
  typeof EthicalQueryAnalysisOutputSchema
>;

export async function analyzeQuery(
  input: EthicalQueryAnalysisInput
): Promise<EthicalQueryAnalysisOutput> {
  return ethicalQueryAnalysisFlow(input);
}

const ethicalQueryAnalysisPrompt = ai.definePrompt({
  name: 'ethicalQueryAnalysisPrompt',
  input: {schema: EthicalQueryAnalysisInputSchema},
  output: {schema: EthicalQueryAnalysisOutputSchema},
  prompt: `You are an AI assistant specializing in assessing the ethical and legal implications of Google search queries, also known as "Google Dorking". Your task is to analyze user-provided search queries and determine if they might be used to uncover sensitive information, violate privacy, or engage in any illegal activities.

  Analyze the following search query:
  {{query}}

  Based on your analysis, respond with a JSON object that conforms to the following schema:
  ${JSON.stringify(
    EthicalQueryAnalysisOutputSchema.describe(
      'The analysis result indicating whether the query is ethical and the reasoning behind the assessment.'
    )
  )}

  In your analysis, consider the potential for the query to expose:
  - Personally Identifiable Information (PII)
  - Confidential business data
  - Security vulnerabilities
  - Any other information that should not be publicly accessible

  Provide a detailed explanation of your reasoning, indicating specific phrases or operators in the query that raise concerns.

  If the query appears safe and does not pose any ethical or legal risks, clearly state this in your reasoning.
`,
});

const ethicalQueryAnalysisFlow = ai.defineFlow(
  {
    name: 'ethicalQueryAnalysisFlow',
    inputSchema: EthicalQueryAnalysisInputSchema,
    outputSchema: EthicalQueryAnalysisOutputSchema,
  },
  async input => {
    const {output} = await ethicalQueryAnalysisPrompt(input);
    return output!;
  }
);
