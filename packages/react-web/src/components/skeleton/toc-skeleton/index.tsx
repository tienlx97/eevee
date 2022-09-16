import * as React from 'react';
import { makeStyles, shorthands } from '@griffel/react';
import { tokens } from '@eevee/react-theme';
import { Spinner } from '@components/spinner-2/index';

const useTocSkeleton = makeStyles({
  root: {
    // TODO Add default styles for the root element
    backgroundColor: tokens.bg6,
    ...shorthands.padding('12px', '16px'),
    ...shorthands.borderRadius('14px'),
    ...shorthands.borderColor(tokens.bg6),
    ...shorthands.borderWidth('1px'),
  },

  tocHeading: {
    color: tokens.f9,
    fontWeight: 800,
    marginBottom: '12px',
    lineHeight: '24px',
  },

  tocList: {
    height: '125px',
    width: '100%',
  },
});

export const TocSkeleton = () => {
  const styles = useTocSkeleton();

  return (
    <div className={styles.root}>
      <div className={styles.tocList}>
        <Spinner />
      </div>
    </div>
  );
};
