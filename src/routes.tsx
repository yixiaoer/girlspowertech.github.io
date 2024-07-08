import { RouteObject } from 'react-router-dom';
import NotFound from '@/pages/NotFound';
import Home from '@/pages/Home';

export default [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/*',
    element: <NotFound />,
  },
] as RouteObject[];
