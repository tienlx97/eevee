import React, { CSSProperties, KeyboardEvent, useRef } from 'react';
import SimpleEditor from 'react-simple-code-editor';
import Highlight, { defaultProps } from 'prism-react-renderer';
import { syntaxTheme } from '@eevee/helpers';
import stylex from '@ladifire-opensource/stylex';
import { joinClasses, moveCursorWithinInput } from '@eevee/utils';
import { Language } from './types';

const styles = stylex.create({
  wrapper: {
    maxHeight: 'var(--max-height)',
    overflow: 'auto',
    flex: '1',
    scrollbarColor: 'var(--color-gray-300) var(--syntax-bg)',
    scrollbarWidth: 'thin',
  },

  codeEditor: {
    // '-colorPrimary': 'hsl(210deg 13% 50% / 0.25)',
    backgroundColor: 'var(--syntax-bg)',
    color: 'var(--color-text)',
    fontFamily: 'var(--font-family-mono)',
    fontFeatureSettings: 'normal',
    padding: '16px',
    borderRadius: '0px',
  },
});

type EditorProps = {
  code: string;
  language: Language;
  maxHeight?: string; // use vh
  handleFormat: () => void;
  handleUpdate: (value: string) => void;
};

const FONT_SIZE = 14;
const LINE_HEIGHT = 20;

const Editor = ({
  code,
  maxHeight,
  language,
  handleFormat,
  handleUpdate,
}: EditorProps) => {
  const textareaRef = useRef(null);

  const disableTabInCodeSnippets = false;
  // const { disableTabInCodeSnippets } = React.useContext(ConfigContext);

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

  const labelVarsStyle = {
    '--color-primary': 'hsl(210deg 13% 50% / 0.25)',
  } as CSSProperties;

  const editorVarsStyle = {
    '--max-height': maxHeight,
  } as CSSProperties;

  const classes = stylex.dedupe({
    fontSize: `${FONT_SIZE}px`,
    lineHeight: `${LINE_HEIGHT}px`,

    '& > textarea, & .token-line, & .token-line *': {
      outline: 'none !important',
      fontSize: `${FONT_SIZE}px !important`,
      lineHeight: `${LINE_HEIGHT + 2}px !important`,
    },
  });

  return (
    <label className={stylex(styles.wrapper)} style={labelVarsStyle}>
      <SimpleEditor
        style={editorVarsStyle}
        className={joinClasses(stylex(styles.codeEditor), classes)}
        onValueChange={handleUpdate}
        value={code}
        ignoreTabKey={disableTabInCodeSnippets}
        onKeyDown={handleKeyDown}
        ref={textareaRef}
        highlight={(codee) => (
          <Highlight
            {...defaultProps}
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            theme={syntaxTheme as any}
            code={codee}
            language={language}
          >
            {({ tokens, getLineProps, getTokenProps }) => (
              <>
                {tokens.map((line, i) => (
                  <div {...getLineProps({ line, key: i })}>
                    {line.map((token, key) => (
                      <span {...getTokenProps({ token, key })} />
                    ))}
                  </div>
                ))}
              </>
            )}
          </Highlight>
        )}
      />
    </label>
  );
};

export default Editor;
export { Editor };
