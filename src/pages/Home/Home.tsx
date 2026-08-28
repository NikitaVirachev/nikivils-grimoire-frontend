import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import styled, { css } from 'styled-components';

import { PositionedMainContent } from '../../layouts/MainContent';
import { PositionedSidebar } from '../../components/Sidebar/Sidebar';
import PostOverview from '../../components/Post/PostOverview';
import Chat from '../../components/Chat/Chat';
import Pagination from '../../components/Sidebar/Pagination';
import Separator from '../../components/Sidebar/Separator/Separator';
import { SearchInput } from '../../components/Form/Form';
import { homeLoader } from './home.loader';

import { respond } from '../../styles/Mixins';

const PostsExplore = styled.section`
  position: relative;

  align-self: start;

  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const PositionedChat = styled(Chat)`
  align-self: end;
`;

const PhoneSearchInput = styled(SearchInput)`
  display: none;
  margin: 0.5rem 0.5rem 0 0.5rem;

  ${respond(
    'phone',
    css`
      display: grid;
    `
  )}
`;

const PhonePagination = styled(Pagination)`
  display: none;

  ${respond(
    'phone',
    css`
      display: flex;
    `
  )}
`;

const HomePage = () => {
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

export default HomePage;
