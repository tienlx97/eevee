import * as React from 'react';
import { useParams } from 'react-router-dom';
import { getDocs, query, where } from 'firebase/firestore';
import { postCol } from '../firebase/firebase';
import { useBlogContext } from '../contexts/BlogContext';
import { useErrorStatusContext } from '../contexts/ErrorContext';

export const useFetchBlog = () => {
  const { slug } = useParams();
  const { setErrorStatusCode } = useErrorStatusContext();
  const { setPost, content } = useBlogContext();

  React.useEffect(() => {
    let preventQuickRender = true;

    const findBySlug = async () => {
      const slugQuery = query(postCol, where('frontmatter.slugify', '==', slug));
      const snaps = await getDocs(slugQuery);

      if (snaps.empty) {
        setErrorStatusCode(404);
        setPost(undefined);
      }

      snaps.forEach(snap => {
        // snap.data() is never undefined for query doc snapshots
        if (preventQuickRender) {
          setPost(snap.data());
        }
      });
    };

    findBySlug()
      // make sure to catch any error
      .catch(err => setErrorStatusCode(404));

    return () => {
      // cancel any future `setPost`
      preventQuickRender = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slug]);

  return { content };
};
