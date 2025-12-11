import { useErrorStore } from "@/app/error/store/error.store";
import { APP_ERROR_ENUM } from "@/shared/enum/error";
import { captureException as SentryCaptureException } from "@sentry/browser";
import { useEffect } from "react";
import { CustomAppError } from "../model/types";

export const GlobalErrorListener = () => {
  useEffect(() => {
    const handleError = (event: ErrorEvent) => {
      event.preventDefault();

      const error = event.error instanceof Error ? event.error : new Error(event.message);

      if (!isIgnorableError(error)) {
        SentryCaptureException(error);
      }

      useErrorStore.getState().setError(
        new CustomAppError({
          message: error.message,
          error: APP_ERROR_ENUM.UNKNOWN_ERROR,
          timestamp: Date.now(),
        }),
      );
    };

    const handleRejection = (event: PromiseRejectionEvent) => {
      event.preventDefault();

      const reason = event.reason instanceof Error ? event.reason : new Error(String(event.reason));

      if (!isIgnorableError(reason)) {
        SentryCaptureException(reason);
      }

      useErrorStore.getState().setError(
        new CustomAppError({
          message: reason.message,
          error: APP_ERROR_ENUM.PROMISE_REJECTION,
          timestamp: Date.now(),
        }),
      );
    };

    window.addEventListener("error", handleError);
    window.addEventListener("unhandledrejection", handleRejection);

    return () => {
      window.removeEventListener("error", handleError);
      window.removeEventListener("unhandledrejection", handleRejection);
    };
  }, []);

  return null;
};

const isIgnorableError = (error: Error) => {
  const msg = error.message || "";

  return (
    msg.includes("ResizeObserver loop") ||
    msg.includes("Non-Error promise rejection") ||
    msg.includes("cancelled") ||
    msg.includes("AbortError")
  );
};
