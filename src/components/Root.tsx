import React, { type FC } from "react";
// import WebApp from "@twa-dev/sdk";
import { App } from "@/components/App.tsx";
import { ErrorBoundary } from "@/components/ErrorBoundary.tsx";
import { retrieveLaunchParams } from "@telegram-apps/sdk-react";

const ErrorBoundaryError: FC<{ error: unknown }> = ({ error }) => (
  <div>
    <p>An unhandled error occurred:</p>
    <blockquote>
      <code>
        {error instanceof Error
          ? error.message
          : typeof error === "string"
          ? error
          : JSON.stringify(error)}
      </code>
    </blockquote>
  </div>
);
console.log(retrieveLaunchParams());
const { initDataRaw, initData } = retrieveLaunchParams();
console.log(initDataRaw);
console.log(initData);

export const Root: FC = () => (
  <React.StrictMode>
    <ErrorBoundary fallback={ErrorBoundaryError}>
      <App />
    </ErrorBoundary>
  </React.StrictMode>
);
