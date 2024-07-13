import { RouteObject } from 'react-router-dom';
import NotFound from '@/pages/NotFound';
import ArticleList from '@/pages/ArticleList';
import Home from '@/pages/Home';
import ArticleWrapper from './pages/Article';


export default [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/articles',
    element: <ArticleList />,
  },
  {
    path: '/articles/:id',
    element: <ArticleWrapper />,
  },
  {
    path: '/*',
    element: <NotFound />,
  },
] as RouteObject[];
