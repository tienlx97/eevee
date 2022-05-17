/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { makeStyles, shorthands } from '@griffel/react';
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
  CodeSnippetDebug,
  DividerDebug,
  HeadingDebug,
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

    '@media (max-width: 1024px)': {
      maxWidth: '100vw',
      ...shorthands.overflow('hidden'),
    },
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

    '@media (max-width: 563px)': {
      paddingLeft: '16px',
      paddingRight: '16px',
    },
  },

  sidebar: {
    flexGrow: 0,
    flexShrink: 100000,
    flexBasis: '250px',
    display: 'none',
    position: 'sticky',
    top: '148px',
    maxHeight: 'calc(100vh - 148px)',
    ...shorthands.overflow('auto'),
    paddingBottom: '16px',
    marginLeft: 'auto',
    marginTop: '4px',

    '@media (min-width: 1084px)': {
      display: 'block',
    },
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
          <aside className={classes.sidebar}></aside>
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
            <CodeSnippetDebug />
            <DividerDebug />
            <HeadingDebug />
          </article>
        </div>
      </main>
    </div>
  );
};

export default UIDebug;
