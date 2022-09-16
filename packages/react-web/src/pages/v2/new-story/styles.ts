import { breakPoints, tokens } from '@eevee/react-theme';
import { makeStyles, shorthands } from '@griffel/react';
import { bottomHeight } from '@constants/index';

export const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    width: '100%',
    height: '100%',
    ...shorthands.overflow('hidden'),
  },

  draftWithoutDisable: {
    ...shorthands.borderColor('#1a8917'),
    backgroundColor: '#1a8917',
    ':hover': {
      backgroundColor: '#0f730c',
      ...shorthands.borderColor('#0f730c'),
      color: ' #fff',
    },
  },

  draft: {
    height: 'fit-content',
    fontSize: '14px',
    color: '#fff',
    ...shorthands.padding('0px', '16px'),
    marginLeft: '12px',
  },
});

export const useInputGroupStyles = makeStyles({
  title: {
    marginTop: '16px',
    marginBottom: '16px',
  },

  tag: {
    marginBottom: '16px',

    '& span': {
      fontWeight: 400,
      color: tokens.f2,
    },
  },
});

export const useEditorPreviewStyles = makeStyles({
  root: {
    width: '100%',
    height: '100%',
    ...shorthands.overflow('auto'),
  },

  previewWrapper: {
    ...shorthands.padding('10px', '16px'),
  },

  editorNone: {
    display: 'none',
  },

  editorBlock: {
    display: 'block',
  },
});

export const useActionStyles = makeStyles({
  root: {
    position: 'fixed',
    alignSelf: 'center',
    justifySelf: 'center',

    [`@media ${breakPoints.lgAndLarger}`]: {
      bottom: '16px',
    },

    [`@media ${breakPoints.lg}`]: {
      bottom: bottomHeight,
    },

    [`@media ${breakPoints.md}`]: {
      bottom: bottomHeight,
    },

    [`@media ${breakPoints.sm}`]: {
      bottom: bottomHeight,
    },

    [`@media ${breakPoints.xs}`]: {
      bottom: bottomHeight,
    },
  },
});

export const useSkeletonStyles = makeStyles({
  wrapper: {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
  },

  title: {
    marginTop: '16px',
    marginBottom: '16px',
    height: '35px',
  },

  subtitle: {
    marginBottom: '16px',
    height: '70px',
  },

  editor: {
    height: '100vh',
  },

  action: {
    position: 'fixed',
    alignSelf: 'center',
    justifySelf: 'center',

    [`@media ${breakPoints.lgAndLarger}`]: {
      bottom: '16px',
    },

    [`@media ${breakPoints.lg}`]: {
      bottom: bottomHeight,
    },

    [`@media ${breakPoints.md}`]: {
      bottom: bottomHeight,
    },

    [`@media ${breakPoints.sm}`]: {
      bottom: bottomHeight,
    },

    [`@media ${breakPoints.xs}`]: {
      bottom: bottomHeight,
    },
  },
});
