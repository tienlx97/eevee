import React from 'react';
import { makeStyles, mergeClasses } from '@griffel/react';
import { animated } from '@react-spring/web';

const useStyles = makeStyles({
  wrapper: {
    position: 'relative',
    transformOrigin: 'center left',
  },
});

/**
 *
 * @param param0
 * @css-style: `.speech-bubble-wrapper`
 */
const SpeechBubbleWrapper = ({ children }: { children: React.ReactNode }) => {
  const styles = useStyles();

  const classes = mergeClasses(styles.wrapper, 'speech-bubble-wrapper');

  return <animated.div className={classes}>{children}</animated.div>;
};

export { SpeechBubbleWrapper };
