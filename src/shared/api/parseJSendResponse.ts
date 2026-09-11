import { isJSendError, isJSendFail, isJSendSuccess } from './jsend';
import type { JSendError, JSendFail } from './jsend';
import ApiError from './errors/ApiError';

export const parseJSendResponse = async <T>(response: Response): Promise<T> => {
  const ct = response.headers.get('content-type') || '';

  if (!ct.includes('application/json')) {
    throw new ApiError('Invalid server response');
  }

  let json: unknown;
  try {
    json = await response.json();
  } catch {
    throw new ApiError('Invalid JSON in server response');
  }

  if (isJSendSuccess<T>(json)) {
    return json.data;
  }

  if (isJSendFail(json)) {
    const fail: JSendFail = json;
    const msg =
      typeof fail.data.message === 'string' && fail.data.message.trim()
        ? fail.data.message
        : 'Invalid data. Check the entered information.';

    const err = new ApiError(msg, response.status || 400);
    throw err;
  }

  if (isJSendError(json)) {
    const e: JSendError = json;
    const msg =
      typeof e.message === 'string' && e.message.trim()
        ? e.message
        : 'The server is temporarily unavailable. Please try again later.';

    const err = new ApiError(msg, response.status || 500);
    throw err;
  }

  // не JSend
  throw new ApiError('Unknown JSend response format.');
};
