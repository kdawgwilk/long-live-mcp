/**
 * TypeScript type definitions for the sandbox environment
 * These types define the APIs available to the LLM when writing code
 *
 * This is the "code mode" approach: instead of exposing tools directly to the LLM,
 * we present them as a TypeScript API that the LLM can write code against.
 * LLMs are better at writing TypeScript code than making tool calls.
 */

/**
 * The type definitions that get injected into the LLM's context
 * These describe what APIs are available in the sandbox
 */
export const SANDBOX_TYPE_DEFINITIONS = `
/**
 * Available APIs in the sandbox environment
 * Use these to accomplish tasks by writing TypeScript code
 */

// ==================== File System API ====================

interface FileInfo {
  name: string;
  path: string;
  size: number;
  isDirectory: boolean;
  modifiedTime: string;
  permissions: string;
}

interface FileSystem {
  /** Read the contents of a file */
  readFile(path: string): Promise<string>;
  
  /** Write content to a file */
  writeFile(path: string, content: string): Promise<void>;
  
  /** List files in a directory */
  listFiles(path: string): Promise<FileInfo[]>;
  
  /** Create a directory */
  createFolder(path: string): Promise<void>;
  
  /** Delete a file */
  deleteFile(path: string): Promise<void>;
  
  /** Check if a file or directory exists */
  exists(path: string): Promise<boolean>;
  
  /** Search for files matching a pattern */
  searchFiles(directory: string, pattern: string): Promise<FileInfo[]>;
  
  /** Find files containing specific content */
  findInFiles(directory: string, searchText: string): Promise<{ file: string; line: number; content: string }[]>;
}

/** File system operations */
declare const fs: FileSystem;

// ==================== HTTP API ====================

interface HttpResponse {
  status: number;
  statusText: string;
  headers: Record<string, string>;
  body: string;
  json<T = unknown>(): T;
}

interface HttpOptions {
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
  headers?: Record<string, string>;
  body?: string | object;
  timeout?: number;
}

interface Http {
  /** Make an HTTP request */
  request(url: string, options?: HttpOptions): Promise<HttpResponse>;
  
  /** Make a GET request */
  get(url: string, headers?: Record<string, string>): Promise<HttpResponse>;
  
  /** Make a POST request */
  post(url: string, body: object, headers?: Record<string, string>): Promise<HttpResponse>;
}

/** HTTP client for making web requests */
declare const http: Http;

// ==================== Shell API ====================

interface CommandResult {
  exitCode: number;
  stdout: string;
  stderr: string;
}

interface Shell {
  /** Execute a shell command */
  exec(command: string, cwd?: string): Promise<CommandResult>;
  
  /** Execute a command and return just stdout */
  run(command: string): Promise<string>;
}

/** Execute shell commands */
declare const shell: Shell;

// ==================== Data Processing API ====================

interface DataUtils {
  /** Parse CSV string into array of objects */
  parseCSV<T = Record<string, string>>(csv: string, options?: { headers?: boolean }): T[];
  
  /** Convert array of objects to CSV string */
  toCSV(data: object[], options?: { headers?: boolean }): string;
  
  /** Parse JSON string */
  parseJSON<T = unknown>(json: string): T;
  
  /** Stringify object to JSON */
  toJSON(data: unknown, pretty?: boolean): string;
  
  /** Group array items by a key */
  groupBy<T>(array: T[], key: keyof T): Record<string, T[]>;
  
  /** Calculate sum of numeric values */
  sum(numbers: number[]): number;
  
  /** Calculate average of numeric values */
  average(numbers: number[]): number;
  
  /** Sort array by key */
  sortBy<T>(array: T[], key: keyof T, order?: 'asc' | 'desc'): T[];
}

/** Data processing utilities */
declare const data: DataUtils;

// ==================== Environment API ====================

interface Environment {
  /** Get an environment variable */
  get(key: string): string | undefined;
  
  /** Get current working directory */
  cwd(): string;
  
  /** Get system info */
  system(): { platform: string; arch: string; nodeVersion: string };
}

/** Environment and system info */
declare const env: Environment;

// ==================== Crypto API ====================

interface Crypto {
  /** Generate a random UUID */
  uuid(): string;
  
  /** Generate random bytes as hex string */
  randomHex(length: number): string;
  
  /** Calculate MD5 hash */
  md5(input: string): string;
  
  /** Calculate SHA256 hash */
  sha256(input: string): string;
  
  /** Base64 encode */
  base64Encode(input: string): string;
  
  /** Base64 decode */
  base64Decode(input: string): string;
}

/** Cryptographic utilities */
declare const crypto: Crypto;

// ==================== Date/Time API ====================

interface DateTime {
  /** Get current timestamp in ISO format */
  now(): string;
  
  /** Get current Unix timestamp (seconds) */
  timestamp(): number;
  
  /** Format a date */
  format(date: Date | string | number, format: string): string;
  
  /** Parse a date string */
  parse(dateString: string): Date;
  
  /** Add time to a date */
  add(date: Date, amount: number, unit: 'days' | 'hours' | 'minutes' | 'seconds'): Date;
}

/** Date and time utilities */
declare const datetime: DateTime;

// ==================== Console Output ====================

/**
 * Use console.log() to return results to the user
 * All console.log output will be captured and returned
 */
declare function console.log(...args: unknown[]): void;
declare function console.error(...args: unknown[]): void;
declare function console.warn(...args: unknown[]): void;

// ==================== Utility Types ====================

/** Sleep for a specified number of milliseconds */
declare function sleep(ms: number): Promise<void>;

/** Create a timeout promise */
declare function timeout<T>(promise: Promise<T>, ms: number): Promise<T>;
`;

/**
 * System prompt for code mode that instructs the LLM how to use the sandbox
 */
export const CODE_MODE_SYSTEM_PROMPT = `You are an AI assistant with the ability to execute TypeScript code in a secure sandbox environment.

## How to Use Code Execution

When you need to:
- Process data
- Make calculations
- Transform information
- Fetch data from APIs
- Work with files
- Perform complex operations

You should write TypeScript code that will be executed in the sandbox. Use console.log() to output results that you want to see.

## Available APIs

The sandbox provides these APIs:

- \`fs\` - File system operations (read, write, list, search files)
- \`http\` - Make HTTP requests (GET, POST, etc.)
- \`shell\` - Execute shell commands
- \`data\` - Data processing utilities (CSV, JSON, grouping, sorting)
- \`env\` - Environment variables and system info
- \`crypto\` - Cryptographic functions (hashing, encoding, UUIDs)
- \`datetime\` - Date and time utilities

## Important Guidelines

1. **Always use console.log()** to output results you want to share with the user
2. **Handle errors gracefully** - wrap risky operations in try/catch
3. **Be efficient** - compose multiple operations in a single code execution when possible
4. **Return meaningful output** - don't just execute code, explain what you're doing

## Example

If the user asks to calculate the sum of numbers 1-10:

\`\`\`typescript
const numbers = Array.from({ length: 10 }, (_, i) => i + 1);
const sum = data.sum(numbers);
console.log(\`The sum of numbers 1-10 is: \${sum}\`);
\`\`\`

When you call the executeCode tool, your code will run in the sandbox and you'll receive the output.`;

/**
 * Additional context about the sandbox environment for the LLM
 */
export const SANDBOX_CONTEXT = `
## Sandbox Environment Details

- Runtime: Node.js with TypeScript support
- All code runs in an isolated, secure environment
- Network access is available through the \`http\` API
- File operations are scoped to the sandbox filesystem
- Code execution has a timeout limit
- All console output is captured and returned
`;

