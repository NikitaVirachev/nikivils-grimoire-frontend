import styled from 'styled-components';

const PostContent = styled.article`
  & > * {
    margin: 0;
  }

  & > p + p {
    margin-top: 1.4rem;
  }

  & > h2 + *,
  & > h3 + *,
  & > h4 + * {
    margin-top: 1.2rem;
  }

  & > * + h2 {
    margin-top: 1.8rem;
  }

  & > * + h3 {
    margin-top: 1.6rem;
  }

  & > * + h4 {
    margin-top: 3rem;
  }

  & > * + figure {
    margin-top: 1rem;
  }

  & > figure + * {
    margin-top: 1rem;
  }

  & > * + blockquote {
    margin-top: 1rem;
  }

  & > blockquote + * {
    margin-top: 1rem;
  }
`;

export default PostContent;
