import type { PostI69n } from 'typings/my-mdx/index';
import { postCol, postI69nCol } from '@libs/index';
import { doc, setDoc } from 'firebase/firestore';

export const PublishStory = async (post: PostI69n) => {
  const ref = doc(postI69nCol);
  await setDoc(ref, post);
  return true;
};
