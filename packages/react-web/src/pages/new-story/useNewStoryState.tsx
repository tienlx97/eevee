import * as React from 'react';
import { serialize } from '../../components/Mdx/serialize';
import { Edit, Preview } from '@components/icons/index';
import type { NewStoryState } from './NewStory.types';
import type { Post, Toc } from 'typings/my-mdx/index';
import useSWR from 'swr';
import { PublishStory } from '@feature/new-story/index';

const text =
  '# This is h1\r\n\r\n## This is h2\r\n\r\n### This is h3\r\n\r\n[This is text link](http://mimikyu.netlify.app/)\r\n\r\n*This is emphasis*\r\n\r\n**This is bold**\r\n\r\n***This is emphasis bold***\r\n\r\n~~This is strike through~~\r\n\r\n> This is quote\r\n\r\n1. This is ol 1\r\n2. This is ol 2\r\n\r\n- This is ol 1\r\n- This is ol 2\r\n\r\n`This is inline code`\r\n\r\n```js\r\nconst r = \'This is code block\';\r\n//...\r\nconsole.log(r);\r\n```\r\n\r\nThis is paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vehicula pretium dolor vel gravida. Donec feugiat tristique ullamcorper. Maecenas porttitor finibus tellus dapibus vehicula. Aenean pretium, libero at posuere scelerisque, arcu nisi consequat tortor, ac euismod sapien enim varius neque. Sed non egestas elit. Sed convallis scelerisque neque, id ultrices massa placerat interdum. Nam rutrum nibh nec suscipit porttitor. Morbi vel molestie sapien.\r\n\r\n***\r\n\r\n<PostImage\r\n  src="https://www.joshwcomeau.com/_next/image/?url=%2Fimages%2Fterminal-for-js-devs%2Ft-cd-up.png&w=1920&q=75"\r\n  width={4096}\r\n  height={2258}\r\n  alt="This is image"\r\n  title="This is image"\r\n/>\r\n';

export const useNewStoryState = (state: NewStoryState): NewStoryState => {
  const [isOpenPreview, setOpenPreview] = React.useState(false);
  const [doc, setDoc] = React.useState<string>(text);
  const [compiledSource, setCompiledSource] = React.useState('');
  const [toc, setToc] = React.useState<Toc[] | undefined>(undefined);
  const titleRef = React.useRef<HTMLInputElement>(null);
  //
  const [publishVal, setPublishVal] = React.useState<Post | null>(null);

  const { data: publishLoading } = useSWR(!publishVal ? null : publishVal, PublishStory);

  state.documentTitle.ref = titleRef;
  state.isOpenPreview = isOpenPreview;
  state.compiledSource = compiledSource;
  state.toc = toc;

  state.hiddenButton.icon = isOpenPreview ? <Edit /> : <Preview />;
  state.hiddenButton['aria-label'] = !isOpenPreview ? 'Edit mode' : 'Preview mode';
  state.hiddenButton.children = !isOpenPreview ? 'View' : 'Edit';

  state.hiddenButton.onClick = e => {
    if (!isOpenPreview) {
      serialize(doc, { parseFrontmatter: true }).then(p => {
        setCompiledSource(p.compiledSource);
        setToc(p.toc);
        setOpenPreview(true);
      });
    } else {
      setOpenPreview(false);
    }
  };

  state.editor.initialDoc = doc;
  state.editor.onChange = React.useCallback(newDoc => {
    setDoc(newDoc);
  }, []);

  state.documentTitle.placeholder = 'This is title';
  state.documentTitle.spellCheck = 'false';
  state.documentTitle.name = 'documentTitle';
  state.documentTitle.type = 'text';

  state.blurSystem.style = {
    display: publishLoading ? 'block' : 'none',
    opacity: publishLoading ? 1 : 0,
  };

  const publishPost = () => {
    if (!titleRef.current) {
      return;
    }

    const titleVal = titleRef.current.value.trim();

    if (titleVal === '') {
      //
    }

    if (doc.trim() === '') {
      //
    }
  };

  return state;
};
