import * as React from 'react';
import type { BlogState } from './Blog.types';
import { useParams, useNavigate } from 'react-router-dom';
import { getDocs, query, where } from 'firebase/firestore';
import { postCol } from '../../firebase/index';
import type { Post } from 'typings/my-mdx';

export const useBlogState = (state: BlogState): BlogState => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = React.useState<Post | undefined>(undefined);

  /**
   * If param changes value, findBySlug will be called twice.
   * If this happens quickly, it's possible to have a race condition where the first call
   * resolves after the second one, and thus the state will hold the older value.
   * The way to solve that issue is to have a variable which controls wether to update
   * the state or not.
   */
  React.useEffect(() => {
    let preventQuickRender = true;

    const findBySlug = async () => {
      const slugQuery = query(postCol, where('frontmatter.slugify', '==', slug));
      const snaps = await getDocs(slugQuery);

      if (snaps.empty) {
        navigate('/404', {
          state: {
            title: "This blog doesn't exist ",
          },
        });
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

  state.post = post;

  return state;
};
