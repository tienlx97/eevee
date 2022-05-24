/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';

interface ContentContextProps {
  children?: React.ReactNode;
  contentType: string;
  slug?: string;
  title?: string;
  subtitle?: string;
  category?: string;
  formattedCategory?: string;
  isPublished?: boolean;
  location?: Location;
  hits?: any;
}

export const ContentContext = React.createContext<ContentContextProps>(
  {} as any
);

export const ContentProvider = ({
  children,
  contentType,
  slug,
  title,
  subtitle,
  category,
  formattedCategory,
  isPublished,
  location,
  hits,
}: ContentContextProps) => {
  const data = React.useMemo(
    () => ({
      contentType,
      slug,
      title,
      subtitle,
      category,
      formattedCategory,
      isPublished,
      location,
      hits,
    }),
    [
      contentType,
      slug,
      title,
      subtitle,
      category,
      formattedCategory,
      isPublished,
      location,
      hits,
    ]
  );

  return (
    <ContentContext.Provider value={data}>{children}</ContentContext.Provider>
  );
};

export default ContentProvider;
