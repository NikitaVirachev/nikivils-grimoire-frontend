import { parseJSendResponse } from '@/shared/api';
import { type Post } from '../model/types';
import { request } from '@/shared/lib/request';

type PostsResponse = {
  posts: Post[];
};

export async function getPosts() {
  const response = await request('/api/v1/posts');

  const data = await parseJSendResponse<PostsResponse>(response);

  return data.posts;
}
