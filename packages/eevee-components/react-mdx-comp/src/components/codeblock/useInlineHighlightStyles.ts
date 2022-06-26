import { tokens } from '@eevee/react-theme';
import { makeStyles, shorthands } from '@griffel/react';

export const useInlineHiglightStyles = makeStyles({
  root: {
    '& *': {
      color: tokens.f1,
    },

    '& code': {
      backgroundImage: 'none',
      ...shorthands.padding('2px'),
    },

    position: 'relative',
    ...shorthands.borderRadius('.25rem'),
    ...shorthands.borderColor('hsla(195, 90%, 79%,0.6)'),
    paddingLeft: '.25rem',
    paddingRight: '.25rem',
    marginRight: '0.1rem',
    marginLeft: '0.1rem',
    paddingTop: '1.5px',
    paddingBottom: '1.5px',
    borderBottomWidth: '2px',
    borderBottomStyle: 'solid',
  },

  bgBlue: {
    backgroundColor: 'hsla(195, 90%, 79%,0.2)', // 'hsla(195, 90%, 79%,0.6)',
    ...shorthands.borderColor('hsla(195, 90%, 79%,0.6)'),
  },

  bgYellow: {
    backgroundColor: 'hsla(195, 90%, 79%,0.2)', // tokens.f8,
    ...shorthands.borderColor('hsla(195, 90%, 79%,0.6)'),
  },

  bgGreen: {
    backgroundColor: 'hsla(195, 90%, 79%,0.2)', //tokens.f4,
    ...shorthands.borderColor('hsla(195, 90%, 79%,0.6)'),
  },

  bgPurple: {
    backgroundColor: 'hsla(195, 90%, 79%,0.2)', // tokens.f7,
    ...shorthands.borderColor('hsla(195, 90%, 79%,0.6)'),
  },
});
