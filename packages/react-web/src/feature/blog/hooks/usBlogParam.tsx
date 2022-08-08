import { matchPath, useLocation } from 'react-router-dom';

export const useBlogParam = () => {
  const { pathname } = useLocation();
  const match = matchPath({ path: '/:locale/blog/:slug' }, pathname);

  return match?.params.slug;
};
