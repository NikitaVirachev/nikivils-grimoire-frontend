import type { PostSummaryDto } from '@nikivils/grimoire-contracts';

import { parseJSendResponse } from '@/shared/api';
import { request } from '@/shared/lib/request';

type PostsResponse = {
  posts: PostSummaryDto[];
};

export async function getPosts() {
  const response = await request('/api/v1/posts');

  const data = await parseJSendResponse<PostsResponse>(response);

  return data.posts;
}
