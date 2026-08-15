import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import { SectionCard, SectionCardTitle } from '../../shared/components/SectionCard';

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
  font-size: var(--small);
  font-weight: bold;
  text-decoration: none;
`;

const MenuItem = styled.li`
  list-style-position: inside;

  color: var(--secondary-tp-color);

  transition: var(--basic-transition);

  &::marker {
    content: '— ';
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

const Contents = () => (
  <SectionCard>
    <SectionCardTitle>Contents</SectionCardTitle>

    <Menu>
      <List>
        <MenuItem>
          <Link
            to='me'
            title='Thoughts about this site from its creator'
          >
            About me
          </Link>
        </MenuItem>
        <MenuItem>
          <Link
            to='faq'
            title='Frequently Asked Questions'
          >
            FAQ
          </Link>
        </MenuItem>
        <MenuItem>
          <Link
            to='favorite'
            title='Things I like the most'
          >
            Favorite stuff
          </Link>
        </MenuItem>
        <MenuItem>
          <Link
            to='unfavorite'
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
