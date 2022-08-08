// import * as React from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';
// import { useBlogContext } from '@context/index';
// import { withPromise, SuspenseResponse } from '@libs/index';
// import { BlogFetcher } from '../services/BlogFetcher';
// import type { Post } from 'typings/my-mdx/index';

// import useSWR from 'swr';

// export const useBlogAPISuspense = (useContext: boolean, slug?: string, fakeDelay = 2000) => {
//   const navigate = useNavigate();
//   const { pathname } = useLocation();

//   const [blog, setBlog] = React.useState<SuspenseResponse<Post | null>>();
//   const { setPost, content } = useBlogContext();

//   React.useEffect(() => {
//     if (!slug) {
//       return;
//     }
//     const _blog = withPromise(BlogFetcher(slug), navigate, pathname);

//     if (useContext) {
//       setPost(_blog);
//     } else {
//       setBlog(_blog);
//     }
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [slug]);

//   return useContext ? content?.read() : blog?.read();
// };

// export const useBlogAPISWR = (slug?: string, fakeDelay = 2000) => {
//   const navigate = useNavigate();
//   const { pathname } = useLocation();
//   const { data } = useSWR(slug ? slug : null, BlogFetcher, { suspense: true });

//   React.useEffect(() => {
//     if (!slug) {
//       return;
//     }

//     if (data === null) {
//       navigate(pathname, {
//         replace: true,
//         state: {
//           errorStatusCode: 404,
//         },
//       });
//     }
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [slug, data]);

//   return data;
// };

export {};
