import type { APP_ERROR_ENUM } from "../enum/error";

export interface ErrorResponse {
  statusCode?: number;
  message: string;
  error: APP_ERROR_ENUM;
  details?: DetailError[];
  timestamp: number;
}

export interface DetailError {
  code: string;
  field?: string;
  message: string;
  hint?: string;
}
