import { useLoaderData } from 'react-router-dom';

import { homeLoader } from '../api/loader';
import HomeLayout from './HomeLayout';
import PostOverview from '@/entities/post/ui/PostOverview';

export const Home = () => {
  const posts = useLoaderData<typeof homeLoader>();

  return (
    <HomeLayout>
      {posts.map((post) => (
        <PostOverview
          key={post._id}
          title={post.title}
          linkToPost={''}
          overview={post.overview}
        />
      ))}
    </HomeLayout>
  );
};
