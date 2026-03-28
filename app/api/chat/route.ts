import { openai } from '@ai-sdk/openai';
import { anthropic } from '@ai-sdk/anthropic';
import { streamText } from 'ai';
import { 
  AGENCY_SYSTEM_PROMPT, 
  SCRIPT_GENERATOR_PROMPT, 
  AUDITORIA_PROMPT, 
  ADS_STRATEGY_PROMPT, 
  PROPOSTA_COMERCIAL_PROMPT,
  REPORT_PROMPT 
} from '@/lib/ai/prompts';

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

export async function POST(req: Request) {
  const { messages, type } = await req.json();

  const hasAnthropic = process.env.ANTHROPIC_API_KEY && process.env.ANTHROPIC_API_KEY !== 'your_anthropic_key_here';
  
  const model = hasAnthropic 
    ? anthropic('claude-3-5-sonnet-20241022')
    : openai('gpt-4o');

  let systemPrompt = AGENCY_SYSTEM_PROMPT;
  
  if (type === 'script') systemPrompt = SCRIPT_GENERATOR_PROMPT;
  if (type === 'auditoria') systemPrompt = AUDITORIA_PROMPT;
  if (type === 'ads') systemPrompt = ADS_STRATEGY_PROMPT;
  if (type === 'proposta') systemPrompt = PROPOSTA_COMERCIAL_PROMPT;
  if (type === 'report') systemPrompt = REPORT_PROMPT;

  const result = streamText({
    model,
    messages,
    system: systemPrompt,
  });

  return result.toTextStreamResponse();
}
