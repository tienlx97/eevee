import React from 'react';
import { ResetButton } from './ResetButton';
import { FormatButton } from './FormatButton';

import { makeStyles, shorthands } from '@griffel/react';
import { IToolbarProps } from './ToolBar.types';

const useStyles = makeStyles({
  wrapper: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '32px',
    lineHeight: '32px',
    ...shorthands.padding('0', '16px'),
    ...shorthands.borderRadius('8px', '8px', '0', '0'),
    backgroundColor: 'var(--color-gray-100)',
  },

  title: {
    fontSize: '14px',
    fontWeight: 'var(--font-weight-medium)',
    color: 'var(--color-gray-700)',
  },

  actions: {
    display: 'flex',
    ...shorthands.gap('8px'),
    marginRight: '-10px',
    color: 'white',
  },
});

const Toolbar = ({
  title,
  // isFullscreened,
  // handleToggleFullscreen,
  handleReset,
  handleFormat,
}: IToolbarProps) => {
  const classes = useStyles();

  return (
    <header // Wrapper
      className={classes.wrapper}
    >
      <h3 // Title
        className={classes.title}
      >
        {title || 'Code Playground'}
      </h3>
      <div // Actions
        className={classes.actions}
      >
        <FormatButton handleFormat={handleFormat} />
        <ResetButton handleReset={handleReset} />
        {/*
          Disable fullscreen button because `scroll-behaviour: smooth`
          triggers when it closes, and it's wildly disorienting
        */}
        {/* <FullscreenToggleButton
          isFullscreened={isFullscreened}
          handleToggleFullscreen={handleToggleFullscreen}
        /> */}
      </div>
    </header>
  );
};

export { Toolbar };
export default Toolbar;
