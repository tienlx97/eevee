/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */
import * as React from 'react';
import { useSandpack, LoadingOverlay } from '@codesandbox/sandpack-react';
import { Error } from '../error/index';
// import { SandpackConsole } from './Console';
import type { LintDiagnostic } from '../useSandpackLint/index';
import { makeStyles, mergeClasses, shorthands } from '@griffel/react';
import { tokens } from '@eevee/react-theme';

const useRootStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
  },

  expanded: {
    ...shorthands.padding(0),

    [`@media (min-width: 1024px)`]: {
      ...shorthands.padding('2rem'),
      borderBottomRightRadius: '0',
      borderBottomLeftRadius: '0',
    },

    [`@media (min-width: 768px)`]: {
      // backgroundColor: 'rgb(246 247 249)',
      backgroundColor: tokens.background2,
      height: '100%',
      position: 'relative',
      borderBottomRightRadius: '.5rem',
      borderBottomLeftRadius: '.5rem',
    },

    [`@media (min-width: 640px)`]: {
      ...shorthands.padding('.5rem'),
    },
  },

  iframe: {
    borderTopLeftRadius: '0',
    borderTopRightRadius: '0',

    backgroundColor: '#fff',

    width: '100%',
    maxWidth: '100%',

    [`@media (min-width: 768px)`]: {
      boxShadow: '0 0 #0000, 0 0 #0000, 0 4px 6px -1px rgba(0,0,0,.1),0 2px 4px -1px rgba(0,0,0,.06) ',
    },

    [`@media (min-width: 640px)`]: {
      ...shorthands.borderRadius('.5rem'),
    },
  },

  hideContent: {
    position: 'absolute',
    opacity: 0,
    pointerEvents: 'none',
  },
  showContent: {
    opacity: 1,
  },

  errorWrap: {
    ...shorthands.padding('.5rem'),
  },

  errorExpand: {
    position: 'sticky',
    top: '2rem',
  },
});

const generateRandomId = (): string => Math.floor(Math.random() * 10000).toString();

type CustomPreviewProps = {
  className?: string;
  customStyle?: Record<string, unknown>;
  isExpanded: boolean;
  lintErrors: LintDiagnostic;
};

function useDebounced(value: any): any {
  const ref = React.useRef<any>(null);
  const [saved, setSaved] = React.useState(value);
  React.useEffect(() => {
    clearTimeout(ref.current);
    ref.current = setTimeout(() => {
      setSaved(value);
    }, 300);
  }, [value]);
  return saved;
}

export const Preview = ({ customStyle, isExpanded, className, lintErrors }: CustomPreviewProps) => {
  const rootStyles = useRootStyles();

  const { sandpack, listen } = useSandpack();
  const [isReady, setIsReady] = React.useState(false);
  const [iframeComputedHeight, setComputedAutoHeight] = React.useState<number | null>(null);

  const {
    // error: rawError,
    registerBundler,
    unregisterBundler,
    errorScreenRegisteredRef,
    openInCSBRegisteredRef,
    loadingScreenRegisteredRef,
    status,
  } = sandpack;

  let { error: rawError } = sandpack;

  if (rawError && rawError.message === '_csbRefreshUtils.prelude is not a function') {
    // Work around a noisy internal error.
    rawError = null;
  }

  // Memoized because it's fed to debouncing.
  const firstLintError = React.useMemo(() => {
    if (lintErrors.length === 0) {
      return null;
    } else {
      const { line, column, message } = lintErrors[0];
      return {
        title: 'Lint Error',
        message: `${line}:${column} - ${message}`,
      };
    }
  }, [lintErrors]);

  if (rawError === null || rawError.title === 'Runtime Exception') {
    if (firstLintError !== null) {
      rawError = firstLintError;
    }
  }

  // It changes too fast, causing flicker.
  const error = useDebounced(rawError);

  const clientId = React.useRef<string>(generateRandomId());
  const iframeRef = React.useRef<HTMLIFrameElement | null>(null);

  // SandpackPreview immediately registers the custom screens/components so the bundler does not render any of them
  // TODO: why are we doing this during render?
  openInCSBRegisteredRef.current = true;
  errorScreenRegisteredRef.current = true;
  loadingScreenRegisteredRef.current = true;

  React.useEffect(() => {
    const iframeElement = iframeRef.current!;
    registerBundler(iframeElement, clientId.current);

    return () => {
      unregisterBundler(clientId.current);
    };
  }, []);

  React.useEffect(() => {
    const unsubscribe = listen((message: any) => {
      if (message.type === 'resize') {
        setComputedAutoHeight(message.height);
      } else if (message.type === 'start') {
        if (message.firstLoad) {
          setIsReady(false);
        }
      } else if (message.type === 'done') {
        setIsReady(true);
      }
    }, clientId.current);

    return () => {
      setIsReady(false);
      setComputedAutoHeight(null);
      unsubscribe();
    };
  }, [status === 'idle']);

  const overrideStyle = error
    ? {
        // Don't collapse errors
        maxHeight: undefined,
      }
    : null;
  const hideContent = !isReady || error;

  // WARNING:
  // The layout and styling here is convoluted and really easy to break.
  // If you make changes to it, you need to test different cases:
  // - Content -> (compile | runtime) error -> content editing flow should work.
  // - Errors should expand parent height rather than scroll.
  // - Long sandboxes should scroll unless "show more" is toggled.
  // - Expanded sandboxes ("show more") have sticky previews and errors.
  // - Sandboxes have autoheight based on content.
  // - That autoheight should be measured correctly! (Check some long ones.)
  // - You shouldn't see nested scrolls (that means autoheight is borked).
  // - Ideally you shouldn't see a blank preview tile while recompiling.
  // - Container shouldn't be horizontally scrollable (even while loading).
  // - It should work on mobile.
  // The best way to test it is to actually go through some challenges.

  return (
    <div
      className={mergeClasses(rootStyles.root, className)}
      style={{
        // TODO: clean up this mess.
        ...customStyle,
        ...overrideStyle,
      }}
    >
      <div className={rootStyles.expanded} style={{ overflow: !isExpanded && (error || isReady) ? 'auto' : undefined }}>
        <div
          style={{
            padding: 'initial',
            position: hideContent ? 'relative' : isExpanded ? 'sticky' : undefined,
            top: isExpanded ? '2rem' : undefined,
          }}
        >
          <iframe
            ref={iframeRef}
            className={mergeClasses(
              rootStyles.iframe,
              // We can't *actually* hide content because that would
              // break calculating the computed height in the iframe
              // (which we're using for autosizing). This is noticeable
              // if you make a compiler error and then fix it with code
              // that expands the content. You want to measure that.
              hideContent ? rootStyles.hideContent : rootStyles.showContent,
            )}
            title="Sandbox Preview"
            style={{
              height: iframeComputedHeight || '100%',
              zIndex: isExpanded ? 'initial' : -1,
            }}
          />
        </div>
        {error && (
          <div
            className={mergeClasses(
              rootStyles.errorWrap,
              // This isn't absolutely positioned so that
              // the errors can also expand the parent height.
              isExpanded && rootStyles.errorExpand,
            )}
          >
            <Error error={error} />
          </div>
        )}
        <LoadingOverlay clientId={clientId.current} loading={!isReady && iframeComputedHeight === null} />
      </div>
      {/* <SandpackConsole /> */}
    </div>
  );
};
