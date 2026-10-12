import styled, { css } from 'styled-components';
import { Pagination } from '@/shared/ui/pagination/index';
import { respond } from '@/shared/lib/styles';

export const PhonePagination = styled(Pagination)`
  display: none;

  ${respond(
    'phone',
    css`
      display: flex;
    `
  )}
`;

export default PhonePagination;
