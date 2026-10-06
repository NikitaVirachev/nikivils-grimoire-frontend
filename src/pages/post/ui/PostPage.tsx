import { useLoaderData } from 'react-router-dom';

import PostPageLayout from '@/pages/post/ui/PostPageLayout';
import { PostLayout } from '@/entities/post';
import { UnderlinedHeader, QuaternaryHeading } from '@/shared/ui/typography';
import { postLoader } from '@/pages/post';

const PostPage = () => {
  const post = useLoaderData<typeof postLoader>();

  return (
    <PostPageLayout>
      <PostLayout>
        <UnderlinedHeader>
          <QuaternaryHeading>{post.title}</QuaternaryHeading>
        </UnderlinedHeader>
      </PostLayout>
    </PostPageLayout>
  );
};

export default PostPage;
