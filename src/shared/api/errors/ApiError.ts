export type ApiErrorType = Error & {
  code?: string;
};

class ApiError extends Error {
  code?: string;
  constructor(message: string, code?: number) {
    super(message);
    this.code = String(code);
  }
}

export const isApiError = (error: unknown): error is ApiError => error instanceof ApiError;

export default ApiError;
