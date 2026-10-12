import React, { type ReactNode, useState } from 'react';
import { useMatches } from 'react-router-dom';

import { getPageTitle } from '@/shared/lib';
import { DesktopMainContent } from '@/shared/ui/main-content';
import { DesktopSidebar } from '@/shared/ui/sidebar';
import { Pagination } from '@/shared/ui/pagination';
import { Separator } from '@/shared/ui/separators';
import { BlogExplore, Tags } from '@/pages/blog/ui/Blog.styles';
import { ActionInput } from '@/shared/ui/form/action-input';
import { ActionButton } from '@/shared/ui/form/action-button';
import { StyledLoupe } from '@/pages/home/ui/Home.styles';
import { PhoneSearchInput } from '@/shared/ui/search';
import { PhonePagination } from '@/shared/ui/pagination';
import { TagList, TagItem, TagsLabel, Tag } from '@/entities/post/ui/Tag.style';

interface BlogLayoutProps {
  children: ReactNode;
}

const tags = ['developing', 'books', 'cinema', 'cartoons', 'diary'];

const BlogLayout = ({ children }: BlogLayoutProps) => {
  const [postsFilter, setPostsFilter] = useState('');

  const matches = useMatches();
  const title = getPageTitle(matches);

  const findPostsHandler: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();

    setPostsFilter('');
  };

  return (
    <>
      <DesktopMainContent title={title}>
        <PhoneSearchInput
          name='news-search'
          placeholder='find something?'
          value={postsFilter}
          changeInputHandler={(e) => setPostsFilter(e.target.value)}
          onSubmitHandler={findPostsHandler}
          action={
            <ActionButton
              type='submit'
              disabled={postsFilter === ''}
            >
              <StyledLoupe title='Magnifying glass icon' />
            </ActionButton>
          }
        />

        {children}

        <PhonePagination />
      </DesktopMainContent>

      <DesktopSidebar title='Explore'>
        <BlogExplore>
          <Pagination />

          <Separator title='Separator icon' />

          <ActionInput
            name='posts-search'
            placeholder='find something?'
            value={postsFilter}
            changeInputHandler={(e) => setPostsFilter(e.target.value)}
            onSubmitHandler={findPostsHandler}
            action={
              <ActionButton
                type='submit'
                disabled={postsFilter === ''}
              >
                <StyledLoupe title='Magnifying glass icon' />
              </ActionButton>
            }
          />

          <Separator title='Separator icon' />

          {tags?.length > 0 && (
            <Tags>
              <TagsLabel>Tags: </TagsLabel>
              <TagList>
                {tags.map((tag) => (
                  <TagItem key={tag}>
                    <Tag>{tag}</Tag>
                  </TagItem>
                ))}
              </TagList>
            </Tags>
          )}
        </BlogExplore>
      </DesktopSidebar>
    </>
  );
};

export default BlogLayout;
