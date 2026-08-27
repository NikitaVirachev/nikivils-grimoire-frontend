import { getPosts } from './home.features';

export async function homeLoader() {
  return await getPosts();
}
