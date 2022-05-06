import React, {
  CSSProperties,
  FC,
  Fragment,
  KeyboardEvent,
  useRef,
} from 'react';
import SimpleEditor from 'react-simple-code-editor';
import Highlight, { defaultProps } from 'prism-react-renderer';
import { syntaxTheme } from '@eevee/helpers';
import stylex from '@ladifire-opensource/stylex';
import { moveCursorWithinInput } from '@eevee/utils';
import { ConfigContext } from '@eevee/contexts';

const styles = stylex.create({
  wrapper: {
    maxHeight: 'var(--max-height)',
    overflow: 'auto',
    flex: '1',
    scrollbarColor: 'var(--color-gray-300) var(--syntax-bg)',
    scrollbarWidth: 'thin',
  },
});

type EditorProps = {
  code: string;
  maxHeight: number;
  handleFormat: () => void;
  handleUpdate: (value: string) => void;
};

const Editor = ({
  code,
  maxHeight,
  handleFormat,
  handleUpdate,
}: EditorProps) => {
  const textareaRef = useRef(null);

  const { disableTabInCodeSnippets } = React.useContext(ConfigContext);

  const handleKeyDown = (ev: KeyboardEvent): void => {
    if (ev.metaKey && ev.key === 's') {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const input = (textareaRef.current as any)._input as HTMLTextAreaElement;
      const cursorAt = input.selectionStart;

      ev.preventDefault();
      handleFormat();

      window.requestAnimationFrame(() => {
        moveCursorWithinInput(input, cursorAt);
      });
    }
  };

  const varsStyle = {
    '--max-height': maxHeight,
  } as CSSProperties;

  return (
    <label className={stylex(styles.wrapper)} style={varsStyle}>
      <SimpleEditor
        onValueChange={handleUpdate}
        value={code}
        ignoreTabKey={disableTabInCodeSnippets ? true : false}
        onKeyDown={handleKeyDown}
        ref={textareaRef}
      />
    </label>
  );
};
