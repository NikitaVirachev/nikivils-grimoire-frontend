import { useState } from 'react';
import styled, { css } from 'styled-components';

import { PositionedMainContent } from '../layouts/MainContent';
import { PositionedSidebar } from '../components/Sidebar/Sidebar';
import PostOverview from '../components/Post/PostOverview';
import Chat from '../components/Chat/Chat';
import Pagination from '../components/Sidebar/Pagination';
import Separator from '../components/Sidebar/Separator/Separator';
import { SearchInput } from '../components/Form/Form';

import { respond } from '../styles/Mixins';

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

const posts = [
  {
    id: 1,
    title: 'New post!',
    link: '/post',
    overview:
      'Lorem ipsum dolor sit amet consectetur. Pellentesque nisi placerat ultrices ac amet dui et pellentesque. Tellus commodo eu interdum nec nullam. Leo congue feugiat sed bibendum vel amet. In habitasse et viverra nibh risus tempor morbi arcu cras. In molestie commodo sit aliquam montes egestas semper. Sollicitudin aenean convallis integer eget. Nunc enim sit porta et maecenas facilisis. Amet et in ligula sed pharetra urna bibendum mauris accumsan. Sed eleifend ipsum urna consectetur sed amet laoreet habitant tempus.',
  },
  {
    id: 0,
    title: 'My first post!',
    link: '/post',
    overview:
      'Lorem ipsum dolor sit amet consectetur. Elit eget eget scelerisque nibh. Natoque platea felis quis aliquam pharetra eleifend pulvinar malesuada erat. Amet sit tempus nulla lacus sed tellus. In ac ipsum dictum et. Posuere volutpat orci cursus habitant magna cursus habitasse. Cursus nisl nascetur vel sit. Tellus erat consequat enim facilisi at fames volutpat.',
  },
  {
    id: 2,
    title: 'My first post!',
    link: '/post',
    overview:
      'Lorem ipsum dolor sit amet consectetur. Elit eget eget scelerisque nibh. Natoque platea felis quis aliquam pharetra eleifend pulvinar malesuada erat. Amet sit tempus nulla lacus sed tellus. In ac ipsum dictum et. Posuere volutpat orci cursus habitant magna cursus habitasse. Cursus nisl nascetur vel sit. Tellus erat consequat enim facilisi at fames volutpat.',
  },
  {
    id: 3,
    title: 'My first post!',
    link: '/post',
    overview:
      'Lorem ipsum dolor sit amet consectetur. Elit eget eget scelerisque nibh. Natoque platea felis quis aliquam pharetra eleifend pulvinar malesuada erat. Amet sit tempus nulla lacus sed tellus. In ac ipsum dictum et. Posuere volutpat orci cursus habitant magna cursus habitasse. Cursus nisl nascetur vel sit. Tellus erat consequat enim facilisi at fames volutpat.',
  },
  {
    id: 4,
    title: 'My first post!',
    link: '/post',
    overview:
      'Lorem ipsum dolor sit amet consectetur. Elit eget eget scelerisque nibh. Natoque platea felis quis aliquam pharetra eleifend pulvinar malesuada erat. Amet sit tempus nulla lacus sed tellus. In ac ipsum dictum et. Posuere volutpat orci cursus habitant magna cursus habitasse. Cursus nisl nascetur vel sit. Tellus erat consequat enim facilisi at fames volutpat.',
  },
  {
    id: 5,
    title: 'My first post!',
    link: '/post',
    overview:
      'Lorem ipsum dolor sit amet consectetur. Elit eget eget scelerisque nibh. Natoque platea felis quis aliquam pharetra eleifend pulvinar malesuada erat. Amet sit tempus nulla lacus sed tellus. In ac ipsum dictum et. Posuere volutpat orci cursus habitant magna cursus habitasse. Cursus nisl nascetur vel sit. Tellus erat consequat enim facilisi at fames volutpat.',
  },
];

const HomePage = () => {
  const [newsFilter, setNewsFilter] = useState('');

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
            key={post.id}
            title={post.title}
            linkToPost={post.link}
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
