import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import GlobalStyle from './styles/GlobalStyle';

import MainLayout from './layouts/MainLayout';

import Home from './pages/Home';
import About from './pages/About';
import Blog from './pages/Blog';

const router = createBrowserRouter([
  {
    Component: MainLayout,

    children: [
      { index: true, Component: Home },
      { path: 'about', Component: About },
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
