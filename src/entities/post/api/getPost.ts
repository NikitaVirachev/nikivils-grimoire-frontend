import type { PostDto } from '@nikivils/grimoire-contracts';

import { parseJSendResponse } from '@/shared/api';
import { request } from '@/shared/lib/request';

type PostResponse = {
  post: PostDto;
};

const getPost = async (postId: string) => {
  const response = await request(`/api/v1/posts/${postId}`);

  const data = await parseJSendResponse<PostResponse>(response);

  return data.post;
};

export default getPost;
