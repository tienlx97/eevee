import * as React from 'react';
import { serialize } from '../../components/Mdx/serialize';
import { Edit, Preview } from '@components/icons/index';
import type { NewStoryState } from './NewStory.types';
import type { Post, PostI69n, Toc } from 'typings/my-mdx/index';
import useSWR from 'swr';
import { PublishStory } from '@feature/new-story/index';
import { slugify } from '@eevee/react-utilities';
import { useAuthContext } from '@context/AuthContext';

const text =
  '# This is h1\r\n\r\n## This is h2\r\n\r\n### This is h3\r\n\r\n[This is text link](http://mimikyu.netlify.app/)\r\n\r\n*This is emphasis*\r\n\r\n**This is bold**\r\n\r\n***This is emphasis bold***\r\n\r\n~~This is strike through~~\r\n\r\n> This is quote\r\n\r\n1. This is ol 1\r\n2. This is ol 2\r\n\r\n- This is ol 1\r\n- This is ol 2\r\n\r\n`This is inline code`\r\n\r\n```js\r\nconst r = \'This is code block\';\r\n//...\r\nconsole.log(r);\r\n```\r\n\r\nThis is paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vehicula pretium dolor vel gravida. Donec feugiat tristique ullamcorper. Maecenas porttitor finibus tellus dapibus vehicula. Aenean pretium, libero at posuere scelerisque, arcu nisi consequat tortor, ac euismod sapien enim varius neque. Sed non egestas elit. Sed convallis scelerisque neque, id ultrices massa placerat interdum. Nam rutrum nibh nec suscipit porttitor. Morbi vel molestie sapien.\r\n\r\n***\r\n\r\n<PostImage\r\n  src="https://www.joshwcomeau.com/_next/image/?url=%2Fimages%2Fterminal-for-js-devs%2Ft-cd-up.png&w=1920&q=75"\r\n  width={4096}\r\n  height={2258}\r\n  alt="This is image"\r\n  title="This is image"\r\n/>\r\n';

export const useNewStoryState = (state: NewStoryState): NewStoryState => {
  const { state: user } = useAuthContext();
  const [isOpenPreview, setOpenPreview] = React.useState(false);
  const [doc, setDoc] = React.useState<string>(text);
  const [compiledSource, setCompiledSource] = React.useState('');
  const [tags, setTags] = React.useState<string[]>([]);

  state.titleRef = React.useRef<HTMLInputElement>(null);
  state.setTags = setTags;
  //
  const [publishVal, setPublishVal] = React.useState<PostI69n | null>(null);

  const { data: publishLoading } = useSWR(!publishVal ? null : publishVal, PublishStory);

  if (publishLoading === true) {
    setPublishVal(null);
    window.location.reload();
  }

  state.isOpenPreview = isOpenPreview;
  state.compiledSource = compiledSource;

  state.hiddenButton.icon = isOpenPreview ? <Edit /> : <Preview />;
  state.hiddenButton['aria-label'] = !isOpenPreview ? 'Edit mode' : 'Preview mode';
  state.hiddenButton.children = !isOpenPreview ? 'View' : 'Edit';

  state.hiddenButton.onClick = e => {
    if (!isOpenPreview) {
      serialize(doc, { parseFrontmatter: true }).then(p => {
        setCompiledSource(p.compiledSource);
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

  // state.blurSystem.style = {
  //   display: publishLoading === true ? 'none' : 'block',
  //   opacity: publishLoading === true ? 0 : 1,
  // };

  state.publishAction = () => {
    if (!state.titleRef || !state.titleRef.current) {
      return;
    }

    const titleVal = state.titleRef.current.value.trim();

    if (titleVal === '') {
      //
    }

    if (tags.length === 0) {
      //
    }

    if (doc.trim() === '') {
      //
    }

    serialize(doc).then(r => {
      setPublishVal({
        compileCode: r.compiledSource,
        mdxCode: doc,
        date: Date.now().toString(),
        toc: r.toc,
        readTime: r.readTime,
        slugify: `${slugify(titleVal)}-${Date.now()}`,
        authorID: user.user.uid,
        tags,
        title: titleVal,
      });
    });
  };

  return state;
};
