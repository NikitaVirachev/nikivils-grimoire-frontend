import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import { SectionCard, SectionCardTitle } from '../../../../shared/ui/section-card/SectionCard';

const Menu = styled.nav`
  padding: 2px;
`;

const List = styled.ul`
  li + li {
    margin-top: 1rem;
  }
`;

const Link = styled(NavLink)`
  color: inherit;
  font-size: var(--p);
  line-height: var(--lh-p);
  font-weight: bold;
  text-decoration: none;

  flex: 1;
`;

const MenuItem = styled.li`
  display: flex;
  gap: 0.5rem;

  color: var(--secondary-tp-color);

  transition: var(--basic-transition);

  &::before {
    content: '— ';
    flex-shrink: 0;
  }

  &:hover {
    color: var(--primarly-tp-color);
  }

  &:has(${Link}.active) {
    color: var(--primarly-tp-color);

    ${Link} {
      text-decoration: underline;
    }
  }
`;

type ContentsProps = {
  className?: string;
};

const Contents = ({ className }: ContentsProps) => (
  <SectionCard className={className}>
    <SectionCardTitle>Contents</SectionCardTitle>

    <Menu>
      <List>
        <MenuItem>
          <Link
            to='/about/me'
            title='Thoughts about this site from its creator'
          >
            About me
          </Link>
        </MenuItem>
        <MenuItem>
          <Link
            to='/about/faq'
            title='Frequently Asked Questions'
          >
            FAQ
          </Link>
        </MenuItem>
        <MenuItem>
          <Link
            to='/about/favorite'
            title='Things I like the most'
          >
            Favorite stuff
          </Link>
        </MenuItem>
        <MenuItem>
          <Link
            to='/about/unfavorite'
            title="Things I don't like"
          >
            Stuff I don't like
          </Link>
        </MenuItem>
      </List>
    </Menu>
  </SectionCard>
);

export default Contents;
