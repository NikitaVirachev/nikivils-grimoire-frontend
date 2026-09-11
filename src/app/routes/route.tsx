import { createBrowserRouter, replace } from 'react-router-dom';

import { MainLayout } from '../layouts/main-layout';
import { homeLoader, Home, HomeErrorBoundary } from '../../pages/home';
import { AboutLayout, AboutMe, FAQ, Favorite, Unfavorite } from '../../pages/about';
import Blog from '../../pages/blog/ui/Blog';
import RootErrorBoundary from './RootErrorBoundary';

const router = createBrowserRouter([
  {
    Component: MainLayout,
    ErrorBoundary: RootErrorBoundary,

    children: [
      {
        index: true,
        Component: Home,
        loader: homeLoader,
        handle: {
          title: 'News',
        },
        ErrorBoundary: HomeErrorBoundary,
      },
      {
        path: 'about',
        Component: AboutLayout,
        children: [
          { index: true, loader: () => replace('me') },
          {
            path: 'me',
            Component: AboutMe,
            handle: {
              title: 'About me',
            },
          },
          {
            path: 'faq',
            Component: FAQ,
            handle: {
              title: 'FAQ',
            },
          },
          {
            path: 'favorite',
            Component: Favorite,
            handle: {
              title: 'Favorite stuff',
            },
          },
          {
            path: 'unfavorite',
            Component: Unfavorite,
            handle: {
              title: "Stuff I don't like",
            },
          },
        ],
      },
      { path: 'blog', Component: Blog },
    ],
  },
]);

export default router;
