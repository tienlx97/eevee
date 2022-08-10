import { postCol } from '@libs/firebase/index';
import { query, where, limit, getDocs } from 'firebase/firestore';
import { delay } from '@libs/index';

export const BlogFetcher = async (slug?: string) => {
  const slugQuery = query(postCol, where('frontmatter.slugify', '==', slug), limit(1));
  const snaps = await getDocs(slugQuery);

  await delay(400);
  if (snaps.empty) {
    return null;
  }

  return snaps.docs[0].data();
};
