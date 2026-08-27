export type JSendStatus = 'success' | 'fail' | 'error';

export interface JSendSuccess<T> {
  status: 'success';
  data: T;
}

export interface JSendFail {
  status: 'fail';
  data: { message?: string; [k: string]: unknown };
}

export interface JSendError {
  status: 'error';
  message?: string;
  data?: unknown;
}

export type JSendResponse<T> = JSendSuccess<T> | JSendFail | JSendError;

export type ErrorWithCode = Error & { code?: string };

function isRecord(v: unknown): v is Record<string, unknown> {
  return typeof v === 'object' && v !== null;
}

function hasStatus(v: Record<string, unknown>): v is Record<string, unknown> & { status: unknown } {
  return 'status' in v;
}

export function isJSendSuccess<T>(v: unknown): v is JSendSuccess<T> {
  if (!isRecord(v) || !hasStatus(v)) return false;
  if (v.status !== 'success') return false;
  return 'data' in v; // data может быть любым JSON-значением, не проверяем глубже
}

export function isJSendFail(v: unknown): v is JSendFail {
  if (!isRecord(v) || !hasStatus(v)) return false;
  if (v.status !== 'fail') return false;
  if (!('data' in v) || !isRecord(v.data)) return false;
  return true;
}

export function isJSendError(v: unknown): v is JSendError {
  if (!isRecord(v) || !hasStatus(v)) return false;
  if (v.status !== 'error') return false;
  // message/code/data могут отсутствовать
  return true;
}
