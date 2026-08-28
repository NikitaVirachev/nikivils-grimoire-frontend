import { isJSendError, isJSendFail, isJSendSuccess } from './jsend';
import type { ErrorWithCode, JSendError, JSendFail } from './jsend';

const parseJSendResponse = async <T>(response: Response): Promise<T> => {
  const ct = response.headers.get('content-type') || '';

  // nginx/прокси часто отдают text/html
  if (!ct.includes('application/json')) {
    throw new Error('Некорректный ответ сервера');
  }

  let json: unknown;
  try {
    json = await response.json();
  } catch {
    throw new Error('Некорректный JSON в ответе сервера');
  }

  if (isJSendSuccess<T>(json)) {
    return json.data;
  }

  if (isJSendFail(json)) {
    const fail: JSendFail = json;
    const msg =
      typeof fail.data.message === 'string' && fail.data.message.trim()
        ? fail.data.message
        : 'Некорректные данные. Проверьте введённую информацию.';

    const err: ErrorWithCode = new Error(msg);
    err.code = String(response.status || 400);
    throw err;
  }

  if (isJSendError(json)) {
    const e: JSendError = json;
    const msg =
      typeof e.message === 'string' && e.message.trim()
        ? e.message
        : 'Сервер временно недоступен. Повторите попытку позже.';

    const err: ErrorWithCode = new Error(msg);
    err.code = String(response.status || 500);
    throw err;
  }

  // не JSend
  throw new Error('Неизвестный формат JSend-ответа');
};

export default parseJSendResponse;
