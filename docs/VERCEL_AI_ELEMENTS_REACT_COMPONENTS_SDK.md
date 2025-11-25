# AI Elements

AI Elements is a React component library built on shadcn/ui that provides pre-built, customizable components specifically designed for AI applications. The library includes conversation interfaces, message displays, code blocks, reasoning visualizations, input controls, tool execution workflows, web previews, workflow canvas, and more. Components integrate seamlessly with the Vercel AI SDK and support streaming, attachments, tool usage tracking, token consumption monitoring, and approval workflows.

The library follows a composable architecture where each component is broken down into smaller sub-components that can be customized individually. All components support dark mode, are fully typed with TypeScript, and can be installed directly into your codebase for complete customization. The CLI tool detects your package manager automatically and installs components to your configured shadcn/ui directory, making them part of your project rather than a locked dependency. The library is organized into three categories: Chatbot components for conversational interfaces, Vibe-Coding components for code artifacts and previews, and Workflow components for building visual workflow editors.

## Installation and Setup

Install all components at once

```bash
npx ai-elements@latest
```

Install specific components

```bash
# Install individual components
npx ai-elements@latest add message
npx ai-elements@latest add conversation
npx ai-elements@latest add code-block
npx ai-elements@latest add prompt-input
```

Alternative installation using shadcn CLI

```bash
# Install all components
npx shadcn@latest add https://registry.ai-sdk.dev/all.json

# Install specific component
npx shadcn@latest add https://registry.ai-sdk.dev/message.json
```

## Conversation Component

Container component for chat conversations with automatic scroll-to-bottom behavior, empty states, and scroll controls.

```tsx
"use client";

import { useChat } from "@ai-sdk/react";
import {
  Conversation,
  ConversationContent,
  ConversationEmptyState,
  ConversationScrollButton,
} from "@/components/ai-elements/conversation";
import {
  Message,
  MessageContent,
  MessageAvatar,
} from "@/components/ai-elements/message";
import { Response } from "@/components/ai-elements/response";
import { MessageSquareIcon } from "lucide-react";

export default function ChatInterface() {
  const { messages } = useChat();

  return (
    <Conversation className="h-screen">
      <ConversationContent>
        {messages.length === 0 ? (
          <ConversationEmptyState
            title="No messages yet"
            description="Start a conversation to see messages here"
            icon={<MessageSquareIcon className="size-6" />}
          />
        ) : (
          messages.map((message, index) => (
            <Message key={index} from={message.role}>
              <MessageContent>
                <Response>{message.content}</Response>
              </MessageContent>
              <MessageAvatar
                src={
                  message.role === "user"
                    ? "/user-avatar.png"
                    : "/ai-avatar.png"
                }
                name={message.role === "user" ? "User" : "AI"}
              />
            </Message>
          ))
        )}
      </ConversationContent>
      <ConversationScrollButton />
    </Conversation>
  );
}
```

## Message Component

Individual chat message component with support for user/assistant roles, avatars, and flexible content styling.

```tsx
"use client";

import {
  Message,
  MessageContent,
  MessageAvatar,
} from "@/components/ai-elements/message";
import { Response } from "@/components/ai-elements/response";

export default function MessageExample() {
  return (
    <>
      {/* User message with contained variant (default) */}
      <Message from="user">
        <MessageContent variant="contained">
          What is the capital of France?
        </MessageContent>
        <MessageAvatar src="https://github.com/username.png" name="John Doe" />
      </Message>

      {/* Assistant message with flat variant */}
      <Message from="assistant">
        <MessageContent variant="flat">
          <Response>
            The capital of France is **Paris**. It is the largest city in France
            and serves as its political, economic, and cultural center.
          </Response>
        </MessageContent>
        <MessageAvatar
          src="https://github.com/ai-bot.png"
          name="AI Assistant"
        />
      </Message>
    </>
  );
}
```

## Response Component

Markdown renderer with streaming support for displaying AI responses with proper formatting.

```tsx
"use client";

import { useChat } from "@ai-sdk/react";
import { Response } from "@/components/ai-elements/response";

export default function StreamingResponse() {
  const { messages } = useChat({
    api: "/api/chat",
  });

  const lastMessage = messages[messages.length - 1];

  return (
    <div className="p-4">
      {lastMessage?.role === "assistant" && (
        <Response className="prose dark:prose-invert max-w-none">
          {lastMessage.content}
        </Response>
      )}
    </div>
  );
}
```

## PromptInput Component

Advanced input component with file attachments, drag-and-drop, speech input, model selection, and action menus.

```tsx
"use client";

import { useState } from "react";
import { useChat } from "@ai-sdk/react";
import {
  PromptInput,
  PromptInputTextarea,
  PromptInputToolbar,
  PromptInputTools,
  PromptInputButton,
  PromptInputSubmit,
  PromptInputAttachments,
  PromptInputAttachment,
  PromptInputActionMenu,
  PromptInputActionMenuTrigger,
  PromptInputActionMenuContent,
  PromptInputActionAddAttachments,
  PromptInputModelSelect,
  PromptInputModelSelectTrigger,
  PromptInputModelSelectContent,
  PromptInputModelSelectItem,
  PromptInputModelSelectValue,
} from "@/components/ai-elements/prompt-input";
import { PaperclipIcon } from "lucide-react";

export default function PromptInputExample() {
  const { status, append } = useChat();
  const [model, setModel] = useState("gpt-4");

  return (
    <PromptInput
      accept="image/*"
      multiple
      maxFiles={5}
      maxFileSize={10 * 1024 * 1024}
      onError={(error) => {
        console.error(error.message);
      }}
      onSubmit={async (message) => {
        await append({
          role: "user",
          content: [
            { type: "text", text: message.text || "" },
            ...(message.files || []),
          ],
        });
      }}
    >
      <PromptInputAttachments>
        {(attachment) => <PromptInputAttachment data={attachment} />}
      </PromptInputAttachments>

      <PromptInputTextarea placeholder="Ask me anything..." />

      <PromptInputToolbar>
        <PromptInputTools>
          <PromptInputActionMenu>
            <PromptInputActionMenuTrigger />
            <PromptInputActionMenuContent>
              <PromptInputActionAddAttachments />
            </PromptInputActionMenuContent>
          </PromptInputActionMenu>

          <PromptInputModelSelect value={model} onValueChange={setModel}>
            <PromptInputModelSelectTrigger>
              <PromptInputModelSelectValue />
            </PromptInputModelSelectTrigger>
            <PromptInputModelSelectContent>
              <PromptInputModelSelectItem value="gpt-4">
                GPT-4
              </PromptInputModelSelectItem>
              <PromptInputModelSelectItem value="gpt-3.5-turbo">
                GPT-3.5 Turbo
              </PromptInputModelSelectItem>
              <PromptInputModelSelectItem value="claude-3-opus">
                Claude 3 Opus
              </PromptInputModelSelectItem>
            </PromptInputModelSelectContent>
          </PromptInputModelSelect>
        </PromptInputTools>

        <PromptInputSubmit status={status} />
      </PromptInputToolbar>
    </PromptInput>
  );
}
```

## CodeBlock Component

Syntax-highlighted code display with copy functionality and dual theme support.

```tsx
"use client";

import {
  CodeBlock,
  CodeBlockCopyButton,
} from "@/components/ai-elements/code-block";

export default function CodeBlockExample() {
  const code = `function calculateSum(a: number, b: number): number {
  return a + b;
}

const result = calculateSum(10, 20);
console.log(result); // Output: 30`;

  return (
    <div className="p-4">
      <CodeBlock code={code} language="typescript" showLineNumbers={true}>
        <CodeBlockCopyButton
          onCopy={() => console.log("Code copied!")}
          onError={(error) => console.error("Copy failed:", error)}
          timeout={3000}
        />
      </CodeBlock>
    </div>
  );
}
```

## Actions Component

Interactive action buttons for AI responses with tooltips and customizable styling.

```tsx
"use client";

import { Actions, Action } from "@/components/ai-elements/actions";
import {
  CopyIcon,
  ThumbsUpIcon,
  ThumbsDownIcon,
  RefreshCwIcon,
} from "lucide-react";

export default function ActionsExample() {
  return (
    <Actions>
      <Action tooltip="Copy response" onClick={() => console.log("Copied")}>
        <CopyIcon className="size-4" />
      </Action>
      <Action tooltip="Good response" onClick={() => console.log("Thumbs up")}>
        <ThumbsUpIcon className="size-4" />
      </Action>
      <Action tooltip="Bad response" onClick={() => console.log("Thumbs down")}>
        <ThumbsDownIcon className="size-4" />
      </Action>
      <Action tooltip="Regenerate" onClick={() => console.log("Regenerate")}>
        <RefreshCwIcon className="size-4" />
      </Action>
    </Actions>
  );
}
```

## Branch Component

Branch visualization for conversation flows with navigation controls for switching between different response branches.

```tsx
"use client";

import {
  Branch,
  BranchMessages,
  BranchSelector,
  BranchPrevious,
  BranchNext,
  BranchPage,
} from "@/components/ai-elements/branch";
import { Message, MessageContent } from "@/components/ai-elements/message";

export default function BranchExample() {
  const branches = [
    "First response to the user question",
    "Alternative response with different approach",
    "Third variation with more details",
  ];

  return (
    <Branch
      defaultBranch={0}
      onBranchChange={(index) => console.log("Branch:", index)}
    >
      <BranchMessages>
        {branches.map((content, index) => (
          <Message key={index} from="assistant">
            <MessageContent>{content}</MessageContent>
          </Message>
        ))}
      </BranchMessages>

      <BranchSelector from="assistant">
        <BranchPrevious />
        <BranchPage />
        <BranchNext />
      </BranchSelector>
    </Branch>
  );
}
```

## ChainOfThought Component

Display AI reasoning and thought processes with collapsible steps and search results visualization.

```tsx
"use client";

import {
  ChainOfThought,
  ChainOfThoughtHeader,
  ChainOfThoughtContent,
  ChainOfThoughtStep,
  ChainOfThoughtSearchResults,
  ChainOfThoughtSearchResult,
  ChainOfThoughtImage,
} from "@/components/ai-elements/chain-of-thought";
import { SearchIcon, FileTextIcon, CheckCircleIcon } from "lucide-react";

export default function ChainOfThoughtExample() {
  return (
    <ChainOfThought defaultOpen>
      <ChainOfThoughtHeader>Analyzing the question...</ChainOfThoughtHeader>
      <ChainOfThoughtContent>
        <ChainOfThoughtStep
          icon={SearchIcon}
          label="Searching knowledge base"
          description="Looking for relevant information"
          status="complete"
        >
          <ChainOfThoughtSearchResults>
            <ChainOfThoughtSearchResult>
              React Documentation
            </ChainOfThoughtSearchResult>
            <ChainOfThoughtSearchResult>
              TypeScript Handbook
            </ChainOfThoughtSearchResult>
          </ChainOfThoughtSearchResults>
        </ChainOfThoughtStep>

        <ChainOfThoughtStep
          icon={FileTextIcon}
          label="Analyzing context"
          description="Understanding the user's intent"
          status="active"
        />

        <ChainOfThoughtStep
          icon={CheckCircleIcon}
          label="Formulating response"
          description="Preparing the final answer"
          status="pending"
        />
      </ChainOfThoughtContent>
    </ChainOfThought>
  );
}
```

## Plan Component

Plan and task planning display component with collapsible content and streaming support.

```tsx
"use client";

import {
  Plan,
  PlanHeader,
  PlanTitle,
  PlanDescription,
  PlanAction,
  PlanContent,
  PlanFooter,
  PlanTrigger,
} from "@/components/ai-elements/plan";

export default function PlanExample() {
  const isStreaming = false;

  return (
    <Plan defaultOpen isStreaming={isStreaming}>
      <PlanHeader>
        <div>
          <PlanTitle>Implementation Plan</PlanTitle>
          <PlanDescription>
            Building a user authentication system with OAuth integration
          </PlanDescription>
        </div>
        <PlanAction>
          <PlanTrigger />
        </PlanAction>
      </PlanHeader>

      <PlanContent>
        <ul className="space-y-2">
          <li>1. Set up authentication provider configuration</li>
          <li>2. Create user database schema</li>
          <li>3. Implement OAuth callback handlers</li>
          <li>4. Add session management</li>
          <li>5. Build login and signup UI components</li>
        </ul>
      </PlanContent>

      <PlanFooter>
        <p className="text-sm text-muted-foreground">
          Estimated time: 2-3 hours
        </p>
      </PlanFooter>
    </Plan>
  );
}
```

## Task Component

Task completion tracking with collapsible sections and file references.

```tsx
"use client";

import {
  Task,
  TaskTrigger,
  TaskContent,
  TaskItem,
  TaskItemFile,
} from "@/components/ai-elements/task";

export default function TaskExample() {
  return (
    <Task defaultOpen>
      <TaskTrigger title="Searching codebase for authentication logic" />
      <TaskContent>
        <TaskItem>
          Found authentication module in{" "}
          <TaskItemFile>src/auth/index.ts</TaskItemFile>
        </TaskItem>
        <TaskItem>
          Located OAuth config in <TaskItemFile>config/oauth.json</TaskItemFile>
        </TaskItem>
        <TaskItem>
          Discovered session handler in{" "}
          <TaskItemFile>lib/session.ts</TaskItemFile>
        </TaskItem>
      </TaskContent>
    </Task>
  );
}
```

## Queue Component

Message and todo queue with attachments and collapsible sections for managing pending tasks.

```tsx
"use client";

import {
  Queue,
  QueueSection,
  QueueSectionTrigger,
  QueueSectionLabel,
  QueueSectionContent,
  QueueList,
  QueueItem,
  QueueItemIndicator,
  QueueItemContent,
  QueueItemDescription,
  QueueItemActions,
  QueueItemAction,
  QueueItemAttachment,
  QueueItemImage,
  QueueItemFile,
} from "@/components/ai-elements/queue";
import { ListTodoIcon, TrashIcon, EditIcon } from "lucide-react";

export default function QueueExample() {
  const todos = [
    { id: "1", title: "Review pull request", completed: false },
    { id: "2", title: "Update documentation", completed: true },
    { id: "3", title: "Fix authentication bug", completed: false },
  ];

  return (
    <Queue>
      <QueueSection defaultOpen>
        <QueueSectionTrigger>
          <QueueSectionLabel
            count={todos.length}
            label="Tasks"
            icon={<ListTodoIcon className="size-4" />}
          />
        </QueueSectionTrigger>

        <QueueSectionContent>
          <QueueList>
            {todos.map((todo) => (
              <QueueItem key={todo.id}>
                <div className="flex items-start gap-2">
                  <QueueItemIndicator completed={todo.completed} />
                  <QueueItemContent completed={todo.completed}>
                    {todo.title}
                  </QueueItemContent>
                  <QueueItemActions>
                    <QueueItemAction>
                      <EditIcon className="size-3" />
                    </QueueItemAction>
                    <QueueItemAction>
                      <TrashIcon className="size-3" />
                    </QueueItemAction>
                  </QueueItemActions>
                </div>
              </QueueItem>
            ))}
          </QueueList>
        </QueueSectionContent>
      </QueueSection>
    </Queue>
  );
}
```

## InlineCitation Component

Inline source citations with hover cards and carousel navigation for multiple sources.

```tsx
"use client";

import {
  InlineCitation,
  InlineCitationText,
  InlineCitationCard,
  InlineCitationCardTrigger,
  InlineCitationCardBody,
  InlineCitationCarousel,
  InlineCitationCarouselHeader,
  InlineCitationCarouselIndex,
  InlineCitationCarouselPrev,
  InlineCitationCarouselNext,
  InlineCitationCarouselContent,
  InlineCitationCarouselItem,
  InlineCitationSource,
  InlineCitationQuote,
} from "@/components/ai-elements/inline-citation";

export default function InlineCitationExample() {
  const sources = [
    "https://react.dev/learn",
    "https://www.typescriptlang.org/docs",
  ];

  return (
    <p>
      <InlineCitation>
        <InlineCitationText>
          React is a JavaScript library for building user interfaces
        </InlineCitationText>
        <InlineCitationCard>
          <InlineCitationCardTrigger sources={sources} />
          <InlineCitationCardBody>
            <InlineCitationCarousel>
              <InlineCitationCarouselHeader>
                <InlineCitationCarouselPrev />
                <InlineCitationCarouselIndex />
                <InlineCitationCarouselNext />
              </InlineCitationCarouselHeader>

              <InlineCitationCarouselContent>
                <InlineCitationCarouselItem>
                  <InlineCitationSource
                    title="React Documentation"
                    url={sources[0]}
                    description="Official React documentation and learning resources"
                  />
                  <InlineCitationQuote>
                    "React lets you build user interfaces out of individual
                    pieces called components."
                  </InlineCitationQuote>
                </InlineCitationCarouselItem>

                <InlineCitationCarouselItem>
                  <InlineCitationSource
                    title="TypeScript Handbook"
                    url={sources[1]}
                    description="Complete guide to TypeScript"
                  />
                </InlineCitationCarouselItem>
              </InlineCitationCarouselContent>
            </InlineCitationCarousel>
          </InlineCitationCardBody>
        </InlineCitationCard>
      </InlineCitation>
    </p>
  );
}
```

## Image Component

AI-generated image display component with support for base64 encoded images.

```tsx
"use client";

import { Image } from "@/components/ai-elements/image";

export default function ImageExample() {
  const generatedImage = {
    base64:
      "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==",
    mediaType: "image/png",
  };

  return (
    <div className="p-4">
      <Image
        base64={generatedImage.base64}
        mediaType={generatedImage.mediaType}
        alt="AI generated image"
        className="max-w-lg"
      />
    </div>
  );
}
```

## OpenIn Component

Open in chat button with dropdown menu for opening content in various AI chat platforms.

```tsx
"use client";

import {
  OpenIn,
  OpenInTrigger,
  OpenInContent,
  OpenInLabel,
  OpenInSeparator,
  OpenInChatGPT,
  OpenInClaude,
  OpenInCursor,
  OpenInv0,
} from "@/components/ai-elements/open-in-chat";

export default function OpenInExample() {
  const query = "Explain React hooks with examples";

  return (
    <OpenIn query={query}>
      <OpenInTrigger />
      <OpenInContent>
        <OpenInLabel>Open in</OpenInLabel>
        <OpenInChatGPT />
        <OpenInClaude />
        <OpenInSeparator />
        <OpenInLabel>Development Tools</OpenInLabel>
        <OpenInCursor />
        <OpenInv0 />
      </OpenInContent>
    </OpenIn>
  );
}
```

## Suggestion Component

Quick action suggestions displayed as horizontal scrollable buttons.

```tsx
"use client";

import { useState } from "react";
import { Suggestions, Suggestion } from "@/components/ai-elements/suggestion";

export default function SuggestionExample() {
  const [input, setInput] = useState("");

  const suggestions = [
    "Explain quantum computing",
    "Write a Python function",
    "Summarize this article",
    "Generate test cases",
    "Review my code",
  ];

  return (
    <div className="w-full max-w-2xl p-4">
      <Suggestions>
        {suggestions.map((suggestion) => (
          <Suggestion
            key={suggestion}
            suggestion={suggestion}
            onClick={(text) => setInput(text)}
          />
        ))}
      </Suggestions>

      {input && (
        <div className="mt-4 text-sm text-muted-foreground">
          Selected: {input}
        </div>
      )}
    </div>
  );
}
```

## Sources Component

Collapsible source citations with expandable content for displaying reference materials.

```tsx
"use client";

import {
  Sources,
  SourcesTrigger,
  SourcesContent,
  Source,
} from "@/components/ai-elements/sources";

export default function SourcesExample() {
  const sources = [
    { title: "OpenAI Documentation", url: "https://platform.openai.com/docs" },
    { title: "React Best Practices", url: "https://react.dev/learn" },
    {
      title: "TypeScript Handbook",
      url: "https://www.typescriptlang.org/docs",
    },
  ];

  return (
    <div className="p-4">
      <Sources>
        <SourcesTrigger count={sources.length} />
        <SourcesContent>
          {sources.map((source) => (
            <Source key={source.url} href={source.url} title={source.title} />
          ))}
        </SourcesContent>
      </Sources>
    </div>
  );
}
```

## Tool Component

Tool usage visualization showing parameters, execution state, and results.

```tsx
"use client";

import {
  Tool,
  ToolHeader,
  ToolContent,
  ToolInput,
  ToolOutput,
} from "@/components/ai-elements/tool";

export default function ToolExample() {
  const toolCall = {
    type: "tool-call-weather",
    state: "output-available" as const,
    input: {
      location: "San Francisco, CA",
      units: "celsius",
    },
    output: {
      temperature: 18,
      conditions: "Partly cloudy",
      humidity: 65,
      windSpeed: 12,
    },
    errorText: undefined,
  };

  return (
    <div className="p-4">
      <Tool defaultOpen>
        <ToolHeader
          title="Get Weather"
          type={toolCall.type}
          state={toolCall.state}
        />
        <ToolContent>
          <ToolInput input={toolCall.input} />
          <ToolOutput output={toolCall.output} errorText={toolCall.errorText} />
        </ToolContent>
      </Tool>
    </div>
  );
}
```

## Confirmation Component

Tool execution approval workflows with accept/reject actions and status display.

```tsx
"use client";

import {
  Confirmation,
  ConfirmationTitle,
  ConfirmationRequest,
  ConfirmationAccepted,
  ConfirmationRejected,
  ConfirmationActions,
  ConfirmationAction,
} from "@/components/ai-elements/confirmation";
import { CheckIcon, XIcon } from "lucide-react";

export default function ConfirmationExample() {
  const approval = {
    approved: undefined,
  };

  const handleApprove = () => {
    console.log("Tool execution approved");
  };

  const handleReject = () => {
    console.log("Tool execution rejected");
  };

  return (
    <Confirmation state="approval-requested" approval={approval}>
      <ConfirmationTitle>
        This tool wants to delete files from your system. Do you approve?
      </ConfirmationTitle>

      <ConfirmationRequest>
        <ConfirmationActions>
          <ConfirmationAction variant="outline" onClick={handleReject}>
            <XIcon className="mr-2 size-4" />
            Reject
          </ConfirmationAction>
          <ConfirmationAction onClick={handleApprove}>
            <CheckIcon className="mr-2 size-4" />
            Approve
          </ConfirmationAction>
        </ConfirmationActions>
      </ConfirmationRequest>

      <ConfirmationAccepted>Tool execution approved</ConfirmationAccepted>

      <ConfirmationRejected>Tool execution rejected</ConfirmationRejected>
    </Confirmation>
  );
}
```

## Reasoning Component

Display AI reasoning and thought processes with collapsible content and auto-timing.

```tsx
"use client";

import { useState, useEffect } from "react";
import {
  Reasoning,
  ReasoningTrigger,
  ReasoningContent,
} from "@/components/ai-elements/reasoning";

export default function ReasoningExample() {
  const [isStreaming, setIsStreaming] = useState(true);
  const [reasoning, setReasoning] = useState("");

  useEffect(() => {
    const thoughts =
      "First, I need to understand the question. The user is asking about the capital of France. This is a straightforward geographical question. Paris is the capital and largest city of France.";

    let index = 0;
    const interval = setInterval(() => {
      if (index < thoughts.length) {
        setReasoning(thoughts.slice(0, index + 1));
        index++;
      } else {
        setIsStreaming(false);
        clearInterval(interval);
      }
    }, 20);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="p-4">
      <Reasoning isStreaming={isStreaming} defaultOpen>
        <ReasoningTrigger />
        <ReasoningContent>{reasoning}</ReasoningContent>
      </Reasoning>
    </div>
  );
}
```

## Context Component

Display token consumption and cost tracking with hover card visualization.

```tsx
"use client";

import {
  Context,
  ContextTrigger,
  ContextContent,
  ContextContentHeader,
  ContextContentBody,
  ContextContentFooter,
  ContextInputUsage,
  ContextOutputUsage,
  ContextReasoningUsage,
  ContextCacheUsage,
} from "@/components/ai-elements/context";

export default function ContextExample() {
  const usage = {
    inputTokens: 1250,
    outputTokens: 480,
    reasoningTokens: 2100,
    cachedInputTokens: 8500,
  };

  return (
    <div className="p-4">
      <Context
        usedTokens={12330}
        maxTokens={128000}
        usage={usage}
        modelId="gpt-4-1106-preview"
      >
        <ContextTrigger />
        <ContextContent>
          <ContextContentHeader />
          <ContextContentBody>
            <div className="space-y-2">
              <ContextInputUsage />
              <ContextOutputUsage />
              <ContextReasoningUsage />
              <ContextCacheUsage />
            </div>
          </ContextContentBody>
          <ContextContentFooter />
        </ContextContent>
      </Context>
    </div>
  );
}
```

## Artifact Component

Display code or document artifacts with customizable headers, actions, and content areas.

```tsx
"use client";

import { useState } from "react";
import {
  Artifact,
  ArtifactHeader,
  ArtifactTitle,
  ArtifactDescription,
  ArtifactActions,
  ArtifactAction,
  ArtifactClose,
  ArtifactContent,
} from "@/components/ai-elements/artifact";
import { CodeBlock } from "@/components/ai-elements/code-block";
import { CopyIcon, DownloadIcon } from "lucide-react";

export default function ArtifactExample() {
  const [isOpen, setIsOpen] = useState(true);

  if (!isOpen) return null;

  const code = `export default function HelloWorld() {
  return <h1>Hello, World!</h1>;
}`;

  return (
    <Artifact className="w-full max-w-2xl">
      <ArtifactHeader>
        <div>
          <ArtifactTitle>React Component</ArtifactTitle>
          <ArtifactDescription>
            A simple hello world component
          </ArtifactDescription>
        </div>
        <ArtifactActions>
          <ArtifactAction
            tooltip="Copy code"
            icon={CopyIcon}
            onClick={() => navigator.clipboard.writeText(code)}
          />
          <ArtifactAction
            tooltip="Download"
            icon={DownloadIcon}
            onClick={() => {
              const blob = new Blob([code], { type: "text/plain" });
              const url = URL.createObjectURL(blob);
              const a = document.createElement("a");
              a.href = url;
              a.download = "HelloWorld.tsx";
              a.click();
            }}
          />
          <ArtifactClose onClick={() => setIsOpen(false)} />
        </ArtifactActions>
      </ArtifactHeader>
      <ArtifactContent>
        <CodeBlock code={code} language="tsx" showLineNumbers />
      </ArtifactContent>
    </Artifact>
  );
}
```

## WebPreview Component

Embedded web page previews with navigation controls and console output.

```tsx
"use client";

import {
  WebPreview,
  WebPreviewNavigation,
  WebPreviewNavigationButton,
  WebPreviewUrl,
  WebPreviewBody,
  WebPreviewConsole,
} from "@/components/ai-elements/web-preview";
import { RefreshCwIcon, ArrowLeftIcon, ArrowRightIcon } from "lucide-react";

export default function WebPreviewExample() {
  const logs = [
    {
      level: "log" as const,
      message: "Application started",
      timestamp: new Date(),
    },
    {
      level: "warn" as const,
      message: "Deprecated API usage",
      timestamp: new Date(),
    },
    {
      level: "error" as const,
      message: "Failed to load resource",
      timestamp: new Date(),
    },
  ];

  return (
    <WebPreview defaultUrl="https://example.com" className="h-[600px]">
      <WebPreviewNavigation>
        <WebPreviewNavigationButton tooltip="Back">
          <ArrowLeftIcon className="size-4" />
        </WebPreviewNavigationButton>
        <WebPreviewNavigationButton tooltip="Forward">
          <ArrowRightIcon className="size-4" />
        </WebPreviewNavigationButton>
        <WebPreviewNavigationButton tooltip="Refresh">
          <RefreshCwIcon className="size-4" />
        </WebPreviewNavigationButton>
        <WebPreviewUrl />
      </WebPreviewNavigation>

      <WebPreviewBody />

      <WebPreviewConsole logs={logs} />
    </WebPreview>
  );
}
```

## Shimmer Component

Text shimmer animation effect for loading states and streaming text.

```tsx
"use client";

import { Shimmer } from "@/components/ai-elements/shimmer";

export default function ShimmerExample() {
  return (
    <div className="p-4">
      <Shimmer as="h1" className="text-4xl font-bold" duration={2} spread={2}>
        Loading amazing content...
      </Shimmer>

      <Shimmer as="p" className="mt-4 text-lg">
        This text appears with a shimmer effect while streaming
      </Shimmer>
    </div>
  );
}
```

## Loader Component

Animated loading spinner with customizable size for indicating processing states.

```tsx
"use client";

import { Loader } from "@/components/ai-elements/loader";

export default function LoaderExample() {
  return (
    <div className="flex items-center gap-4 p-4">
      <Loader size={16} />
      <Loader size={24} />
      <Loader size={32} />

      <div className="flex items-center gap-2">
        <Loader size={16} />
        <span className="text-sm text-muted-foreground">Processing...</span>
      </div>
    </div>
  );
}
```

## Workflow Components

ReactFlow-based workflow visualization components for building interactive node graphs and canvas editors.

```tsx
"use client";

import { ReactFlow } from "@xyflow/react";
import {
  Canvas,
  CanvasBackground,
  CanvasMinimap,
} from "@/components/ai-elements/canvas";
import {
  Controls,
  ControlsZoomIn,
  ControlsZoomOut,
  ControlsFitView,
} from "@/components/ai-elements/controls";
import { Node, NodeHeader, NodeContent } from "@/components/ai-elements/node";
import { Edge } from "@/components/ai-elements/edge";
import { Panel } from "@/components/ai-elements/panel";
import { Toolbar, ToolbarButton } from "@/components/ai-elements/toolbar";

export default function WorkflowExample() {
  const nodes = [
    {
      id: "1",
      type: "custom",
      position: { x: 100, y: 100 },
      data: { label: "Start Node" },
    },
    {
      id: "2",
      type: "custom",
      position: { x: 300, y: 100 },
      data: { label: "Process Node" },
    },
  ];

  const edges = [
    {
      id: "e1-2",
      source: "1",
      target: "2",
      type: "custom",
    },
  ];

  const nodeTypes = {
    custom: (props: any) => (
      <Node {...props}>
        <NodeHeader>{props.data.label}</NodeHeader>
        <NodeContent>Node content here</NodeContent>
        <Toolbar>
          <ToolbarButton onClick={() => console.log("Edit")}>
            Edit
          </ToolbarButton>
          <ToolbarButton onClick={() => console.log("Delete")}>
            Delete
          </ToolbarButton>
        </Toolbar>
      </Node>
    ),
  };

  const edgeTypes = {
    custom: Edge,
  };

  return (
    <div className="h-[600px] w-full">
      <Canvas>
        <ReactFlow
          nodes={nodes}
          edges={edges}
          nodeTypes={nodeTypes}
          edgeTypes={edgeTypes}
          fitView
        >
          <CanvasBackground />
          <CanvasMinimap />

          <Controls>
            <ControlsZoomIn />
            <ControlsZoomOut />
            <ControlsFitView />
          </Controls>

          <Panel position="top-left">
            <div className="bg-background p-4 rounded-lg shadow-lg">
              Workflow Editor
            </div>
          </Panel>
        </ReactFlow>
      </Canvas>
    </div>
  );
}
```

## Complete Chat Application

Full-featured chat application combining multiple components with streaming and attachments.

```tsx
"use client";

import { useChat } from "@ai-sdk/react";
import {
  Conversation,
  ConversationContent,
  ConversationEmptyState,
  ConversationScrollButton,
} from "@/components/ai-elements/conversation";
import {
  Message,
  MessageContent,
  MessageAvatar,
} from "@/components/ai-elements/message";
import { Response } from "@/components/ai-elements/response";
import {
  PromptInput,
  PromptInputTextarea,
  PromptInputToolbar,
  PromptInputTools,
  PromptInputSubmit,
  PromptInputAttachments,
  PromptInputAttachment,
  PromptInputActionMenu,
  PromptInputActionMenuTrigger,
  PromptInputActionMenuContent,
  PromptInputActionAddAttachments,
} from "@/components/ai-elements/prompt-input";
import { Suggestions, Suggestion } from "@/components/ai-elements/suggestion";
import { Loader } from "@/components/ai-elements/loader";
import { MessageSquareIcon } from "lucide-react";

export default function CompleteChat() {
  const { messages, status, append, input, setInput } = useChat({
    api: "/api/chat",
  });

  const suggestions = [
    "Explain how React hooks work",
    "Write a REST API with Express",
    "Debug my TypeScript code",
  ];

  return (
    <div className="flex h-screen flex-col">
      <Conversation className="flex-1">
        <ConversationContent>
          {messages.length === 0 ? (
            <ConversationEmptyState
              title="Start a conversation"
              description="Ask me anything or try one of the suggestions below"
              icon={<MessageSquareIcon className="size-8" />}
            />
          ) : (
            messages.map((message, index) => (
              <Message key={index} from={message.role}>
                <MessageContent>
                  <Response>{message.content}</Response>
                </MessageContent>
                <MessageAvatar
                  src={message.role === "user" ? "/user.png" : "/ai.png"}
                  name={message.role === "user" ? "You" : "AI"}
                />
              </Message>
            ))
          )}
          {status === "streaming" && (
            <div className="flex items-center gap-2 py-4">
              <Loader size={16} />
              <span className="text-sm text-muted-foreground">
                AI is thinking...
              </span>
            </div>
          )}
        </ConversationContent>
        <ConversationScrollButton />
      </Conversation>

      {messages.length === 0 && (
        <div className="border-t p-4">
          <Suggestions>
            {suggestions.map((suggestion) => (
              <Suggestion
                key={suggestion}
                suggestion={suggestion}
                onClick={(text) => setInput(text)}
              />
            ))}
          </Suggestions>
        </div>
      )}

      <div className="border-t p-4">
        <PromptInput
          accept="image/*"
          multiple
          onSubmit={async (message) => {
            await append({
              role: "user",
              content: [
                { type: "text", text: message.text || "" },
                ...(message.files || []),
              ],
            });
          }}
        >
          <PromptInputAttachments>
            {(attachment) => <PromptInputAttachment data={attachment} />}
          </PromptInputAttachments>

          <PromptInputTextarea placeholder="Ask me anything..." />

          <PromptInputToolbar>
            <PromptInputTools>
              <PromptInputActionMenu>
                <PromptInputActionMenuTrigger />
                <PromptInputActionMenuContent>
                  <PromptInputActionAddAttachments />
                </PromptInputActionMenuContent>
              </PromptInputActionMenu>
            </PromptInputTools>

            <PromptInputSubmit status={status} />
          </PromptInputToolbar>
        </PromptInput>
      </div>
    </div>
  );
}
```

## Summary

AI Elements provides a comprehensive set of React components for building sophisticated AI applications with minimal setup. The library handles complex interactions like streaming responses, file attachments, token tracking, tool visualization, approval workflows, branch navigation, chain-of-thought displays, and web previews while maintaining full customizability. Each component is designed to work independently or as part of a complete system, making it easy to build anything from simple chatbots to advanced AI assistants with reasoning displays, multi-modal inputs, and interactive workflow editors.

The composable architecture allows developers to mix and match components based on their needs, while the integration with the Vercel AI SDK ensures seamless streaming and state management. All components support TypeScript for type safety, include accessibility features, and adapt automatically to light and dark themes. Since components are installed directly into your codebase rather than imported from node_modules, you have complete control over styling, behavior, and functionality. The library is organized into three categories: Chatbot components for conversational interfaces, Vibe-Coding components for code artifacts and previews, and Workflow components for building visual workflow editors with ReactFlow integration.
