import { createBrowserRouter, RouterProvider, replace } from 'react-router-dom';

import GlobalStyle from './styles/GlobalStyle';

import MainLayout from './layouts/MainLayout';

import Home from './pages/Home/Home';
import About from './pages/About/About';
import Blog from './pages/Blog';
import AboutMe from './pages/About/AboutMe';
import FAQ from './pages/About/FAQ';
import Favorite from './pages/About/Favorite';
import Unfavorite from './pages/About/Unfavorite';

import { homeLoader } from './pages/Home/home.loader';

const router = createBrowserRouter([
  {
    Component: MainLayout,

    children: [
      { index: true, Component: Home, loader: homeLoader },
      {
        path: 'about',
        Component: About,
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

function App() {
  return (
    <>
      <GlobalStyle />

      <RouterProvider router={router} />
    </>
  );
}

export default App;
