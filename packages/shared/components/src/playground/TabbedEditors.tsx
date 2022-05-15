import React, { CSSProperties, useState } from 'react';
import { makeStyles, mergeClasses, shorthands } from '@griffel/react';

import { UnstyledButton } from '../button';
import { Editor } from './Editor';

import { ITabbedEditorProps } from './TabbedEditors.types';

const useStyles = makeStyles({
  wrapper: {
    ...shorthands.padding('16px'),
    paddingTop: '0',
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    maxHeight: '100%',
  },

  trigger: {
    display: 'flex',
    alignItems: 'center',
    ...shorthands.gap('16px'),
    height: '46px',
  },

  // TODO: Share styles with Pane#Heading
  tabTrigger: {
    textTransform: 'uppercase',
    fontSize: '1rem',
    fontWeight: 'var(--weight)',
    ...shorthands.margin('0 -4px'),
    ...shorthands.padding('8px 4px'),
    color: 'var(--color)',
    cursor: 'pointer',

    '&:focus': {
      outlineOffset: '0px',
    },
  },
});

const TabbedEditors = ({
  paneData,
  splitRatio,
  maxHeight,
  handleFormat,
  className,
  ...delegated
}: ITabbedEditorProps) => {
  const styles = useStyles();
  const classes = mergeClasses(styles.wrapper, className);

  const [firstPane, secondPane] = paneData;

  const [activeLanguage, setActiveLanguage] = useState(firstPane.language);

  const activePane =
    activeLanguage === firstPane.language ? firstPane : secondPane;

  // TODO: Better keyboard support
  // Reach UI?

  return (
    <div // Wrapper
      {...delegated}
      className={classes}
    >
      <div // Triggers
        className={styles.trigger}
      >
        {paneData.map((pane) => (
          <UnstyledButton
            style={
              {
                '--weight':
                  pane === activePane
                    ? 'var(--font-weight-bold)'
                    : 'var(--font-weight-normal)',
                '--color':
                  pane === activePane
                    ? 'var(--color-text)'
                    : 'var(--color-gray-300)',
              } as CSSProperties
            }
            className={styles.tabTrigger}
            key={pane.language}
            onClick={() => setActiveLanguage(pane.language)}
          >
            {pane.label}
          </UnstyledButton>
        ))}
      </div>
      <Editor
        code={activePane.code}
        language={activePane.language}
        handleUpdate={activePane.handleUpdate}
        handleFormat={handleFormat}
        maxHeight={maxHeight}
      />
    </div>
  );
};

export default TabbedEditors;
export { TabbedEditors };
