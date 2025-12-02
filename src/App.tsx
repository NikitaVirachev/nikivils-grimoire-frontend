import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import GlobalStyle from './styles/GlobalStyle';

import MainLayout from './layouts/MainLayout';

import Home from './pages/Home';
import About from './pages/About';
import Blog from './pages/Blog';

function App() {
  return (
    <Router>
      <GlobalStyle />

      <Routes>
        <Route element={<MainLayout />}>
          <Route
            index
            element={<Home />}
          />
          <Route
            path='about'
            element={<About />}
          />
          <Route
            path='blog'
            element={<Blog />}
          />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
