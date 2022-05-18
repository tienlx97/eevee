import React from 'react';

import { makeStyles, mergeClasses, shorthands } from '@griffel/react';
import { FullBleedTutorial as FullBleed } from '../fullbleedtutorial';
import { MobileOnly } from '../mobileonly';
import { DesktopOnly } from '../desktop-only';

const useStyles = makeStyles({
  wrapper: {
    display: 'grid',
    gridColumnGap: '32px',
    gridTemplateColumns: 'repeat(auto-fill, minmax(400px, 1fr))',
    paddingTop: '16px',
    ...shorthands.margin('0', 'auto'),
    marginTop: '64px',
    maxWidth: '100vw',

    '@media (min-width: 1100px)': {
      maxWidth: '1100px',
    },
  },
});

const SideBySideCodeWrapper = ({
  className,
  children,
  ...delegated
}: React.HTMLAttributes<HTMLDivElement>) => {
  const styles = useStyles();

  return (
    <div
      className={mergeClasses(styles.wrapper, 'sbsc__wrapper', className)}
      {...delegated}
    >
      {children}
    </div>
  );
};

const SideBySideCode = ({ children }: { children: React.ReactNode }) => {
  const styles = useStyles();

  return (
    <>
      <MobileOnly>{children}</MobileOnly>
      <DesktopOnly>
        <FullBleed>
          <div className={styles.wrapper}>{children}</div>
        </FullBleed>
      </DesktopOnly>
    </>
  );
};

export { SideBySideCode, SideBySideCodeWrapper };
