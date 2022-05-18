import { makeStyles } from '@griffel/react';
import React from 'react';

import { Spacer } from '../spacer';

const useStyles = makeStyles({
  wrapper: {
    paddingTop: '32px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  dateWrapper: {
    display: 'flex',
    alignItems: 'baseline',
    fontSize: '18px',
    fontStyle: 'italic',
    marginBottom: '16px',
    color: 'var(--color-gray-700)',
  },
  date: {
    fontWeight: 'var(--font-weight-medium)',
  },
});

const ContentFooterArticle = ({ lastUpdated }: { lastUpdated: string }) => {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <div className={classes.dateWrapper}>
        Last Updated:
        <Spacer size={8} />
        <strong className={classes.date}>{lastUpdated}</strong>
      </div>
    </div>
  );
};

export default ContentFooterArticle;
