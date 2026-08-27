import parseJSendResponse from '../../shared/api/parseJSendResponse';

type Post = {
  _id: string;
  title: string;
  overview: string;
};

type Posts = {
  posts: Post[];
};

export async function getPosts() {
  const response = await fetch('/api/v1/posts');

  const data = await parseJSendResponse<Posts>(response);

  return data.posts;
}
