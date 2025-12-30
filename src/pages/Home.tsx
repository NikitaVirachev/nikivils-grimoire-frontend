import styled, { css } from 'styled-components';

import MainContent from '../layouts/MainContent';
import Sidebar from '../components/Sidebar/Sidebar';
import PostOverview from '../components/Post/PostOverview';
import Chat from '../components/Chat/Chat';
import Pagination from '../components/Sidebar/Pagination';

import { respond } from '../styles/Mixins';

const StyledMainContent = styled(MainContent)`
  grid-column: col-start 1 / col-end 3;

  ${respond(
    'phone',
    css`
      grid-column: -1 / 1;
    `
  )}
`;

const StyledSidebar = styled(Sidebar)`
  ${respond(
    'phone',
    css`
      display: none;
    `
  )}
`;

const PostsExplore = styled.div`
  align-self: start;

  display: flex;
  flex-direction: column;
`;

const PositionedChat = styled(Chat)`
  align-self: end;
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

const HomePage = () => (
  <>
    <StyledMainContent title='News'>
      {posts.map((post) => (
        <PostOverview
          key={post.id}
          title={post.title}
          linkToPost={post.link}
          overview={post.overview}
        />
      ))}
    </StyledMainContent>
    <StyledSidebar title='Explore'>
      <PostsExplore>
        <Pagination />
      </PostsExplore>
      <PositionedChat />
    </StyledSidebar>
  </>
);

export default HomePage;
