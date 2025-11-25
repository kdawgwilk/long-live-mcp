/**
 * Code Mode - The Better Way to Use Tools
 *
 * Instead of exposing tools directly to the LLM, we present them as a TypeScript API.
 * The LLM writes code that calls this API, which is then executed in a secure sandbox.
 *
 * Benefits:
 * 1. LLMs are better at writing TypeScript than making tool calls
 * 2. Multiple operations can be composed in a single execution
 * 3. Intermediate results stay in the sandbox, reducing context usage
 * 4. More efficient for complex, multi-step operations
 *
 * Reference:
 * - Anthropic: https://www.anthropic.com/engineering/claude-code-sandbox
 * - Cloudflare: https://blog.cloudflare.com/code-mode/
 */

export { executeCode, getSandbox, cleanupSandbox } from "./sandbox";
export type { CodeExecutionResult } from "./sandbox";
export {
  CODE_MODE_SYSTEM_PROMPT,
  SANDBOX_TYPE_DEFINITIONS,
  SANDBOX_CONTEXT,
} from "./sandbox-types";

import { tool } from "ai";
import { z } from "zod";
import { executeCode } from "./sandbox";
import {
  CODE_MODE_SYSTEM_PROMPT,
  SANDBOX_TYPE_DEFINITIONS,
  SANDBOX_CONTEXT,
} from "./sandbox-types";

/**
 * Creates a code execution tool for the AI SDK
 * This tool allows the LLM to execute TypeScript code in a sandbox
 */
export function createCodeExecutionTool() {
  return tool({
    description: `Execute TypeScript code in a secure sandbox environment.

The sandbox provides these APIs:
- fs: File system operations
- http: HTTP requests
- shell: Shell command execution
- data: Data processing utilities (CSV, JSON, grouping, sorting)
- env: Environment variables
- crypto: Hashing, encoding, UUIDs
- datetime: Date/time utilities

Use console.log() to output results. Write efficient code that composes multiple operations when possible.`,
    inputSchema: z.object({
      code: z
        .string()
        .describe(
          "TypeScript code to execute. Use console.log() to output results."
        ),
      explanation: z
        .string()
        .optional()
        .describe("Brief explanation of what the code does"),
    }),
    execute: async ({ code, explanation }) => {
      const result = await executeCode(code);
      return {
        result,
        explanation,
      };
    },
  });
}

/**
 * Build the complete system prompt for code mode
 * Includes the base prompt, type definitions, and context
 */
export function buildCodeModeSystemPrompt(
  additionalInstructions?: string
): string {
  let prompt = CODE_MODE_SYSTEM_PROMPT;

  // Add type definitions
  prompt += "\n\n## API Type Definitions\n\n```typescript";
  prompt += SANDBOX_TYPE_DEFINITIONS;
  prompt += "\n```";

  // Add sandbox context
  prompt += SANDBOX_CONTEXT;

  // Add any additional instructions
  if (additionalInstructions) {
    prompt += `\n\n## Additional Instructions\n\n${additionalInstructions}`;
  }

  return prompt;
}

/**
 * Configuration for code mode
 */
export interface CodeModeConfig {
  /** Additional instructions to add to the system prompt */
  additionalInstructions?: string;
  /** Whether to include code explanation in tool output */
  includeExplanation?: boolean;
}

/**
 * Creates the tools and system prompt for code mode
 * Use this to easily add code mode to your AI SDK setup
 *
 * @example
 * ```typescript
 * const { system, tools } = createCodeMode({
 *   additionalInstructions: "Focus on data analysis tasks"
 * });
 *
 * const result = streamText({
 *   model: "anthropic/claude-sonnet",
 *   system,
 *   tools,
 *   messages: [...],
 * });
 * ```
 */
export function createCodeMode(config: CodeModeConfig = {}) {
  return {
    system: buildCodeModeSystemPrompt(config.additionalInstructions),
    tools: {
      executeCode: createCodeExecutionTool(),
    },
  };
}
