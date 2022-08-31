import { makeStyles, shorthands } from '@griffel/react';
import { tokens } from '@eevee/react-theme';

export const useLogoStyles = makeStyles({
  logoContainer: {
    animationName: {
      from: {
        transform: 'rotate(0deg)',
      },
      to: {
        transform: 'rotate(360deg)',
      },
    },
    animationDuration: '5s',
    animationTimingFunction: 'linear',
    animationIterationCount: 'infinite',
    animationPlayState: 'paused',
    display: 'flex',
    justifyContent: 'center',
  },

  slow: {
    animationPlayState: 'paused',
  },

  fast: {
    animationPlayState: 'running',
  },

  logo: {
    width: 'auto',
    animationName: {
      from: {
        transform: 'rotate(0deg)',
      },
      to: {
        transform: 'rotate(360deg)',
      },
    },
    animationDuration: '20s',
    animationTimingFunction: 'linear',
    animationIterationCount: 'infinite',
    height: '40vmin',
    pointerEvents: 'none',
  },
});

export const useTextStyles = makeStyles({
  title: {
    display: 'grid',
    gridGap: '20px',
    // width: "100%",
    // maxWidth: "700px",
    gridTemplateColumns: '1fr auto 1fr',
    alignItems: 'center',

    '&:before,&:after': {
      display: 'block',
      content: '""',
      height: '10px',
    },

    '&:before': {
      backgroundImage: `linear-gradient(to left, ${tokens.bImportant} , transparent)`,
    },

    '&:after': {
      backgroundImage: `linear-gradient(to right, ${tokens.bImportant}, transparent)`,
    },
  },
});

export const useCountDownStyles = makeStyles({
  countDown: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, minmax(50px, 150px))',
    gridGap: '10px',
    paddingBottom: '10px',
    justifyContent: 'center',

    '& div:not(:last-child)': {
      ...shorthands.borderRight('2px', 'solid', tokens.bImportant),

      [`@media (max-width: 500px)`]: {
        ...shorthands.borderRight('0px'),
      },
    },

    [`@media (max-width: 500px)`]: {
      ...shorthands.borderBottom('5px', 'solid', tokens.bImportant),
    },
  },

  countDownSegment: {
    display: 'grid',
    gridGap: '10px',
    gridTemplateColumns: '1fr',
  },

  countDownStgmentNumber: {
    fontSize: '30px',
    fontWeight: '700',
    transitionProperty: 'all',
    transitionDuration: '0.2s',
    transitionTimingFunction: 'ease-in',
    transitionDelay: '0s',
    ':hover': {
      transform: 'scale(1.2)',
    },
    justifySelf: 'center',
    alignSelf: 'center',
  },

  countdownSegmentCaption: {
    fontSize: '16px',
    fontWeight: '500',
    justifySelf: 'center',
    alignSelf: 'center',
  },
});
