import type { ReactNode } from 'react';
import { useMatches, useLocation } from 'react-router-dom';

import { DesktopMainContent } from '@/shared/ui/main-content';
import { DesktopSidebar } from '@/shared/ui/sidebar';
import { getPageTitle } from '@/shared/lib';
import { BackLink } from '@/shared/ui/links';
import { PostExplore } from './PostPage.styles';

interface PostPageLayoutProps {
  children: ReactNode;
}

const PostPageLayout = ({ children }: PostPageLayoutProps) => {
  const matches = useMatches();
  const title = getPageTitle(matches);

  const location = useLocation();

  return (
    <>
      <DesktopMainContent title={title}>{children}</DesktopMainContent>

      <DesktopSidebar title='Explore'>
        <PostExplore>
          <BackLink to={location.state?.from ?? '/'} />
        </PostExplore>
      </DesktopSidebar>
    </>
  );
};

export default PostPageLayout;
