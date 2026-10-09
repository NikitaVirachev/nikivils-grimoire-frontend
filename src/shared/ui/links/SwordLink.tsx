import { SwordLinkWrapper, LinkSword } from './SwordLink.styles';

interface LinkProps {
  children: string;
  to: string;
}

const SwordLink = ({ children, to }: LinkProps) => (
  <SwordLinkWrapper to={to}>
    <LinkSword title='Indicate in the form of a sword' />
    {children}
  </SwordLinkWrapper>
);

export default SwordLink;
