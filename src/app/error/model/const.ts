import { APP_ERROR_ENUM } from "@/shared/enum/error";

export const ERROR_MESSAGES: Record<APP_ERROR_ENUM, string> = {
  [APP_ERROR_ENUM.NOT_FOUND]: "Page or data not found. Try going back to the main menu!",
  [APP_ERROR_ENUM.UNKNOWN_ERROR]: "Something went wrong. Please try again later.",
  [APP_ERROR_ENUM.PROMISE_REJECTION]: "An unexpected error occurred. Please try again.",
  [APP_ERROR_ENUM.NETWORK_ERROR]: "Network error. Please check your internet connection.",
  [APP_ERROR_ENUM.RUNTIME_ERROR]: "A runtime error occurred. Please refresh the page.",
  [APP_ERROR_ENUM.VALIDATION_ERROR]:
    "There was a validation error. Please check your input and try again.",
};

export const STATUS_CODE_MAPPING: Record<number | string, APP_ERROR_ENUM> = {
  NOT_FOUND: APP_ERROR_ENUM.NOT_FOUND,
  NETWORK_ERROR: APP_ERROR_ENUM.NETWORK_ERROR,
  RUNTIME_ERROR: APP_ERROR_ENUM.RUNTIME_ERROR,
  VALIDATION_ERROR: APP_ERROR_ENUM.VALIDATION_ERROR,
  PROMISE_REJECTION: APP_ERROR_ENUM.PROMISE_REJECTION,
  UNKNOWN_ERROR: APP_ERROR_ENUM.UNKNOWN_ERROR,
};
