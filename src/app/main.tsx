import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { QueryClientProvider } from "./providers/query-client.provider";
import { init as SentryInit } from "@sentry/browser";
import { GlobalErrorListener } from "./error/ui/global-listener";
import { RouterProvider } from "./providers/router.provider";
import { ThemeProvider } from "./theme/theme-provider";
import { environtment } from "@/config/environtment";
import { Toaster } from "sonner";
import "@/app/styles/reset.css";

SentryInit({
  dsn: environtment.dsn,
  // TODO: Configure Sentry / Glitchtip properly later
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <QueryClientProvider>
        <GlobalErrorListener />
        <RouterProvider />
        <Toaster />
      </QueryClientProvider>
    </ThemeProvider>
  </StrictMode>,
);
