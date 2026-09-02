import { createBrowserRouter, replace } from 'react-router-dom';

import { MainLayout } from '../layouts/main-layout';
import { homeLoader, Home } from '../../pages/home';
import { AboutLayout, AboutMe, FAQ, Favorite, Unfavorite } from '../../pages/about';
import Blog from '../../pages/blog/ui/Blog';

const router = createBrowserRouter([
  {
    Component: MainLayout,

    children: [
      { index: true, Component: Home, loader: homeLoader },
      {
        path: 'about',
        Component: AboutLayout,
        children: [
          { index: true, loader: () => replace('me') },
          { path: 'me', Component: AboutMe },
          { path: 'faq', Component: FAQ },
          { path: 'favorite', Component: Favorite },
          { path: 'unfavorite', Component: Unfavorite },
        ],
      },
      { path: 'blog', Component: Blog },
    ],
  },
]);

export default router;
