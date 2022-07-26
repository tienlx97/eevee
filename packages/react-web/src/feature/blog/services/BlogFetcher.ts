import { postCol } from '@lib/firebase/index';
import { query, where, limit, getDocs } from 'firebase/firestore';
import { delay } from '@lib/index';

export const BlogFetcher = async (slug: string) => {
  const slugQuery = query(postCol, where('frontmatter.slugify', '==', slug), limit(1));
  const snaps = await getDocs(slugQuery);

  await delay(2000);
  if (snaps.empty) {
    return null;
  }

  return snaps.docs[0].data();
};
