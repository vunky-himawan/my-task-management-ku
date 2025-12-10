export const environtment = {
  env: import.meta.env.VITE_APP_ENV,
  apiUrl: import.meta.env.VITE_API_BASE_URL,

  dsn: import.meta.env.VITE_SENTRY_DSN,

  staleTime: import.meta.env.VITE_TANSTACK_QUERY_STALE_TIME
    ? parseInt(import.meta.env.VITE_TANSTACK_QUERY_STALE_TIME)
    : 300000, // Default to 5 minutes
  retry: import.meta.env.VITE_TANSTACK_QUERY_MAX_RETRIES
    ? parseInt(import.meta.env.VITE_TANSTACK_QUERY_MAX_RETRIES)
    : 3, // Default to 3 retries,
  gcTime: import.meta.env.VITE_TANSTACK_QUERY_GC_TIME
    ? parseInt(import.meta.env.VITE_TANSTACK_QUERY_GC_TIME)
    : 60000, // Default to 60 seconds
};
