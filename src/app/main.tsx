import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { init as SentryInit } from "@sentry/browser";
import { GlobalErrorListener } from "./error/ui/global-listener";
import { RouterProvider } from "./providers/router.provider";
import { ThemeProvider } from "./theme/theme-provider";
import { environtment } from "@/config/environtment";
import { Toaster } from "sonner";
import "@/app/styles/reset.css";
import "@/app/styles/fonts.css";

// Suppress browser extension errors in console
if (environtment.env === "development") {
  const originalError = console.error;
  console.error = (...args) => {
    if (
      typeof args[0] === "string" &&
      args[0].includes("extension port") &&
      args[0].includes("back/forward cache")
    ) {
      return;
    }
    originalError.apply(console, args);
  };
}

SentryInit({
  dsn: environtment.dsn,
  // TODO: Configure Sentry / Glitchtip properly later
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <GlobalErrorListener />
      <RouterProvider />
      <Toaster />
    </ThemeProvider>
  </StrictMode>,
);
