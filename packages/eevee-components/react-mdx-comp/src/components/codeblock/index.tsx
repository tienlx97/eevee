/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from 'react';
import { makeStyles, mergeClasses, shorthands } from '@griffel/react';
import { tokens } from '@eevee/react-theme';
import { CodeBlockWrapperProps } from './CodeBlock.types';
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
    backgroundColor: tokens.bg1,
    fontSize: '13.6px',
    ...shorthands.overflow('hidden'),
  },

  'my-8': {
    marginTop: '2rem',
    marginBottom: '2rem',
  },

  //
  paddingConfig: {
    paddingTop: '18px',
    paddingBottom: '18px',
    paddingLeft: '1.25rem',
    ...shorthands.overflow('hidden'),
  },
});

const CodeBlockWrapper = (props: CodeBlockWrapperProps) => {
  const styles = useStyles();
  const { children, isFromPackageImport } = props;
  return (
    <React.Suspense
      fallback={
        <pre className={mergeClasses(styles.root, !isFromPackageImport && styles['my-8'])}>
          <div className={styles.paddingConfig}>
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
};

export default React.memo(CodeBlockWrapper);
