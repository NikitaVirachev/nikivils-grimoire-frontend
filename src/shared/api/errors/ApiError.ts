export type ApiErrorType = Error & {
  code?: string;
};

class ApiError extends Error {
  code?: string;
  cause?: unknown;
  constructor(message: string, code?: number, cause?: unknown) {
    super(message);
    this.code = String(code);
    this.cause = cause;
  }
}

export const isApiError = (error: unknown): error is ApiError => error instanceof ApiError;

export default ApiError;
