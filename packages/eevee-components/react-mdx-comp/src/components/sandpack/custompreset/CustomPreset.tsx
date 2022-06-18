/* eslint-disable react/jsx-no-bind */
/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from 'react';
import { flushSync } from 'react-dom';
import {
  useSandpack,
  useActiveCode,
  SandpackCodeEditor,
  SandpackThemeProvider,
  SandpackReactDevTools,
} from '@codesandbox/sandpack-react';
import cn from 'classnames';
import scrollIntoView from 'scroll-into-view-if-needed';
import { IconChevron } from '../icons/IconChevron';
import { NavigationBar } from '../navigationbar/index';
import { Preview } from '../preview/index';
import { CustomTheme } from '../themes/index';
import { useSandpackLint } from '../useSandpackLint/index';
import { makeStyles, shorthands } from '@griffel/react';
import { Button } from '@eevee/react-button';
import { tokens } from '@eevee/react-theme';

const useRootStyles = makeStyles({
  root: {
    ...shorthands.borderRadius('.5rem'),
  },

  expandButton: {
    display: 'flex',
    fontSize: '15px',
    justifyContent: 'space-between',
    ...shorthands.borderColor(tokens.border1),
    backgroundColor: tokens.background1,
    alignItems: 'center',
    zIndex: 10,
    borderTopLeftRadius: '0',
    borderTopRightRadius: '0',
    ...shorthands.padding('.25rem'),
    width: '100%',
    order: '2',
    top: 0,
    position: 'relative',

    [`@media (min-width: 1280px)`]: {
      order: 9999,
    },
  },

  expandSpan: {
    display: 'flex',
    ...shorthands.padding('.5rem'),
    color: tokens.foreground1,
    ':focus': {
      ...shorthands.outline('none'),
    },
  },

  icon: {
    marginRight: '.375rem',
    display: 'inline',
    fontSize: '20px',
  },

  preview: {
    order: 9999,

    [`@media (min-width: 1280px)`]: {
      order: 2,
    },
  },
});

// Workaround for https://github.com/reactjs/reactjs.org/issues/4686#issuecomment-1137402613.
const emptyArray: Array<any> = [];

export const CustomPreset = ({
  isSingleFile,
  showDevTools,
  onDevToolsLoad,
  devToolsLoaded,
}: {
  isSingleFile: boolean;
  showDevTools: boolean;
  devToolsLoaded: boolean;
  onDevToolsLoad: () => void;
}) => {
  const rootStyles = useRootStyles();

  const { lintErrors, lintExtensions } = useSandpackLint();
  const lineCountRef = React.useRef<{ [key: string]: number }>({});
  const containerRef = React.useRef<HTMLDivElement>(null);
  const { sandpack } = useSandpack();
  const { code } = useActiveCode();
  const [isExpanded, setIsExpanded] = React.useState(false);

  const { activePath } = sandpack;
  if (!lineCountRef.current[activePath]) {
    lineCountRef.current[activePath] = code.split('\n').length;
  }
  const lineCount = lineCountRef.current[activePath];
  const isExpandable = lineCount > 16 || isExpanded;

  return (
    <>
      <div className={rootStyles.root} ref={containerRef}>
        <NavigationBar showDownload={isSingleFile} />
        <SandpackThemeProvider theme={CustomTheme}>
          <div
            ref={sandpack.lazyAnchorRef}
            className={cn(
              'sp-layout sp-custom-layout',
              showDevTools && devToolsLoaded && 'sp-layout-devtools',
              isExpanded && 'sp-layout-expanded',
            )}
          >
            <SandpackCodeEditor
              showLineNumbers
              showInlineErrors
              showTabs={false}
              showRunButton={false}
              extensions={lintExtensions}
              extensionsKeymap={emptyArray}
            />
            <Preview className={rootStyles.preview} isExpanded={isExpanded} lintErrors={lintErrors} />
            {isExpandable && (
              <Button
                translate="yes"
                className={rootStyles.expandButton}
                onClick={() => {
                  const nextIsExpanded = !isExpanded;
                  flushSync(() => {
                    setIsExpanded(nextIsExpanded);
                  });
                  if (!nextIsExpanded && containerRef.current !== null) {
                    scrollIntoView(containerRef.current, {
                      scrollMode: 'if-needed',
                      block: 'nearest',
                      inline: 'nearest',
                    });
                  }
                }}
              >
                <span className={rootStyles.expandSpan}>
                  <IconChevron className={rootStyles.icon} displayDirection={isExpanded ? 'up' : 'down'} />
                  {isExpanded ? 'Show less' : 'Show more'}
                </span>
              </Button>
            )}
          </div>

          {showDevTools && <SandpackReactDevTools onLoadModule={onDevToolsLoad} />}
        </SandpackThemeProvider>
      </div>
    </>
  );
};
