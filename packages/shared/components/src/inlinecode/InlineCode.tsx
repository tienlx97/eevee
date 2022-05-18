/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { forwardRef } from 'react';
import { makeStyles, mergeClasses, shorthands } from '@griffel/react';
import { IInlinecode } from './InlineCode.types';

import './InlineCode.css';

const useStyles = makeStyles({
  wrapper: {
    position: 'relative',
    display: 'inline',
    fontFamily: 'var(--font-family-mono)',
    fontSize: '0.9em',
    letterSpacing: '-0.5px',
    ...shorthands.padding('4.5px', '6px'),
    ...shorthands.margin('1px', '-1px'),
    ...shorthands.borderRadius('3px'),
    backgroundColor: 'hsl(217deg 10% 50% / 0.17)',
    WebkitBoxDecorationBreak: 'clone',
    boxDecorationBreak: 'clone',

    // ' .sn__wrapper &': {
    //   ...shorthands.padding('1px', '6px'),
    // },
  },
});

const InlineCode = (props: IInlinecode, ref?: React.LegacyRef<HTMLElement>) => {
  const { className, children, ...rest } = props;

  const styles = useStyles();
  const classes = mergeClasses(styles.wrapper, 'ic__wrapper', className);

  return (
    <code {...rest} ref={ref} className={classes}>
      {children}
    </code>
  );
};

export default forwardRef(InlineCode);
