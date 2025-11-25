"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Loader } from "@/components/ai-elements/loader";
import { Shimmer } from "@/components/ai-elements/shimmer";
import { MessageSquare, Sparkles, Code2, Workflow } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="flex items-center gap-3 mb-6">
            <Loader size={32} />
            <Shimmer as="h1" className="text-4xl font-bold tracking-tight">
              MCP Demo
            </Shimmer>
          </div>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Next.js + TailwindCSS + shadcn/ui + AI Elements
          </p>
          <p className="text-muted-foreground mt-2">
            Project boilerplate is ready for your presentation demo
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Card>
            <CardHeader>
              <MessageSquare className="size-8 mb-2 text-primary" />
              <CardTitle>Chatbot Components</CardTitle>
              <CardDescription>
                Conversation, Message, PromptInput, Response
              </CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <Sparkles className="size-8 mb-2 text-primary" />
              <CardTitle>AI Features</CardTitle>
              <CardDescription>
                Reasoning, ChainOfThought, Tool, Confirmation
              </CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <Code2 className="size-8 mb-2 text-primary" />
              <CardTitle>Code Components</CardTitle>
              <CardDescription>CodeBlock, Artifact, WebPreview</CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <Workflow className="size-8 mb-2 text-primary" />
              <CardTitle>Workflow Canvas</CardTitle>
              <CardDescription>
                ReactFlow-based Node, Edge, Canvas
              </CardDescription>
            </CardHeader>
          </Card>
        </div>

        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle>Ready to Build</CardTitle>
            <CardDescription>
              All AI Elements components have been installed and configured
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-4">
            <div className="flex flex-wrap gap-2">
              <Button>Primary Button</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="ghost">Ghost</Button>
            </div>
            <p className="text-sm text-muted-foreground">
              Check{" "}
              <code className="bg-muted px-1.5 py-0.5 rounded">
                src/components/ai-elements/
              </code>{" "}
              for all available components
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
