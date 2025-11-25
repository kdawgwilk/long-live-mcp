import { convertToModelMessages, streamText, UIMessage } from "ai";

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

export async function POST(req: Request) {
  const { messages }: { messages: UIMessage[] } = await req.json();

  const result = streamText({
    model: "google/gemini-3-pro-preview",
    system: `You are a helpful, friendly AI assistant. You provide clear, accurate, and thoughtful responses.
When appropriate, use markdown formatting to make your responses more readable:
- Use **bold** for emphasis
- Use code blocks for code snippets
- Use bullet points for lists
- Use headers for organizing long responses

Be concise but thorough. If you're unsure about something, say so.`,
    messages: convertToModelMessages(messages),
  });

  return result.toUIMessageStreamResponse();
}
