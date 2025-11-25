# Daytona SDK

## Introduction

Daytona SDK is an official software development kit providing TypeScript/JavaScript and Python interfaces for programmatically creating, managing, and interacting with Daytona Sandboxes. These are secure, isolated development environments designed for safely executing code, managing data processing pipelines, and automating development infrastructure. The SDK abstracts the complexity of the underlying Daytona API, offering a developer-friendly interface for sandbox lifecycle management, file operations, Git operations, process execution, and Language Server Protocol (LSP) integration.

The SDK excels in scenarios requiring secure code execution, particularly for AI-generated code, data processing workflows, and machine learning model deployment. It supports flexible deployment across multiple infrastructure providers including AWS, GCP, Azure, Kubernetes clusters, and bare metal servers. With configurable isolation levels (Sysbox, LVMs, VMs) and dynamic resource allocation, Daytona SDK enables developers to create ephemeral, scalable environments for parallel code generation, distributed processing, and multi-tenant applications while maintaining security when running untrusted code or processing sensitive data.

## APIs and Key Functions

### Create and Manage Sandbox

Initialize Daytona client and create isolated sandbox environments with configurable resources.

```typescript
import { Daytona } from "@daytonaio/sdk";

// Initialize with default configuration (uses environment variables)
const daytona = new Daytona();

// Or initialize with explicit configuration
const daytonaWithConfig = new Daytona({
  apiKey: "your-api-key",
  apiUrl: "https://app.daytona.io/api",
  target: "us", // 'us', 'eu', or 'asia'
});

// Create a basic sandbox
const sandbox = await daytona.create();

// Create sandbox with custom configuration
const customSandbox = await daytona.create({
  language: "python",
  image: "custom-docker-image:latest",
  user: "daytona",
  envVars: {
    DATABASE_URL: "postgresql://localhost/db",
    API_KEY: "secret-key",
  },
  labels: {
    environment: "production",
    team: "data-science",
  },
  resources: {
    cpu: 4, // 4 CPU cores
    memory: 8, // 8GB RAM
    disk: 50, // 50GB disk
    gpu: 1, // 1 GPU unit
  },
  autoStopInterval: 60, // Auto-stop after 60 minutes (0 = disabled)
  public: true, // Enable public port preview
  timeout: 120, // Creation timeout in seconds
});

console.log(`Created sandbox with ID: ${customSandbox.id}`);
```

### Execute Code in Sandbox

Run code directly or execute shell commands in isolated sandbox environments with proper error handling.

```typescript
import { Daytona } from "@daytonaio/sdk";

const daytona = new Daytona();
const sandbox = await daytona.create({ language: "typescript" });

try {
  // Execute TypeScript code directly
  const codeResult = await sandbox.process.codeRun(`
    const numbers = [1, 2, 3, 4, 5];
    const sum = numbers.reduce((acc, n) => acc + n, 0);
    console.log(\`Sum: \${sum}\`);
    console.log(\`Average: \${sum / numbers.length}\`);
  `);

  if (codeResult.exitCode === 0) {
    console.log("Code output:", codeResult.result);
  } else {
    console.error("Code execution failed:", codeResult.result);
  }

  // Execute shell command with timeout
  const cmdResult = await sandbox.process.executeCommand(
    "ls -la /home/daytona",
    "/home/daytona", // working directory
    { HOME: "/home/daytona" }, // environment variables
    30 // timeout in seconds
  );

  console.log("Command output:", cmdResult.result);
  console.log("Exit code:", cmdResult.exitCode);
} catch (error) {
  console.error("Execution error:", error);
} finally {
  await daytona.delete(sandbox);
}
```

### Session-Based Command Execution

Create persistent shell sessions to maintain environment variables and state across multiple commands.

```typescript
import { Daytona } from "@daytonaio/sdk";

const daytona = new Daytona();
const sandbox = await daytona.create({ language: "typescript" });

try {
  // Create a persistent session
  const sessionId = "my-session";
  await sandbox.process.createSession(sessionId);

  // Execute first command to set environment variables
  await sandbox.process.executeSessionCommand(sessionId, {
    command: "export DATABASE_URL=postgresql://localhost/mydb",
  });

  await sandbox.process.executeSessionCommand(sessionId, {
    command: "export API_KEY=secret-123",
  });

  // Verify environment variables persist in the session
  const envCheck = await sandbox.process.executeSessionCommand(sessionId, {
    command: 'echo "DB: $DATABASE_URL, Key: $API_KEY"',
  });
  console.log("Environment:", envCheck.output);

  // Execute long-running command asynchronously
  const asyncCmd = await sandbox.process.executeSessionCommand(sessionId, {
    command: 'for i in {1..5}; do echo "Progress: $i"; sleep 1; done',
    runAsync: true,
  });

  // Stream logs as they become available
  await sandbox.process.getSessionCommandLogs(
    sessionId,
    asyncCmd.cmdId!,
    (chunk) => {
      console.log("Log chunk:", chunk);
    }
  );

  // Get session details
  const session = await sandbox.process.getSession(sessionId);
  console.log("Session commands:", session.commands?.length);

  // Clean up session
  await sandbox.process.deleteSession(sessionId);
} finally {
  await daytona.delete(sandbox);
}
```

### File Operations

Upload, download, search, and manipulate files within sandbox environments.

```typescript
import { Daytona } from "@daytonaio/sdk";
import * as fs from "fs";
import * as path from "path";

const daytona = new Daytona();
const sandbox = await daytona.create();

try {
  const projectDir = "~/project-files";

  // Create directory
  await sandbox.fs.createFolder(projectDir, "755");

  // Upload multiple files at once
  await sandbox.fs.uploadFiles([
    {
      source: "local-file.txt", // Local file path
      destination: path.join(projectDir, "uploaded.txt"),
    },
    {
      source: Buffer.from(
        JSON.stringify(
          {
            name: "config",
            version: "1.0.0",
            debug: true,
          },
          null,
          2
        )
      ),
      destination: path.join(projectDir, "config.json"),
    },
    {
      source: Buffer.from('#!/bin/bash\necho "Hello World"\n'),
      destination: path.join(projectDir, "script.sh"),
    },
  ]);

  // List files in directory
  const files = await sandbox.fs.listFiles(projectDir);
  console.log(
    "Files:",
    files.map((f) => f.name)
  );

  // Search for files matching pattern
  const jsonFiles = await sandbox.fs.searchFiles(projectDir, "*.json");
  console.log("JSON files found:", jsonFiles.files.length);

  // Find files containing specific content
  const matches = await sandbox.fs.findFiles(projectDir, '"debug": true');
  console.log("Files with debug=true:", matches);

  // Replace content in files
  await sandbox.fs.replaceInFiles(
    [path.join(projectDir, "config.json")],
    '"debug": true',
    '"debug": false'
  );

  // Download file
  const configContent = await sandbox.fs.downloadFile(
    path.join(projectDir, "config.json")
  );
  console.log("Updated config:", configContent.toString());

  // Get file details
  const fileInfo = await sandbox.fs.getFileDetails(
    path.join(projectDir, "config.json")
  );
  console.log("File size:", fileInfo.size, "bytes");
  console.log("Modified:", fileInfo.modifiedTime);

  // Set file permissions
  await sandbox.fs.setFilePermissions(path.join(projectDir, "script.sh"), {
    mode: "755",
  });

  // Move/rename files
  await sandbox.fs.moveFiles(
    path.join(projectDir, "uploaded.txt"),
    path.join(projectDir, "renamed.txt")
  );

  // Delete file
  await sandbox.fs.deleteFile(path.join(projectDir, "renamed.txt"));
} finally {
  await daytona.delete(sandbox);
}
```

### Git Operations

Clone repositories, manage branches, commit changes, and sync with remote repositories.

```typescript
import { Daytona } from "@daytonaio/sdk";

const daytona = new Daytona();
const sandbox = await daytona.create({ language: "typescript" });

try {
  const repoPath = "~/my-project";

  // Clone repository
  await sandbox.git.clone(
    "https://github.com/username/repository.git",
    repoPath,
    "main", // branch
    undefined, // commitId (optional)
    "username", // for private repos
    "access-token" // for private repos
  );

  // Check repository status
  const status = await sandbox.git.status(repoPath);
  console.log("Branch:", status.currentBranch);
  console.log("Modified files:", status.fileStatus?.length);

  // List branches
  const branches = await sandbox.git.branches(repoPath);
  console.log(
    "Branches:",
    branches.branches?.map((b) => b.name)
  );

  // Make changes to files
  await sandbox.fs.uploadFile(
    Buffer.from("# New Feature\n\nThis adds new functionality."),
    `${repoPath}/CHANGES.md`
  );

  // Stage files
  await sandbox.git.add(repoPath, ["."]);

  // Commit changes
  const commit = await sandbox.git.commit(
    repoPath,
    "Add new feature documentation",
    "Developer Name",
    "dev@example.com"
  );
  console.log("Commit SHA:", commit.sha);

  // Push to remote
  await sandbox.git.push(repoPath, "username", "access-token");

  // Pull latest changes
  await sandbox.git.pull(repoPath, "username", "access-token");
} finally {
  await daytona.delete(sandbox);
}
```

### Language Server Protocol (LSP)

Enable IDE-like features including code completion, symbol search, and code analysis.

```typescript
import { Daytona } from "@daytonaio/sdk";

const daytona = new Daytona();
const sandbox = await daytona.create({ language: "typescript" });

try {
  const projectDir = "~/typescript-project";

  // Clone a TypeScript project
  await sandbox.git.clone(
    "https://github.com/panaverse/learn-typescript",
    projectDir,
    "master"
  );

  // Create and start LSP server
  const lsp = await sandbox.createLspServer("typescript", projectDir);
  await lsp.start();

  const targetFile = `${projectDir}/step00_helloworld/index.ts`;

  // Open document in LSP
  await lsp.didOpen(targetFile);

  // Get document symbols (functions, classes, variables)
  const symbols = await lsp.documentSymbols(targetFile);
  console.log("Document symbols:");
  symbols.forEach((symbol) => {
    console.log(`- ${symbol.name} (${symbol.kind})`);
  });

  // Get code completions at specific position
  const completions = await lsp.completions(targetFile, {
    line: 10,
    character: 5,
  });
  console.log("Available completions:");
  completions.items?.forEach((item) => {
    console.log(`- ${item.label}: ${item.detail || "no detail"}`);
  });

  // Search for symbols across entire workspace
  const workspaceSymbols = await lsp.workspaceSymbols("function");
  console.log("Functions in workspace:", workspaceSymbols.length);

  // Close document when done
  await lsp.didClose(targetFile);

  // Stop LSP server
  await lsp.stop();
} finally {
  await daytona.delete(sandbox);
}
```

### Persistent Volumes

Create and manage persistent storage volumes that can be shared across multiple sandboxes.

```typescript
import { Daytona } from "@daytonaio/sdk";
import * as path from "path";

const daytona = new Daytona();

try {
  // Create or get existing volume
  const volume = await daytona.volume.get("shared-data", true);
  console.log("Volume ID:", volume.id);

  // Create first sandbox with volume mounted
  const sandbox1 = await daytona.create({
    language: "python",
    volumes: [
      {
        volumeId: volume.id,
        mountPath: "/home/daytona/shared",
      },
    ],
  });

  // Write data to volume from first sandbox
  await sandbox1.fs.createFolder("/home/daytona/shared/datasets", "755");
  await sandbox1.fs.uploadFile(
    Buffer.from(
      "user_id,name,email\n1,Alice,alice@example.com\n2,Bob,bob@example.com"
    ),
    "/home/daytona/shared/datasets/users.csv"
  );

  // Create second sandbox with same volume mounted at different path
  const sandbox2 = await daytona.create({
    language: "python",
    volumes: [
      {
        volumeId: volume.id,
        mountPath: "/data",
      },
    ],
  });

  // Access data from second sandbox
  const files = await sandbox2.fs.listFiles("/data/datasets");
  console.log(
    "Files in volume:",
    files.map((f) => f.name)
  );

  const csvData = await sandbox2.fs.downloadFile("/data/datasets/users.csv");
  console.log("CSV content:", csvData.toString());

  // Process data in second sandbox
  const result = await sandbox2.process.codeRun(`
import pandas as pd
df = pd.read_csv('/data/datasets/users.csv')
print(f"Total users: {len(df)}")
print(df.to_string())
  `);
  console.log("Processing result:", result.result);

  // Clean up sandboxes (volume persists)
  await daytona.delete(sandbox1);
  await daytona.delete(sandbox2);

  // List all volumes
  const volumes = await daytona.volume.list();
  console.log("Total volumes:", volumes.length);

  // Delete volume when no longer needed
  // await daytona.volume.delete(volume)
} catch (error) {
  console.error("Volume operation error:", error);
}
```

### Data Visualization with Charts

Execute Python code with matplotlib and extract chart metadata and images.

```typescript
import {
  Daytona,
  ChartType,
  LineChart,
  BarChart,
  PieChart,
} from "@daytonaio/sdk";
import * as fs from "fs";

const daytona = new Daytona();
const sandbox = await daytona.create();

try {
  const pythonCode = `
import matplotlib.pyplot as plt
import numpy as np

# Create line chart
x = np.linspace(0, 10, 50)
y = np.sin(x)

plt.figure(figsize=(10, 6))
plt.plot(x, y, 'b-', linewidth=2, label='sin(x)')
plt.title('Sine Wave')
plt.xlabel('X axis (radians)')
plt.ylabel('Y axis (amplitude)')
plt.grid(True)
plt.legend()
plt.show()

# Create bar chart
categories = ['Q1', 'Q2', 'Q3', 'Q4']
revenues = [120000, 150000, 180000, 200000]

plt.figure(figsize=(8, 6))
plt.bar(categories, revenues, color='skyblue')
plt.title('Quarterly Revenue')
plt.xlabel('Quarter')
plt.ylabel('Revenue ($)')
plt.show()
  `;

  const response = await sandbox.process.codeRun(pythonCode);

  if (response.exitCode !== 0) {
    console.error("Execution failed:", response.result);
    return;
  }

  console.log("Generated", response.artifacts?.charts?.length, "charts");

  // Process each chart
  for (const chart of response.artifacts?.charts || []) {
    console.log(`\nChart: ${chart.title}`);
    console.log(`Type: ${chart.type}`);

    // Save chart image
    if (chart.png) {
      const imgData = Buffer.from(chart.png, "base64");
      const filename = `${chart.title?.replace(/\s+/g, "_") || "chart"}.png`;
      fs.writeFileSync(filename, imgData);
      console.log(`Saved: ${filename}`);
    }

    // Access chart-specific metadata
    if (chart.type === ChartType.LINE) {
      const lineChart = chart as LineChart;
      console.log("X Label:", lineChart.x_label);
      console.log("Y Label:", lineChart.y_label);
      console.log("X Scale:", lineChart.x_scale);
      console.log("Y Scale:", lineChart.y_scale);
      console.log("Data points:", lineChart.elements?.[0]?.points?.length);
    } else if (chart.type === ChartType.BAR) {
      const barChart = chart as BarChart;
      console.log("X Label:", barChart.x_label);
      console.log("Y Label:", barChart.y_label);
      console.log("Bars:", barChart.elements?.length);
    }
  }
} finally {
  await daytona.delete(sandbox);
}
```

### Sandbox Lifecycle Management

Manage sandbox state, retrieve information, and control auto-stop behavior.

```typescript
import { Daytona } from "@daytonaio/sdk";

const daytona = new Daytona();

try {
  // Create sandbox
  console.log("Creating sandbox...");
  const sandbox = await daytona.create({
    language: "python",
    labels: { environment: "development", project: "ml-pipeline" },
  });
  console.log("Created:", sandbox.id);

  // Set custom labels
  await sandbox.setLabels({
    environment: "staging",
    version: "2.0",
    team: "data-science",
  });

  // Configure auto-stop (in minutes, 0 = disabled)
  await sandbox.setAutostopInterval(120);

  // Get sandbox information
  const info = await sandbox.info();
  console.log("State:", info.state);
  console.log("Resources:", info.resources);
  console.log("Labels:", info.labels);

  // Stop sandbox
  console.log("Stopping sandbox...");
  await sandbox.stop();
  console.log("Sandbox stopped");

  // Start sandbox again
  console.log("Starting sandbox...");
  await sandbox.start(60); // timeout in seconds
  console.log("Sandbox started");

  // Wait until sandbox is fully started
  await sandbox.waitUntilStarted(90);

  // Get preview URL for port
  const previewUrl = await sandbox.getPreviewLink(8080);
  console.log("Preview URL:", previewUrl.url);

  // Retrieve existing sandbox by ID
  const existingSandbox = await daytona.get(sandbox.id);
  console.log("Retrieved sandbox:", existingSandbox.id);

  // List all sandboxes
  const allSandboxes = await daytona.list();
  console.log("Total sandboxes:", allSandboxes.length);

  // Find sandbox by labels
  const devSandbox = await daytona.findOne({
    labels: { environment: "staging", team: "data-science" },
  });
  console.log("Found sandbox:", devSandbox?.id);

  // Archive sandbox (stops and prepares for deletion)
  await sandbox.archive();
  console.log("Sandbox archived");

  // Delete sandbox
  console.log("Deleting sandbox...");
  await daytona.delete(sandbox, 60);
  console.log("Sandbox deleted");
} catch (error) {
  console.error("Lifecycle error:", error);
}
```

## Summary

Daytona SDK provides comprehensive tooling for programmatic management of secure, isolated development environments. The primary use cases include safely executing AI-generated code in production systems, building automated data processing pipelines with configurable compute resources, deploying and testing machine learning models in isolated environments, and creating ephemeral development environments for CI/CD workflows. The SDK's strong typing, comprehensive error handling, and rich feature set make it suitable for building multi-tenant applications, running untrusted code securely, and managing complex distributed computing workflows.

Integration patterns typically involve initializing the Daytona client with appropriate credentials, creating sandboxes with custom resource allocations and configurations, performing file operations and code execution, managing persistent data through volumes, and cleaning up resources when complete. The SDK supports both TypeScript/JavaScript and Python with identical feature parity, enabling seamless integration into existing codebases. Advanced features like LSP integration enable building IDE-like experiences, while session-based command execution provides persistent shell environments for complex workflows. The chart extraction capabilities make it particularly well-suited for data science and visualization workflows where matplotlib plots need to be generated, extracted, and processed programmatically.
