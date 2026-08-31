import { parseJSendResponse } from '../../../shared/api';
import { type Post } from '../model/types';

type PostsResponse = {
  posts: Post[];
};

export async function getPosts() {
  const response = await fetch('/api/v1/posts');

  const data = await parseJSendResponse<PostsResponse>(response);

  return data.posts;
}
