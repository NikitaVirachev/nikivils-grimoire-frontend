import type { ComponentProps } from 'react';
import { Link } from 'react-router-dom';

import { SwordLinkWrapper, LinkSword } from './SwordLink.styles';

type LinkProps = ComponentProps<typeof Link>;

const SwordLink = ({ children, ...props }: LinkProps) => (
  <SwordLinkWrapper {...props}>
    <LinkSword title='Indicate in the form of a sword' />
    {children}
  </SwordLinkWrapper>
);

export default SwordLink;
