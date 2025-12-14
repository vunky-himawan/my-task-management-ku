import { mapError, mapErrorToEnum } from "./mapper";
import { ERROR_MESSAGES } from "./const";
import { environtment } from "@/config/environtment";
import type { AppError } from "./types";

export const errorHandler = (error: AppError) => {
  const isDev = environtment.env === "development";

  const errorEnum = mapErrorToEnum(error);
  const userMessage = error ? ERROR_MESSAGES[errorEnum] : "Something went wrong";

  const mappedError = mapError(error);

  return {
    error: mappedError.error,
    message: isDev ? mappedError.message : userMessage,
  };
};
