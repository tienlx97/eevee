import React, { forwardRef } from 'react';
import { makeStyles, mergeClasses, shorthands } from '@griffel/react';
import Link from './Link';
import { ILinkProps } from './Link.types';

const useStyles = makeStyles({
  wrapper: {
    color: 'var(--color-primary)',
    fontWeight: 'var(--font-weight-medium)',

    '&:focus': {
      ...shorthands.outline('2px', 'auto', 'var(--color-primary)'),
      outlineOffset: '2px',
    },

    '&:focus:not(.focus-visible)': {
      ...shorthands.outline('none'),
    },

    '@media (hover: hover)': {
      // textDecoration: 'none',
      textDecorationLine: 'none',
      boxShadow: '0px 0px 0px var(--color-primary)',

      '&:hover': {
        // transition: '200ms box-shadow',
        transitionProperty: 'box-shadow',
        transitionDuration: '200ms',
        transitionTimingFunction: 'ease',
        transitionDelay: '0s',

        boxShadow: '0px 2px 0px var(--color-primary)',
      },

      '& .info-sidenote': {
        color: 'var(--color-text)',
        boxShadow: '0px 1px 0px var(--color-primary)',
        fontWeight: 'var(--font-weight-medium)',

        '&:hover': {
          boxShadow: '0px 2px 0px var(--color-primary)',
        },
      },

      '& .warning-sidenote': {
        color: 'var(--color-text)',
        boxShadow: '0px 1px 0px var(--color-alert)',

        '&:hover': {
          boxShadow: '0px 2px 0px var(--color-alert)',
        },
      },

      '& .success-sidenote': {
        color: 'var(--color-text)',
        boxShadow: '0px 1px 0px var(--color-success)',

        '&:hover': {
          boxShadow: '0px 2px 0px var(--color-success)',
        },
      },
    },
  },
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const TextLink = (props: ILinkProps, ref?: any) => {
  const { children, className, ...delegated } = props;
  const styles = useStyles();
  const classes = mergeClasses(styles.wrapper, className);
  return (
    <Link {...delegated} ref={ref} className={classes}>
      {children}
    </Link>
  );
};

export default forwardRef(TextLink);
