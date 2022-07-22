import * as React from 'react';
import type { Post } from 'typings/my-mdx/index';

export type ContentProviderProps = {};

export type ContentContextValue = {
  content: Post | null;
  setPost: (post: Post) => void;
};

export const ContentContext = React.createContext<ContentContextValue | undefined>(undefined);

export const ContentProvider: React.FC<ContentProviderProps> = ({ children }) => {
  const [content, setContent] = React.useState<Post | null>(null);

  const value = React.useMemo(() => {
    const setPost = (newPost: Post) => {
      setContent(newPost);
    };
    return { content, setPost };
  }, [content]);

  return <ContentContext.Provider value={value}>{children}</ContentContext.Provider>;
};

export const useContent = () => {
  const context = React.useContext(ContentContext);
  if (context === undefined) {
    throw new Error('useContent must be used within a ContentProvider');
  }
  return context;
};

export default ContentProvider;
