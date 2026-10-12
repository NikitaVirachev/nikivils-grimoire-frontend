import styled, { css } from 'styled-components';

import { ActionInput } from '@/shared/ui/form/action-input';
import { respond } from '@/shared/lib/styles';

export const PhoneSearchInput = styled(ActionInput)`
  display: none;
  margin: 0.5rem 0.5rem 0 0.5rem;

  ${respond(
    'phone',
    css`
      display: grid;
    `
  )}
`;

export default PhoneSearchInput;
