import type { ErrorResponse } from "@/shared/types/error";
import { APP_ERROR_ENUM } from "@/shared/enum/error";
import type { AppError } from "./types";
import { STATUS_CODE_MAPPING } from "./const";

export const mapError = (error: AppError): ErrorResponse => {
  return {
    message: error.getMessage(),
    error: error.getError(),
    timestamp: error.timestamp,
  };
};

export function mapErrorToEnum(error: AppError): APP_ERROR_ENUM {
  const errorEnum = error.error;

  return errorEnum && errorEnum in STATUS_CODE_MAPPING
    ? STATUS_CODE_MAPPING[errorEnum]
    : APP_ERROR_ENUM.UNKNOWN_ERROR;
}
