// import * as React from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';
// import { getDocs, query, where } from 'firebase/firestore';
// import { postCol } from '../firebase/firebase';
// import { useBlogContext } from '../context/BlogContext';

// export const useFetchBlog = (slug?: string) => {
//   const navigate = useNavigate();
//   const { pathname } = useLocation();
//   const { setPost, content } = useBlogContext();

//   React.useEffect(() => {
//     let preventQuickRender = true;

//     const findBySlug = async () => {
//       const slugQuery = query(postCol, where('frontmatter.slugify', '==', slug));
//       const snaps = await getDocs(slugQuery);

//       if (snaps.empty) {
//         // setPost(undefined);
//         navigate(pathname, {
//           replace: true,
//           state: {
//             errorStatusCode: 404,
//           },
//         });
//       }

//       snaps.forEach(snap => {
//         // snap.data() is never undefined for query doc snapshots
//         if (preventQuickRender) {
//           // setPost(snap.data());
//         }
//       });
//     };

//     findBySlug()
//       // make sure to catch any error
//       .catch(() =>
//         navigate(pathname, {
//           replace: true,
//           state: {
//             errorStatusCode: 404,
//           },
//         }),
//       );

//     return () => {
//       // cancel any future `setPost`
//       preventQuickRender = false;
//     };
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [slug]);

//   return { content };
// };
