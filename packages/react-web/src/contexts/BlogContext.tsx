import * as React from 'react';
import type { Post } from 'typings/my-mdx/index';
import { SuspenseResponse } from '../utilities/suspense';

export type BlogContextValue = {
  content?: SuspenseResponse<Post>;
  setPost: (post: SuspenseResponse<Post>) => void;
};

const BlogContext = React.createContext<BlogContextValue | undefined>(undefined);

export const BlogContextProvider: React.FC = ({ children }) => {
  const [content, setContent] = React.useState<SuspenseResponse<Post>>();

  const value = React.useMemo(() => {
    const setPost = (post?: SuspenseResponse<Post>) => {
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
