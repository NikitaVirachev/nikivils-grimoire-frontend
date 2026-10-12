import { useLoaderData } from 'react-router-dom';

import BlogLayout from '@/pages/blog/ui/BlogLayout';
import { blogLoader } from '@/pages/blog';
import { PostOverview } from '@/entities/post';

const Blog = () => {
  const posts = useLoaderData<typeof blogLoader>();

  return (
    <BlogLayout>
      {posts.map((post) => (
        <PostOverview {...post} />
      ))}
    </BlogLayout>
  );
};

export default Blog;
