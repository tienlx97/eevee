import { makeStyles, shorthands } from '@griffel/react';
import { tokens, breakPoints } from '@eevee/react-theme';

export const useStyles = makeStyles({
  item: {
    listStyleLine: 'none',
    // ...shorthands.borderBottom('1px', 'solid', 'rgba(255, 255, 255, 0.2)'),
    ...shorthands.padding('40px', 0, '35px'),

    paddingTop: '30px',
    paddingBottom: '35px',
    display: 'flex',
    alignItems: 'center',

    [`@media ${breakPoints.smAndSmaller}`]: {
      flexWrap: 'wrap',
    },
  },

  dataWrapper: {
    lineHeight: '20px',
    fontSize: '16px',
    marginRight: '10px',
    ...shorthands.flex(1, 1, 'auto'),
    display: 'flex',
    alignItems: 'center',

    [`@media ${breakPoints.xsAndSmaller}`]: {
      paddingBottom: '15px',
    },
  },

  'u-flex1': {
    display: 'flex',
    ...shorthands.flex(1, 1, 'auto'),
    flexDirection: 'column',
  },

  'ui-h3': {
    '-xHeightMultiplier': '0.342',
    '-baselineMultiplier': '0.22',
    letterSpacing: '-.29px',
    fontWeight: '700',
    fontStyle: 'normal',
    fontSize: '21px',
    lineHeight: '24px',
    WebkitTransform: 'translateY(-1.88px)',
    transform: 'translateY(-1.88px)',

    wordBreak: 'break-word',
    wordWrap: 'break-word',
  },

  'max-width450': {
    maxWidth: '450px',
  },

  'ui-body': {
    width: '100%',
    maxWidth: '480px',
    marginTop: '10px',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    WebkitBoxOrient: 'vertical',
    WebkitBoxDirection: 'normal',

    fontWeight: '400',
    fontStyle: 'normal',
    letterSpacing: '0',
    fontSize: '16px',
    lineHeight: '20px',
    transform: 'translateY(1.52px)',

    '& input, & textarea': {
      display: 'block',
      fontSize: '16px',
      fontFamily: tokens.fontFamily,
      borderTopStyle: 'none',
      borderRightStyle: 'none',
      borderBottomStyle: 'none',
      borderLeftStyle: 'none',
      ...shorthands.padding('0'),
      letterSpacing: '0',
      fontWeight: '400',
      fontStyle: 'normal',
      color: tokens.f2,

      backgroundColor: 'transparent',
      paddingBottom: '8px',

      ...shorthands.borderBottom('1px', 'solid', tokens.b2),
    },

    // '& input': {
    //   display: 'block',
    //   fontSize: '18px',
    //   borderTopStyle: 'none',
    //   borderRightStyle: 'none',
    //   borderBottomStyle: 'none',
    //   borderLeftStyle: 'none',
    //   ...shorthands.padding('0'),
    //   letterSpacing: '0',
    //   fontWeight: '400',
    //   fontStyle: 'normal',
    //   color: tokens.f2,

    //   backgroundColor: 'transparent',
    //   paddingBottom: '8px',
    //   marginBottom: '24px',
    //   ...shorthands.borderBottom('1px', 'solid', tokens.b1),
    // },

    '& textarea': {
      resize: 'none',
    },
  },

  mb: {
    marginBottom: '24px',
  },
});
