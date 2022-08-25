import * as React from 'react';
import { tokens } from '@eevee/react-theme';
import { makeStyles, mergeClasses, shorthands } from '@griffel/react';

const useRootStyles = makeStyles({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',

    '&::after': {
      content: '""',
      width: '24px',
      height: '24px',
      ...shorthands.border('3px', 'solid', tokens.bg7),
      borderTopColor: tokens.bg8,
      borderTopStyle: 'groove',
      ...shorthands.borderRadius('50%'),
      animationDuration: '1.25s',
      animationTimingFunction: 'ease',
      animationIterationCount: 'infinite',
      animationName: {
        from: {
          transform: 'rotate(0turn)',
        },
        to: {
          transform: 'rotate(1turn)',
        },
      },
    },
  },
});

export const Spinner = ({ className, ...props }: JSX.IntrinsicElements['div']) => {
  const rootStyles = useRootStyles();
  return <div className={mergeClasses(rootStyles.root, className)} {...props} />;
};
