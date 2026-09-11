import { ApiError, parseJSendResponse } from '@/shared/api';

const request = async (url: string, options?: RequestInit): Promise<Response> => {
  let response;

  try {
    response = await fetch(url, options);
  } catch (err) {
    throw new ApiError('Could not reach the server.', 500, err);
  }

  if (!response?.ok) {
    parseJSendResponse(response);
  }

  return response;
};

export default request;
