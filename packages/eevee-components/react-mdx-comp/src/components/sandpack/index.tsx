/* eslint-disable @typescript-eslint/no-explicit-any */
import { makeStyles, mergeClasses, shorthands } from '@griffel/react';
import * as React from 'react';
import { tokens } from '@eevee/react-theme';
import { createFileMap } from './createFileMap/index';

const SandpackRoot = React.lazy(() => import('./sandpackRoot/SandpackRoot'));

const useRootStyles = makeStyles({
  root: {
    marginTop: '2rem',
    marginBottom: '2rem',
  },

  div1: {
    // shadow-lg dark:shadow-lg-dark
    ...shorthands.borderRadius('.5rem'),
  },

  div2: {
    height: '2.5rem',
    backgroundColor: tokens.background1,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'relative',
    zIndex: 10,
    ...shorthands.borderColor(tokens.border1),
    borderTopRightRadius: '.5rem',
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: 0,
  },

  div3: {
    paddingLeft: '1rem',
    paddingRight: '1rem',

    [`@media (min-width: 1024px)`]: {
      paddingLeft: '1.5rem',
      paddingRight: '1.5rem',
    },
  },

  div4: {
    paddingLeft: '.75rem',
    paddingRight: '.75rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    flexGrow: 1,
    textAlign: 'right',
  },

  div5: {
    order: 9999,
    maxHeight: '406px',
    height: 'auto',
    [`@media (min-width: 1280px)`]: {
      order: 2,
    },
  },
  // p-0 sm:p-2 md:p-4 lg:p-8 bg-card dark:bg-wash-dark h-full relative rounded-b-lg lg:rounded-b-none overflow-auto
  div6: {
    ...shorthands.padding(0),
    backgroundColor: tokens.background1,
    height: '100%',
    position: 'relative',
    borderBottomRightRadius: '.5rem',
    borderBottomLeftRadius: '.5rem',
    ...shorthands.overflow('auto'),

    [`@media (min-width: 640px)`]: {
      ...shorthands.padding('.5ren'),
    },

    [`@media (min-width: 768px)`]: {
      ...shorthands.padding('1rem'),
    },

    [`@media (min-width: 1024px)`]: {
      ...shorthands.padding('2rem'),
      borderBottomRightRadius: 0,
      borderBottomLeftRadius: 0,
    },
  },

  div7: {
    display: 'flex',
    height: '42px',
    fontSize: '15px',
    justifyContent: 'space-between',
    ...shorthands.borderColor(tokens.border1),
    backgroundColor: tokens.background1,
    alignItems: 'center',
    zIndex: 10,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    ...shorthands.padding('.25rem'),
    width: '100%',
    order: 2,
    borderBottomWidth: '1px',
    position: 'relative',
    top: 0,

    [`@media (min-width: 1280px)`]: {
      order: 9999,
    },
  },
});

const SandpackGlimmer = ({ code }: { code: string }) => {
  const rootStyles = useRootStyles();

  return (
    <div className={mergeClasses('sandpack-container', rootStyles.root)}>
      <div className={rootStyles.div1}>
        <div className={rootStyles.div2}>
          <div className={rootStyles.div3}>
            <div className="sp-tabs" />
          </div>
          <div className={rootStyles.div4} />
        </div>
        <div className="sp-wrapper">
          <div className="sp-layout sp-custom-layout" style={{ minHeight: '216px' }}>
            <div className="sp-stack h-auto" style={{ maxHeight: '406px' }}>
              <div className="sp-code-editor">
                <div className="sp-cm sp-pristine" style={{ overflow: 'auto' }}>
                  <div className="cm-editor">
                    <div>
                      <div
                        className="cm-gutters"
                        style={{ minHeight: '192px', position: 'sticky', paddingLeft: '2.25rem' }}
                      >
                        <div style={{ whiteSpace: 'pre' }} className="cm-gutter cm-lineNumbers  sp-pre-placeholder">
                          {code}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={mergeClasses('sp-stack', rootStyles.div5)}>
              <div className={rootStyles.div6} />
            </div>
            {code.split('\n').length > 16 && <div className={rootStyles.div7} />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo((props: any): any => {
  const codeSnippet = createFileMap(React.Children.toArray(props.children));

  // To set the active file in the fallback we have to find the active file first.
  // If there are no active files we fallback to App.js as default.
  const activeCodeSnippet = Object.keys(codeSnippet).filter(
    fileName => codeSnippet[fileName]?.active === true && codeSnippet[fileName]?.hidden === false,
  );
  let activeCode;
  if (!activeCodeSnippet.length) {
    activeCode = codeSnippet['/App.js'].code;
  } else {
    activeCode = codeSnippet[activeCodeSnippet[0]].code;
  }

  return (
    <React.Suspense fallback={<SandpackGlimmer code={activeCode} />}>
      <SandpackRoot {...props} />
    </React.Suspense>
  );
});
