import * as React from 'react';
import type { Post } from 'typings/my-mdx/index';
import { SuspenseResponse } from '@lib/index';

export type BlogContextValue = {
  content?: SuspenseResponse<Post | null>;
  setPost: (post: SuspenseResponse<Post | null>) => void;
};

const BlogContext = React.createContext<BlogContextValue | undefined>(undefined);

export const BlogContextProvider: React.FC = ({ children }) => {
  const [content, setContent] = React.useState<SuspenseResponse<Post | null>>();

  const value = React.useMemo(() => {
    const setPost = (post?: SuspenseResponse<Post | null>) => {
      setContent(post);
    };
    return { content, setPost };
  }, [content]);

  return <BlogContext.Provider value={value}>{children}</BlogContext.Provider>;
};

// context consumer hook
export const useBlogContext = () => {
  // get the context
  const context = React.useContext(BlogContext);

  // if `undefined`, throw an error
  if (context === undefined) {
    throw new Error('useBlogContext was used outside of its Provider');
  }

  return context;
};
