import type { LoaderFunctionArgs } from 'react-router-dom';

import { getPost } from '@/entities/post';

const postLoader = async ({ params }: LoaderFunctionArgs) => {
  const postId = params.postId;

  if (!postId) {
    throw new Response('Post id is required', {
      status: 400,
    });
  }

  await getPost(postId);
};

export default postLoader;
