import React, { CSSProperties, KeyboardEvent, useRef } from 'react';
import SimpleEditor from 'react-simple-code-editor';
import Highlight, { defaultProps } from 'prism-react-renderer';
import { syntaxTheme } from '@vaporeon/helpers';
import { moveCursorWithinInput } from '@vaporeon/utils';
import { IEditorProps } from './Editor.types';

import { makeStyles, shorthands } from '@griffel/react';
import { ConfigContext } from '@vaporeon/config-context';

const FONT_SIZE = 14;
const LINE_HEIGHT = 20;

const useStyles = makeStyles({
  wrapper: {
    maxHeight: 'var(--max-height)',
    ...shorthands.overflow('auto'),
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: '0%',

    /* Firefox scrollbars */
    scrollbarColor: 'var(--color-gray-300) var(--syntax-bg)',
    scrollbarWidth: 'thin',
  },

  codeEditor: {
    '-colorPrimary': 'hsl(210deg 13% 50% / 0.25)',
    backgroundColor: 'var(--syntax-bg)',
    color: 'var(--color-text)',
    fontFamily: 'var(--font-family-mono)',
    fontFeatureSettings: 'normal',
    ...shorthands.padding('16px'),
    ...shorthands.borderRadius('0px'),
    fontSize: `${FONT_SIZE}px`,
    lineHeight: `${LINE_HEIGHT}px`,

    '& > textarea, & .token-line, & .token-line *': {
      outlineColor: 'initial !important',
      outlineStyle: 'none !important',
      outlineWidth: 'initial !important',
      // ...shorthands.outline('none !important'),
      fontSize: `${FONT_SIZE}px !important`,
      lineHeight: `${LINE_HEIGHT + 2}px !important`,
    },
  },
});

const Editor = ({
  code,
  maxHeight,
  language,
  handleFormat,
  handleUpdate,
}: IEditorProps) => {
  const styles = useStyles();

  const textareaRef = useRef(null);

  // const disableTabInCodeSnippets = false;
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

  return (
    <label // Wrapper
      style={{ '--max-height': maxHeight } as CSSProperties}
      className={styles.wrapper}
    >
      <SimpleEditor
        // style={
        //   /* Update text-select color by setting primary */
        //   { '--color-primary': 'hsl(210deg 13% 50% / 0.25)' } as CSSProperties
        // }
        className={styles.codeEditor}
        onValueChange={handleUpdate}
        value={code}
        ignoreTabKey={disableTabInCodeSnippets}
        onKeyDown={handleKeyDown}
        ref={textareaRef}
        title="Editor"
        highlight={(value) => (
          <Highlight
            {...defaultProps}
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            theme={syntaxTheme as any}
            code={value}
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
