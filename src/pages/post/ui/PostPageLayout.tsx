import type { ReactNode } from 'react';

import { DesktopMainContent } from '@/shared/ui/main-content';
import { DesktopSidebar } from '@/shared/ui/sidebar';
import { useMatches } from 'react-router-dom';
import { getPageTitle } from '@/shared/lib';

interface PostPageLayoutProps {
  children: ReactNode;
}

const PostPageLayout = ({ children }: PostPageLayoutProps) => {
  const matches = useMatches();
  const title = getPageTitle(matches);

  return (
    <>
      <DesktopMainContent title={title}>{children}</DesktopMainContent>

      <DesktopSidebar title='Explore'></DesktopSidebar>
    </>
  );
};

export default PostPageLayout;
