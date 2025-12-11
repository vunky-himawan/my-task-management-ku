import { toast, type ExternalToast } from "sonner";

const defaultOptions: ExternalToast = {
  position: "top-center",
  richColors: true,
};

export const Toast = {
  success: (message: string, options?: ExternalToast) => {
    toast.success(message, { ...defaultOptions, ...options });
  },
  error: (message: string, options?: ExternalToast) => {
    toast.error(message, { ...defaultOptions, ...options });
  },
  info: (message: string, options?: ExternalToast) => {
    toast.info(message, { ...defaultOptions, ...options });
  },
  warning: (message: string, options?: ExternalToast) => {
    toast.warning(message, { ...defaultOptions, ...options });
  },
};
