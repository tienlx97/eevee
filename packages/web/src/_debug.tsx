/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { makeStyles } from '@griffel/react';
import {
  ParagraphDebug,
  PlaygroundDebug,
  InlineCodeDebug,
  EmDebug,
  PostLinkDebug,
  BlockquoteDebug,
  ListDebug,
  StrikethroughDebug,
  PostImageDebug,
} from '@jolteon/components/debugs';

const useStyles = makeStyles({
  root: {
    backgroundColor: 'var(--color-background)',
    transitionProperty: 'background',
    transitionDuration: '350ms',
    transitionTimingFunction: 'ease',
    transitionDelay: '0s',
  },

  main: {
    position: 'relative',
    zIndex: '1',
  },

  maxWidthWrapper: {
    paddingTop: '48px',
    display: 'flex',
    flexDirection: 'row-reverse',
    WebkitBoxPack: 'center',
    justifyContent: 'center',
    alignItems: 'flex-start',
    maxWidth: '1100px',

    position: 'relative',
    zIndex: '2',
    width: '100%',
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingLeft: '32px',
    paddingRight: '32px',
  },

  article: {
    flexGrow: '1',
    flexShrink: '1',
    flexBasis: '686px',
    maxWidth: 'min(686px, 100%)',
  },
});

const UIDebug = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <main className={classes.main}>
        <div className={classes.maxWidthWrapper}>
          <article className={classes.article}>
            <ParagraphDebug />
            <InlineCodeDebug />
            <EmDebug />
            <PlaygroundDebug />
            <PostLinkDebug />
            <BlockquoteDebug />
            <ListDebug />
            <StrikethroughDebug />
            <PostImageDebug />
          </article>
        </div>
      </main>
    </div>
  );
};

export default UIDebug;
