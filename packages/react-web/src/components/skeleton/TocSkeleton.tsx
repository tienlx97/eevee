import { makeStyles, mergeClasses, shorthands } from '@griffel/react';
import * as React from 'react';
import { Heading } from '@eevee/react-mdx-comp';
import { tokens } from '@eevee/react-theme';

const useRootStyles = makeStyles({
  root: {},

  toc: {
    color: tokens.f9,
    marginBottom: '16px',
    textTransform: 'uppercase',
  },
});

export const TocSkeleton = (props: JSX.IntrinsicElements['div']) => {
  const styles = useRootStyles();
  return (
    <div>
      <div style={{ display: 'flex' }}>
        <Heading as="h2" type="section-title" className={styles.toc}>
          Table of Contents
        </Heading>
        <div
          style={{
            flexGrow: 1,
            alignSelf: 'center',
            marginLeft: '10px',
            height: '1px',
            backgroundColor: 'var(--f9)',
          }}
        />
      </div>
      <div className="tweet-text">
        <div className="skeleton-line heading" style={{ width: '30%' }} />
        <div className="skeleton-line heading" style={{ width: '40%' }} />
        <div className="skeleton-line heading" style={{ width: '20%' }} />
        <div className="skeleton-line heading-2" style={{ width: '70%', marginLeft: '12px' }} />
        <div className="skeleton-line heading-2" style={{ width: '90%', marginLeft: '12px' }} />
        <div className="skeleton-line heading" style={{ width: '90%' }} />
        <div className="skeleton-line heading-2" style={{ width: '55%', marginLeft: '12px' }} />
        <div className="skeleton-line heading-2" style={{ width: '55%', marginLeft: '24px' }} />
        <div className="skeleton-line heading-2" style={{ width: '45%', marginLeft: '24px' }} />
      </div>
    </div>
  );
};
