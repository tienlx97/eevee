/* eslint-disable import/no-extraneous-dependencies */
import { useCallback, useEffect, useMemo, useState } from 'react';
import {
  BabelPrettierState,
  CssPrettierState,
  Dispatcher,
  HTMLPrettierState,
  JsPrettierState,
  Language,
  PaneDataReturnProps,
  UsePaneProps,
  UsePrettierProps,
} from './types';

import { useScrollDisabler } from '@eevee/hooks';

// It is way too easy to accidentally use the same ID multiple
// times in a given lesson. When this happens, editing one
// playground can break the other with the same ID.
const useDuplicateIdWarning = (id: string) => {
  useEffect(() => {
    if (process.env.NODE_ENV === 'production') {
      return;
    }

    const allMatches = document.querySelectorAll(`[data-id=${id}]`);

    if (allMatches.length > 1) {
      console.error('MULTIPLE PLAYGROUNDS USE SAME ID:', id);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};

const usePrettier = ({
  htmlCode,
  setHtmlCode,
  cssCode,
  setCssCode,
  jsCode,
  setJsCode,
}: UsePrettierProps) => {
  const [prettier, setPrettier] = useState<JsPrettierState>();
  const [babelParser, setBabelParser] = useState<BabelPrettierState>();
  const [cssParser, setCssParser] = useState<CssPrettierState>();
  const [htmlParser, setHtmlParser] = useState<HTMLPrettierState>();

  useEffect(() => {
    Promise.all([
      import('prettier/standalone'),
      import('prettier/parser-html'),
      import('prettier/parser-postcss'),
      import('prettier/parser-babel'),
    ])
      .then(([js, html, css, babel]) => {
        setPrettier(js);
        setHtmlParser(html);
        setCssParser(css);
        setBabelParser(babel);
      })
      .catch((err) => {
        console.error('Could not load Prettier and its parsers:', err);
      });
  }, []);

  const hasLoaded = !!prettier && !!htmlParser && !!cssParser && !!babelParser;

  const handleFormat = useCallback(() => {
    if (!hasLoaded) {
      return;
    }

    const prettierOptions = {
      // TODO: Be smart about this, somehow?
      printWidth: 40,
    };

    if (jsCode) {
      setJsCode(
        prettier.format(jsCode, {
          parser: 'babel',
          plugins: [babelParser],
          ...prettierOptions,
        })
      );
    }

    if (cssCode) {
      setCssCode(
        prettier.format(cssCode, {
          parser: 'css',
          plugins: [cssParser],
          ...prettierOptions,
        })
      );
    }

    if (htmlCode) {
      setHtmlCode(
        prettier.format(htmlCode, {
          parser: 'html',
          plugins: [htmlParser],
          ...prettierOptions,
        })
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hasLoaded, jsCode, cssCode, htmlCode]);

  return handleFormat;
};

const useFullscreen = (startFullscreened?: boolean) => {
  const [isFullscreened, setIsFullscreened] = useState(startFullscreened);

  useScrollDisabler({ disabled: isFullscreened });

  useEffect(() => {
    if (!isFullscreened) {
      return;
    }

    function handleKeydown(ev: KeyboardEvent) {
      if (ev.key === 'Escape') {
        setIsFullscreened(false);
      }
    }

    window.addEventListener('keydown', handleKeydown);

    window.requestAnimationFrame(() => {
      // HACK — Probably shouldn't use an ID here.
      // Though it's safe since only 1 frame can be fullscreened
      // at once.
      const fullscreenElem = document.querySelector(`#fs-wrapper`);

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (fullscreenElem as any).focus();
    });

    return () => {
      window.removeEventListener('keydown', handleKeydown);
    };
  }, [isFullscreened]);

  const obj = {
    isFullscreened,
    toggleFullscreen: () => setIsFullscreened((f) => !f),
  };

  return obj;
};

const usePaneData = ({
  mode,
  htmlCode,
  setHtmlCode,
  cssCode,
  setCssCode,
  jsCode,
  setJsCode,
}: UsePaneProps) => {
  const panes = useMemo(() => {
    const paneData = [
      {
        language: 'markup',
        label: 'HTML',
        code: htmlCode,
        handleUpdate: setHtmlCode,
      },
      {
        language: 'css',
        label: 'CSS',
        code: cssCode,
        handleUpdate: setCssCode,
      },
    ];

    if (mode === 'react') {
      paneData.unshift({
        language: 'jsx',
        label: 'JSX',
        code: jsCode,
        handleUpdate: setJsCode,
      });
    } else {
      paneData.push({
        language: 'javascript',
        label: 'JS',
        code: jsCode,
        handleUpdate: setJsCode,
      });
    }

    return paneData.filter(
      ({ code }) => typeof code === 'string'
    ) as PaneDataReturnProps[];
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mode, htmlCode, cssCode, jsCode]);

  if (panes.length === 0 || panes.length === 3) {
    console.error(
      'Passed too many code snippets! I only understand 1 or 2 code snippets at once'
    );
  }

  return panes;
};

export { usePaneData, usePrettier, useDuplicateIdWarning, useFullscreen };
