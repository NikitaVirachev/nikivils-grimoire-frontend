import { useRouteError } from 'react-router-dom';

import { isApiError } from '@/shared/api';
import HomeLayout from '../HomeLayout';
import { StyledHeader } from './HomeErrorBoundary.styles';

const HomeErrorBoundary = () => {
  const error = useRouteError();

  if (isApiError(error)) {
    return (
      <HomeLayout>
        <StyledHeader>Failed to load posts</StyledHeader>
      </HomeLayout>
    );
  }

  throw error;
};

export default HomeErrorBoundary;
