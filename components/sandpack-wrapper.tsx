"use client";

import {
  Sandpack,
  type SandpackProps,
  SandpackProvider,
  SandpackLayout,
  SandpackCodeEditor,
  SandpackPreview,
} from "@codesandbox/sandpack-react";
import { aquaBlue } from "@codesandbox/sandpack-themes";

export function SandpackExample(props: SandpackProps) {
  return (
    <Sandpack
      theme={aquaBlue}
      options={{
        showLineNumbers: true,
        showTabs: true,
        editorHeight: 400,
        ...props.options,
      }}
      {...props}
    />
  );
}

export function SandpackLive({
  files,
  template = "react-ts",
  dependencies,
  editorHeight = 450,
}: {
  files: Record<string, string>;
  template?: SandpackProps["template"];
  dependencies?: Record<string, string>;
  editorHeight?: number;
}) {
  return (
    <SandpackProvider
      template={template}
      theme={aquaBlue}
      files={files}
      customSetup={dependencies ? { dependencies } : undefined}
    >
      <SandpackLayout>
        <SandpackCodeEditor
          showLineNumbers
          showTabs
          style={{ height: `${editorHeight}px` }}
        />
        <SandpackPreview style={{ height: `${editorHeight}px` }} />
      </SandpackLayout>
    </SandpackProvider>
  );
}

export function SandpackCodeOnly({
  files,
  template = "vanilla-ts",
}: {
  files: Record<string, string>;
  template?: SandpackProps["template"];
}) {
  return (
    <Sandpack
      template={template}
      theme={aquaBlue}
      files={files}
      options={{
        showLineNumbers: true,
        showTabs: true,
        editorHeight: 350,
        showConsole: true,
        showConsoleButton: true,
      }}
    />
  );
}
