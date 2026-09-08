import type { UIMatch } from 'react-router';

type PageHandle = {
  title?: string;
};

const getPageTitle = (matches: UIMatch[]) => {
  for (let i = matches.length - 1; i >= 0; i--) {
    const handle = matches[i].handle as PageHandle | undefined;

    if (handle?.title) {
      return handle.title;
    }
  }

  return '';
};

export default getPageTitle;
