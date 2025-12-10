import { mapError, mapErrorToEnum } from "./mapper";
import type { AppError } from "@/shared/types/error";
import { ERROR_MESSAGES } from "./const";
import { environtment } from "@/config/environtment";

export const errorHandler = (error: AppError) => {
  const isDev = environtment.env === "development";

  const userMessage = error ? ERROR_MESSAGES[mapErrorToEnum(error)] : "Something went wrong";

  const mappedError = mapError(error);

  return {
    statusCode: typeof mappedError.statusCode === "string" ? undefined : mappedError.statusCode,
    message: isDev ? mappedError.message : userMessage,
  };
};
