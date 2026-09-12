import { useState, type ReactNode } from 'react';
import { useMatches } from 'react-router-dom';

import { DesktopMainContent } from '@/shared/ui/main-content';
import { DesktopSidebar } from '@/shared/ui/sidebar';
import { Pagination } from '@/shared/ui/pagination';
import { Separator } from '@/shared/ui/separators';
import { ActionInput } from '@/shared/ui/form/action-input';
import {
  PostsExplore,
  PositionedChat,
  PhoneSearchInput,
  PhonePagination,
  StyledLoupe,
} from './Home.styles';
import { ActionButton } from '@/shared/ui/form/action-button';
import { getPageTitle } from '@/shared/lib';

interface HomeLayoutProps {
  children: ReactNode;
}

const HomeLayout = ({ children }: HomeLayoutProps) => {
  const [newsFilter, setNewsFilter] = useState('');

  const matches = useMatches();
  const title = getPageTitle(matches);

  const findNewsHandler: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();

    setNewsFilter('');
  };

  return (
    <>
      <DesktopMainContent title={title}>
        <PhoneSearchInput
          name='news-search'
          placeholder='find something?'
          value={newsFilter}
          changeInputHandler={(e) => setNewsFilter(e.target.value)}
          onSubmitHandler={findNewsHandler}
          action={
            <ActionButton
              type='submit'
              disabled={newsFilter === ''}
            >
              <StyledLoupe title='Magnifying glass icon' />
            </ActionButton>
          }
        />

        {children}

        <PhonePagination />
      </DesktopMainContent>

      <DesktopSidebar title='Explore'>
        <PostsExplore>
          <Pagination />

          <Separator title='Separator icon' />

          <ActionInput
            name='news-search'
            placeholder='find something?'
            value={newsFilter}
            changeInputHandler={(e) => setNewsFilter(e.target.value)}
            onSubmitHandler={findNewsHandler}
            action={
              <ActionButton
                type='submit'
                disabled={newsFilter === ''}
              >
                <StyledLoupe title='Magnifying glass icon' />
              </ActionButton>
            }
          />
        </PostsExplore>
        <PositionedChat />
      </DesktopSidebar>
    </>
  );
};

export default HomeLayout;
