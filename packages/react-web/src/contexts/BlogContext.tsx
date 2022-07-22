import * as React from 'react';
import type { Post } from 'typings/my-mdx/index';

export type BlogContextValue = {
  content?: Post;
  postNotFound: boolean;
  setPost: (post?: Post) => void;
};

const BlogContext = React.createContext<BlogContextValue | undefined>(undefined);

export const BlogContextProvider: React.FC = ({ children }) => {
  const [content, setContent] = React.useState<Post>();
  const [postNotFound, setPostNotFound] = React.useState<boolean>(false);

  const value = React.useMemo(() => {
    const setPost = (newPost?: Post) => {
      setContent(newPost);
      if (newPost) {
        setPostNotFound(false);
      } else {
        setPostNotFound(true);
      }
    };
    return { content, setPost, postNotFound };
  }, [content, postNotFound]);

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
