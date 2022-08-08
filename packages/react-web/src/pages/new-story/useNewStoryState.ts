import * as React from 'react';
import { serialize } from '../../components/Mdx/serialize';
import type { NewStoryState } from './NewStory.types';

const text = `
<PostImage source="https://mdg.imgix.net/assets/images/tux.png?auto=format&fit=clip&q=40&w=100" width="200" height="200" />
`.trim();

export const useNewStoryState = (state: NewStoryState): NewStoryState => {
  const [isOpenPreview, setOpenPreview] = React.useState(false);
  const [doc, setDoc] = React.useState<string>(text);
  const [compiledSource, setCompiledSource] = React.useState('');

  state.isOpenPreview = isOpenPreview;
  state.compiledSource = compiledSource;

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

  state.documentTitle.placeholder = 'This is title';
  state.documentTitle.spellCheck = 'false';
  state.documentTitle.name = 'documentTitle';
  state.documentTitle.type = 'text';

  return state;
};
