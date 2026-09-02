import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

import { PositionedMainContent } from '../../../layouts/MainContent';
import { DesktopSidebar } from '../../../shared/ui/sidebar';
import PostOverview from '../../../entities/post/ui/PostOverview';
import { Pagination } from '../../../shared/ui/pagination';
import { Separator } from '../../../shared/ui/separators';
import { ActionInput } from '../../../shared/ui/form/action-input';
import { homeLoader } from '../api/loader';
import {
  PostsExplore,
  PositionedChat,
  PhoneSearchInput,
  PhonePagination,
  StyledLoupe,
} from './Home.styles';
import { ActionButton } from '../../../shared/ui/form/action-button';

export const Home = () => {
  const [newsFilter, setNewsFilter] = useState('');

  const posts = useLoaderData<typeof homeLoader>();

  const findNewsHandler: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();

    setNewsFilter('');
  };

  return (
    <>
      <PositionedMainContent title='News'>
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

        {posts.map((post) => (
          <PostOverview
            key={post._id}
            title={post.title}
            linkToPost={''}
            overview={post.overview}
          />
        ))}
        <PhonePagination />
      </PositionedMainContent>

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
