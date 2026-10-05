import { useLoaderData } from 'react-router-dom';

import { homeLoader } from '@/pages/home';
import HomeLayout from './HomeLayout';
import { PostOverview } from '@/entities/post';

export const Home = () => {
  const posts = useLoaderData<typeof homeLoader>();

  return (
    <HomeLayout>
      {posts.map((post) => (
        <PostOverview {...post} />
      ))}
    </HomeLayout>
  );
};
