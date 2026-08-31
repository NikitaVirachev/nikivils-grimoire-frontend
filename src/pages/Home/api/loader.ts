import { getPosts } from '../../../entities/post';

export async function homeLoader() {
  return await getPosts();
}
