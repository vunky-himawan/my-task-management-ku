import { APP_ERROR_ENUM } from "@/shared/enum/error";
import type { DetailError } from "@/shared/types/error";
import { ERROR_MESSAGES } from "./const";

export type Source = "global" | "react" | "network" | "action" | "unknown";

export interface AppError {
  message: string;
  error: APP_ERROR_ENUM;
  timestamp: number;
  statusCode?: number;
  details?: DetailError[];
  cause?: unknown;
  source?: Source;

  getMessage(): string;
  getError(): APP_ERROR_ENUM;
}

// Custom Error
export class CustomAppError implements AppError {
  message: string;
  error: APP_ERROR_ENUM;
  details?: DetailError[];
  cause?: unknown;
  timestamp: number = Date.now();
  source?: Source;

  constructor(params: Partial<AppError> & { message: string; error: APP_ERROR_ENUM }) {
    this.message = params.message;
    this.error = params.error;
    this.details = params.details;
    this.cause = params.cause;
    this.source = params.source;
  }

  getMessage() {
    return this.message;
  }

  getError() {
    return this.error;
  }
}

export class PageNotFound extends CustomAppError {
  constructor() {
    super({ message: ERROR_MESSAGES.NOT_FOUND, error: APP_ERROR_ENUM.NOT_FOUND });
    this.error = APP_ERROR_ENUM.NOT_FOUND;
  }
}
export class UnhandledRejectionError extends CustomAppError {
  constructor(message: string) {
    super({ message, error: APP_ERROR_ENUM.PROMISE_REJECTION });
    this.error = APP_ERROR_ENUM.PROMISE_REJECTION;
  }
}
