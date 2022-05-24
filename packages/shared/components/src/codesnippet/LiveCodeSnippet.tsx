/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';

import { syntaxTheme } from '@vaporeon/helpers';
import { CheckBox } from '../checkbox';
import { FullBleed } from '../fullbleed';
import { FullBleedTutorial } from '../fullbleedtutorial';
import { ConfigContext } from '../config-context';
import { ContentContext } from '../content-context';

import { makeStyles, mergeClasses, shorthands } from '@griffel/react';
import { ILiveCodeSnippet } from './types';

// import './LiveCodeSnippet.css';

const GUTTER = 30;

const useStyles = makeStyles({
  wrapper: {
    position: 'relative',
    display: 'flex',
    fontFamily: 'var(--font-family-mono)',
    fontSize: '18px',
    maxWidth: '1200px',
    marginLeft: 'auto',
    marginRight: 'auto',

    '@media (max-width: 1200px)': {
      maxWidth: '100vw',
    },

    '@media (max-width:768px)': {
      flexDirection: 'column',
    },

    '@media (max-width:563px)': {
      marginLeft: '-16px',
      marginRight: '-16px',
    },

    '@media (min-width:769px)': {
      ...shorthands.borderRadius('6px'),
      boxShadow: '0px 0px 35px 35px var(--color-background)',
    },
  },

  // col: {
  //   position: 'relative',

  //   flexGrow: 1,
  //   flexShrink: 1,
  //   flexBasis: '0%',

  //   outlineOffset: '2px',

  //   // .lcsp__wrapper .col {
  //   //   width: '50%';
  //   // }

  //   // @media (max-width: 1024px) {
  //   //   .lcsp__wrapper .col {
  //   //     width: 70%;
  //   //   }
  //   // }

  //   // @media (max-width:768px) {
  //   //   .lcsp__wrapper .col {
  //   //     width: 100%;
  //   //   }
  //   // }
  // },

  innerWrapper: {
    maxWidth: '425px',
  },

  codeCol: {
    zIndex: '2',
    ...shorthands.padding('32px'),
    backgroundColor: 'var(--syntax-bg)',
    maxHeight: '80vh',
    ...shorthands.overflow('auto'),

    '@media (max-width: 563px)': {
      paddingLeft: '-16px',
      paddingRight: '-16px',
    },
  },

  previewCol: {
    zIndex: '1',
    fontSize: '24px',
    paddingLeft: `${GUTTER}px`,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    ...shorthands.border('2px', 'solid', 'var(--syntax-bg)'),
    backgroundColor: 'var(--color-blurred-background)',
    backdropFilter: 'blur(6px)',

    '@media (max-width: 768px)': {
      ...shorthands.padding('32px', '0'),
    },
  },

  // TODO: This needs some style love
  clickToReveal: {
    position: 'absolute',
    top: '0',
    left: `${GUTTER}px`,
    right: '0',
    bottom: '0',
    width: `calc(100% - ${GUTTER}px)`,
    zIndex: '100',
    ...shorthands.border('none'),
    backgroundColor: 'transparent',
    backdropFilter: 'blur(10px)',
    boxShadow: '0px 0px 35px 35px var(--color-background)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: `${GUTTER}px`,
    fontSize: '22px',
    fontWeight: 'bold',
    color: '#999',
  },

  error: {
    display: 'block',
    fontSize: '18px',
  },

  footer: {
    paddingTop: '16px',
    paddingBottom: '8px',
    display: 'flex',
    justifyContent: 'flex-start',
    maxWidth: '1200px',
    marginLeft: 'auto',
    marginRight: 'auto',

    '@media (orientation: portrait)': {
      display: 'none',
    },

    '@media (max-width: 1200px)': {
      paddingLeft: '32px',
    },
  },

  language: {
    position: 'absolute',
    top: '6px',
    right: '12px',
    fontSize: '18px',
    textTransform: 'uppercase',
    color: 'var(--color-gray-600)',
    fontWeight: 'var(--font-weight-medium)',
    fontFamily: 'var(--font-family)',
    pointerEvents: 'none',
  },
});

const LiveCodeSnippet = ({
  lang,
  code,
  inline,
  scope,
  split = [60, 40],
}: // ClickToReveal,
ILiveCodeSnippet) => {
  const styles = useStyles();

  const [isFocused, setIsFocused] = React.useState(false);

  const { disableTabInCodeSnippets, setDisableTabInCodeSnippets } =
    React.useContext(ConfigContext);

  const { contentType } = React.useContext(ContentContext) || {};
  const FullBleedComponent =
    contentType === 'tutorial' ? FullBleedTutorial : FullBleed;

  const splitArray = typeof split === 'string' ? JSON.parse(split) : split;

  // TODO: clickToReveal support
  const shouldCoverPreview = false;

  return (
    <FullBleedComponent>
      <LiveProvider
        noInline={!inline}
        code={code}
        // mountStylesheet={false}
        theme={syntaxTheme as any}
        scope={scope}
      >
        <div
          className={mergeClasses(styles.wrapper, 'lcsp__wrapper')}
          data-code-snippet="true"
        >
          <div
            className={mergeClasses(
              // styles.col,
              'lcsp__wrapper--col',
              styles.codeCol
            )}
            style={{
              outline: isFocused ? '2px auto var(--color-primary)' : 'none',
              flex: splitArray[0],
            }}
          >
            {lang && <div className={styles.language}>{lang}</div>}

            <code className={styles.innerWrapper}>
              <LiveEditor
                language={lang}
                onFocus={() => {
                  setIsFocused(true);
                }}
                onBlur={() => {
                  setIsFocused(false);
                }}
                onKeyDown={(event) => {
                  if (disableTabInCodeSnippets) {
                    if (event.keyCode === 9) {
                      event.preventDefault();
                      (event.target as HTMLElement).blur();
                    }
                  }
                }}
              />
            </code>
            <LiveError className={styles.error} />
          </div>

          <div
            className={mergeClasses(
              // styles.col,
              'lcsp__wrapper--col',
              styles.previewCol
            )}
            style={{ flex: splitArray[1] }}
          >
            <LivePreview />

            {shouldCoverPreview && (
              <button className={styles.clickToReveal}>Reveal</button>
            )}
          </div>
        </div>

        <footer className={styles.footer}>
          <CheckBox
            checked={!disableTabInCodeSnippets}
            onChange={() =>
              setDisableTabInCodeSnippets(!disableTabInCodeSnippets)
            }
            label="Enable ‘tab’ key"
          />
        </footer>
      </LiveProvider>
    </FullBleedComponent>
  );
};

export default LiveCodeSnippet;
