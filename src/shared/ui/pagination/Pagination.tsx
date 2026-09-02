import React from 'react';

import {
  Container,
  SwitchPage,
  PreviousPage,
  Pages,
  CurrentPage,
  NumberOfPages,
  NextPage,
} from './Pagination.styles';

interface PaginationProps {
  className?: string;
}

const Pagination = ({ className }: PaginationProps) => {
  const handlePreviousPageClick: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
  };

  const handleNextPageClick: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
  };

  return (
    <Container className={className}>
      <SwitchPage onClick={handlePreviousPageClick}>
        <PreviousPage title='Previous page icon' />
      </SwitchPage>

      <Pages>
        <CurrentPage>1 </CurrentPage>
        of
        <NumberOfPages> 10</NumberOfPages>
      </Pages>

      <SwitchPage onClick={handleNextPageClick}>
        <NextPage title='Next page icon' />
      </SwitchPage>
    </Container>
  );
};

export default Pagination;
