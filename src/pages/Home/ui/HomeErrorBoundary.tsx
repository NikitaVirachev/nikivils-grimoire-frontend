import { useRouteError } from 'react-router-dom';

import { isApiError } from '@/shared/api';
import HomeLayout from './HomeLayout';

const HomeErrorBoundary = () => {
  const error = useRouteError();

  if (isApiError(error)) {
    return <HomeLayout>Failed to load posts</HomeLayout>;
  }

  throw error;
};

export default HomeErrorBoundary;
