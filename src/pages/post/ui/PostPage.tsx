import PostPageLayout from '@/pages/post/ui/PostPageLayout';
import { PostLayout } from '@/entities/post';

const PostPage = () => {
  return (
    <PostPageLayout>
      <PostLayout></PostLayout>
    </PostPageLayout>
  );
};

export default PostPage;
