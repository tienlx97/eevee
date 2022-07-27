import * as React from 'react';
import { Clap } from '@components/icons/Clap';
import { Comment } from '@components/icons/Comment';
import { Button } from '@eevee/react-button';
import { useBlogParam } from '../../hooks/usBlogParam';
import { useBlogAPISWR } from '../../hooks/useBlogAPISuspense';
import { makeStyles, shorthands } from '@griffel/react';
import { breakPoints } from '@eevee/react-theme';

const useRootStyles = makeStyles({
  root: {
    position: 'sticky',
    display: 'flex',
    justifyContent: 'center',

    [`@media ${breakPoints.lgAndLarger}`]: {
      bottom: '16px',
    },

    [`@media ${breakPoints.lg}`]: {
      bottom: '69px',
    },

    [`@media ${breakPoints.md}`]: {
      bottom: '69px',
    },

    [`@media ${breakPoints.sm}`]: {
      bottom: '69px',
    },

    [`@media ${breakPoints.xs}`]: {
      bottom: '69px',
    },
  },

  wrapper: {
    height: '40px',
    ...shorthands.padding('0px', '14px', '0px', '16px'),
    ...shorthands.borderRadius('20px'),
    ...shorthands.border('none'),
    alignItems: 'center',
    display: 'flex',
    backgroundColor: 'var(--bg1)',
    boxShadow: 'var(--b2) 0px 2px 10px 0px',
  },
});

export const Reaction = () => {
  const slug = useBlogParam();
  useBlogAPISWR(slug);
  const styles = useRootStyles();

  return (
    <div className={styles.root}>
      <div className={styles.wrapper}>
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
          <div style={{ marginRight: '5px' }}>
            <Button style={{ fontSize: '13px' }} icon={{ children: <Clap />, style: { marginRight: '5px' } }}>
              250
            </Button>
          </div>
          <div style={{ height: '12px', margin: '0 16px', borderRight: '1px solid var(--b1)' }} />
          <div style={{ marginRight: '5px' }}>
            <Button style={{ fontSize: '13px' }} icon={{ children: <Comment />, style: { marginRight: '5px' } }}>
              1
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
