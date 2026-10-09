import type { ComponentProps } from 'react';
import { Link } from 'react-router-dom';

import { SwordLinkWrapper, RotatedLinkSword } from './SwordLink.styles';

type LinkProps = ComponentProps<typeof Link>;

const BackLink = ({ ...props }: LinkProps) => (
  <SwordLinkWrapper {...props}>
    Back
    <RotatedLinkSword title='Indicate in the form of a sword' />
  </SwordLinkWrapper>
);

export default BackLink;
