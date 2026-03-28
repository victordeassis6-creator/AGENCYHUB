import { openai } from '@ai-sdk/openai';
import { anthropic } from '@ai-sdk/anthropic';
import { streamText } from 'ai';
import { SCRIPT_GENERATOR_PROMPT } from '@/lib/ai/prompts';

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

export async function POST(req: Request) {
  const { messages, type } = await req.json();

  // Use Anthropic (Claude) as default if key is present, fallback to OpenAI
  const hasAnthropic = process.env.ANTHROPIC_API_KEY && process.env.ANTHROPIC_API_KEY !== 'your_anthropic_key_here';
  
  const model = hasAnthropic 
    ? anthropic('claude-3-5-sonnet-20241022')
    : openai('gpt-4o');

  const systemPrompt = type === 'script' ? SCRIPT_GENERATOR_PROMPT : undefined;

  const result = streamText({
    model,
    messages,
    system: systemPrompt,
  });

  return result.toDataStreamResponse();
}
