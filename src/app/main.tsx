import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { init as SentryInit } from "@sentry/browser";
import { GlobalErrorListener } from "./error/ui/global-listener";
import { RouterProvider } from "./providers/router.provider";
import { ThemeProvider } from "./theme/theme-provider";
import { environtment } from "@/config/environtment";
import { Toaster } from "sonner";
import { Helmet, HelmetProvider } from "react-helmet-async";
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
    <HelmetProvider>
      <ThemeProvider>
        <Helmet>
          <link
            rel="preload"
            href="/fonts/Satoshi-Variable.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />

          <link
            rel="preload"
            href="/fonts/Satoshi-VariableItalic.woff2"
            as="font"
            type="font/woff2"
            crossOrigin={"anonymous"}
          />

          <link
            rel="preload"
            href="/fonts/ClashDisplay-Variable.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
        </Helmet>
        <GlobalErrorListener />
        <RouterProvider />
        <Toaster />
      </ThemeProvider>
    </HelmetProvider>
  </StrictMode>,
);
