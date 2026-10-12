import { getPosts } from '@/entities/post';

const blogLoader = () => {
  return getPosts();
};

export default blogLoader;
