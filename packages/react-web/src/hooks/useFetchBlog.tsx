import * as React from 'react';
import { useParams } from 'react-router-dom';
import { getDocs, query, where } from 'firebase/firestore';
import { postCol } from '../firebase/firebase';
import { useBlogContext } from '../contexts/BlogContext';

export const useFetchBlog = () => {
  const { slug } = useParams();
  const { setPost, content, postNotFound } = useBlogContext();

  React.useEffect(() => {
    let preventQuickRender = true;

    const findBySlug = async () => {
      const slugQuery = query(postCol, where('frontmatter.slugify', '==', slug));
      const snaps = await getDocs(slugQuery);

      if (snaps.empty) {
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
      .catch(err => {
        throw err;
      });

    return () => {
      // cancel any future `setPost`
      preventQuickRender = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slug]);

  return { content, postNotFound };
};
