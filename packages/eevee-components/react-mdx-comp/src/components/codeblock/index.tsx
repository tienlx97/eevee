/* eslint-disable @typescript-eslint/no-explicit-any */
// export * from './CodeBlock';
// export * from './CodeBlock.types';
// export * from './renderCodeBlock';
// export * from './useCodeBlock';
// export * from './useCodeBlockState';
// export * from './useCodeBlockStyles';

import * as React from 'react';
import { makeStyles, mergeClasses, shorthands } from '@griffel/react';
import { tokens } from '@eevee/react-theme';
const CodeBlock = React.lazy(() => import('./CodeBlock').then(module => ({ default: module.CodeBlock })));

const useStyles = makeStyles({
  root: {
    ...shorthands.borderRadius('.5rem'),
    lineHeight: '1.5rem',
    height: '100%',
    width: '100%',
    overflowX: 'auto',
    display: 'flex',
    alignItems: 'center',
    backgroundColor: tokens.background1,
    fontSize: '13.6px',
    ...shorthands.overflow('hidden'),
  },

  'my-8': {
    marginTop: '2rem',
    marginBottom: '2rem',
  },

  //
  div2: {
    paddingTop: '18px',
    paddingBottom: '18px',
    paddingLeft: '1.25rem',
    ...shorthands.overflow('hidden'),
  },
});

export default React.memo(
  (props: {
    isFromPackageImport: boolean;
    children: string;
    className?: string;
    metastring: string;
    noMargin?: boolean;
    noMarkers?: boolean;
  }): any => {
    const styles = useStyles();
    const { children, isFromPackageImport } = props;
    return (
      <React.Suspense
        fallback={
          <pre className={mergeClasses(styles.root, !isFromPackageImport && styles['my-8'])}>
            <div className={styles.div2}>
              <p style={{ overflow: 'hidden' }} className="sp-pre-placeholder">
                {children}
              </p>
            </div>
          </pre>
        }
      >
        <CodeBlock {...props} />
      </React.Suspense>
    );
  },
);
