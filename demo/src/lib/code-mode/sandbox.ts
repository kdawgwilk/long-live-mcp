import { Daytona, type Sandbox } from "@daytonaio/sdk";

let daytonaClient: Daytona | null = null;
let sandboxInstance: Sandbox | null = null;

/**
 * Get or create a Daytona client instance
 */
export function getDaytonaClient(): Daytona {
  if (!daytonaClient) {
    daytonaClient = new Daytona({
      apiKey: process.env.DAYTONA_API_KEY,
      apiUrl: process.env.DAYTONA_API_URL || "https://app.daytona.io/api",
      target: process.env.DAYTONA_TARGET || "us",
    });
  }
  return daytonaClient;
}

/**
 * Get or create a sandbox instance for code execution
 * Uses a persistent sandbox to avoid creation overhead on each request
 */
export async function getSandbox(): Promise<Sandbox> {
  const daytona = getDaytonaClient();

  // Try to find an existing sandbox with our label
  if (!sandboxInstance) {
    try {
      // Try to find existing sandbox by label
      const existingSandbox = await daytona.findOne({
        labels: { purpose: "code-mode" },
      });

      if (existingSandbox) {
        sandboxInstance = existingSandbox;
        // Ensure it's started
        if (existingSandbox.state !== "started") {
          await daytona.start(existingSandbox, 60);
        }
      }
    } catch {
      // No existing sandbox found, will create new one
    }
  }

  // Create new sandbox if none exists
  if (!sandboxInstance) {
    sandboxInstance = await daytona.create(
      {
        language: "typescript",
        labels: {
          purpose: "code-mode",
          created: new Date().toISOString(),
        },
        autoStopInterval: 30, // Auto-stop after 30 minutes of inactivity
      },
      { timeout: 120 }
    );
  }

  return sandboxInstance;
}

export interface CodeExecutionResult {
  success: boolean;
  output: string;
  error?: string;
  exitCode: number;
  executionTimeMs: number;
}

/**
 * Execute TypeScript code in the Daytona sandbox
 * The code has access to the APIs defined in the sandbox environment
 */
export async function executeCode(code: string): Promise<CodeExecutionResult> {
  const startTime = Date.now();

  try {
    const sandbox = await getSandbox();

    // Execute the code in the sandbox
    const result = await sandbox.process.codeRun(code);

    const executionTimeMs = Date.now() - startTime;

    if (result.exitCode === 0) {
      return {
        success: true,
        output: result.result || "Code executed successfully (no output)",
        exitCode: result.exitCode,
        executionTimeMs,
      };
    } else {
      return {
        success: false,
        output: "",
        error: result.result || "Code execution failed",
        exitCode: result.exitCode,
        executionTimeMs,
      };
    }
  } catch (error) {
    const executionTimeMs = Date.now() - startTime;
    const errorMessage =
      error instanceof Error ? error.message : "Unknown error occurred";

    return {
      success: false,
      output: "",
      error: errorMessage,
      exitCode: 1,
      executionTimeMs,
    };
  }
}

/**
 * Clean up the sandbox (call when shutting down)
 */
export async function cleanupSandbox(): Promise<void> {
  if (sandboxInstance) {
    try {
      const daytona = getDaytonaClient();
      await daytona.delete(sandboxInstance);
      sandboxInstance = null;
    } catch (error) {
      console.error("Failed to cleanup sandbox:", error);
    }
  }
}
