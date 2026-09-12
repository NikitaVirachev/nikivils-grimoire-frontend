import { useRouteError } from 'react-router-dom';

import { isApiError } from '@/shared/api';

const RootErrorBoundary = () => {
  const error = useRouteError();

  if (isApiError(error)) {
    return (
      <>
        <h1>{error.code}</h1>
        <p>{error.message}</p>
      </>
    );
  } else if (error instanceof Error) {
    return (
      <div>
        <h1>Error</h1>
        <p>{error.message}</p>
        <p>The stack trace is:</p>
        <pre>{error.stack}</pre>
      </div>
    );
  } else {
    return <h1>Unknown Error</h1>;
  }
};

export default RootErrorBoundary;
