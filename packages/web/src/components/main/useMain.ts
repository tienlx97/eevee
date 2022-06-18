import * as React from 'react';
import { resolveShorthand } from '@eevee/react-utilities';
import { MainProps, MainState } from './Main.types';
import { getDocs, addDoc, collection, doc, getDoc } from 'firebase/firestore';
import { postCol } from '../../firebase/firebase';

type User = {};

export const useMain = (props: MainProps, ref: React.Ref<HTMLElement>): MainState => {
  const { content, ...rest } = props;
  const state: MainState = {
    components: {
      root: 'main',
      content: 'div',
    },

    root: {
      ref,
      ...rest,
    },
    content: resolveShorthand(content, { defaultProps: { as: 'div' }, required: true }),
  };

  const [postContent, setPostContent] = React.useState<string | undefined>(undefined);

  React.useEffect(() => {
    const postDocRef = doc(postCol, '1');
    getDoc(postDocRef).then(p => {
      const data = p.data();
      if (data) {
        // eslint-disable-next-line no-console
        console.log(data);
        setPostContent(data.content);
      }
    });
  }, []);

  state.postContent = postContent;

  return state;
};
