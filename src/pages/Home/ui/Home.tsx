import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

import { PositionedMainContent } from '../../../layouts/MainContent';
import { PositionedSidebar } from '../../../widgets/Sidebar/Sidebar';
import PostOverview from '../../../entities/post/ui/PostOverview';
import Pagination from '../../../widgets/Sidebar/Pagination';
import { Separator } from '../../../shared/ui/separators';
import { SearchInput } from '../../../shared/ui/form/Form';
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

      <PositionedSidebar title='Explore'>
        <PostsExplore>
          <Pagination />

          <Separator title='Separator icon' />

          <SearchInput
            name='news-search'
            placeholder='find something?'
            value={newsFilter}
            changeInputHandler={(e) => setNewsFilter(e.target.value)}
            onSubmitHandler={findNewsHandler}
          />
        </PostsExplore>
        <PositionedChat />
      </PositionedSidebar>
    </>
  );
};
