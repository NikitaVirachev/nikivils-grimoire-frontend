import React from 'react';
import styled from 'styled-components';

import { Wedge } from '../../shared/ui/icons';
import { SecondaryFrame } from '../../shared/ui/frames';

const SwitchPage = styled.button`
  background: inherit;
  border: none;
  cursor: pointer;
`;

const StyledWedge = styled(Wedge)`
  color: var(--gold-bg-color);
`;

const PreviousPage = styled(StyledWedge)`
  transform: rotateY(180deg);
`;

const NextPage = styled(StyledWedge)`
  transform: rotateY(360deg);
`;

const Container = styled.form`
  align-self: center;

  display: flex;
  gap: 1rem;
`;

const Pages = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  width: 10rem;
  padding: 0.5rem 0;

  ${SecondaryFrame};

  font-family: 'Coelacanth', serif;
  font-size: var(--p);
  color: var(--secondary-tp-color);
  line-height: var(--lh-p);
`;

const CurrentPage = styled.span``;

const NumberOfPages = styled.span``;

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
