import React, { CSSProperties, useState } from 'react';
import { UnstyledButton } from './common/UnstyledButton';
import { Editor } from './Editor';
import { TabbedEditorProps } from './types';

import stylex from '@ladifire-opensource/stylex';

const styles = stylex.create({
  wrapper: {
    padding: '16px',
    paddingTop: '0',
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    maxHeight: '100%',
  },

  trigger: {
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
    height: '46px',
  },

  // TODO: Share styles with Pane#Heading
  tabTrigger: {
    textTransform: 'uppercase',
    fontSize: '1rem',
    fontWeight: 'var(--weight)',
    cursor: 'pointer',
    margin: '0 -4px',
    padding: '8px 4px',
    color: 'var(--color)',

    '&:focus': {
      outlineOffset: '0px',
    },
  },
});

const TabbedEditors = ({
  paneData,
  // splitRatio,
  maxHeight,
  handleFormat,
  xstyle,
}: TabbedEditorProps) => {
  const [firstPane, secondPane] = paneData;

  const [activeLanguage, setActiveLanguage] = useState(firstPane.language);

  const activePane =
    activeLanguage === firstPane.language ? firstPane : secondPane;

  // TODO: Better keyboard support
  // Reach UI?

  return (
    <div className={stylex(styles.wrapper, xstyle)}>
      <div className={stylex(styles.trigger)}>
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
            xstyle={[styles.tabTrigger]}
            key={pane.language}
            onclick={() => setActiveLanguage(pane.language)}
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
