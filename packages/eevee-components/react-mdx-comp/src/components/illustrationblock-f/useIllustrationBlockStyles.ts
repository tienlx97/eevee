import { IllustrationBlockState } from './IllustrationBlock.types';
import { makeStyles, mergeClasses, shorthands } from '@griffel/react';
import { tokens } from '@eevee/react-theme';

export const illustrationBlockClassname = {
  root: 'eve-IllustrationBlock',
  titleWrap: 'eve-IllustrationBlock__titleWrap',
  contentWrap: 'eve-IllustrationBlock__contentWrap',
  imgWrap: 'eve-IllustrationBlock__contentWrap-imgWrap',
  captionWrap: 'eve-IllustrationBlock__contentWrap-imgWrap__caption',
};

const useRootStyles = makeStyles({
  root: {
    marginTop: '4rem',
    marginBottom: '4rem',
    marginLeft: 0,
    marginRight: 0,
    maxWidth: '56rem',

    [`@media (min-width: 1536px)`]: {
      maxWidth: '72rem',
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
});

const useTitleWrapStyles = makeStyles({
  root: {
    marginBlock: '1rem',
    textAlign: 'center',
    fontSize: tokens.fontSizeBase500,
    fontWeight: 700,
    lineHeight: '2.25rem',
  },
});

const useContentWrapStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    justifyContent: 'center',
    alignContent: 'stretch',
    alignItems: 'stretch',
    gridGap: '60px',
    ...shorthands.gap('60px'),

    '& li': {
      flexGrow: '1',
      flexShrink: '1',
      flexBasis: '0%',
      display: 'flex',
      alignItems: 'flex-start',
      alignContent: 'stretch',
      justifyContent: 'space-around',
      position: 'relative',
      ...shorthands.padding('1rem'),

      '& figure': {
        display: 'flex',
        flexDirection: 'column',
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'space-between',
        position: 'relative',
        height: '100%',
      },
    },

    '& li:after': {
      content: "' '",
      display: 'block',
      position: 'absolute',
      top: '50%',
      right: '100%',
      transform: 'translateY(-50%)',
      width: '60px',
      height: '49px',
      backgroundImage: "url('https://beta.reactjs.org/images/g_arrow.png')",
      backgroundPositionX: '50%',
      backgroundPositionY: 'center',
      backgroundSize: 'contain',
      backgroundRepeatX: 'no-repeat',
      backgroundRepeatY: 'no-repeat',
      backgroundAttachment: 'initial',
      backgroundOrigin: 'initial',
      backgroundClip: 'initial',
      backgroundColor: 'initial',
    },

    '@media (max-width: 728px)': {
      '& li:after': {
        top: '0',
        left: '50%',
        right: 'auto',
        transform: 'translateX(-50%) translateY(-100%) rotate(90deg)',
      },
    },

    '& li:first-child:after': {
      content: '" "',
      display: 'none',
    },
  },
});

const useCaptionStyles = makeStyles({
  root: {
    marginTop: '1rem',
    textAlign: 'center',
    lineHeight: 1.25,
    color: tokens.foreground1,
  },
});

const useImgWrapStyles = makeStyles({
  root: {
    ...shorthands.padding('1rem'),
    backgroundColor: 'white',
    ...shorthands.borderRadius('.5rem'),
    marginTop: '1rem',
    marginBottom: '1rem',
    display: 'flex',
    flexGrow: '1',
    flexShrink: '1',
    flexBasis: '0%',
    alignItems: 'center',
    justifyContent: 'center',

    [`@media (min-width: 1280px)`]: {
      ...shorthands.padding('1.5rem'),
    },

    '& img': {
      maxWidth: 'calc(min(700px, 100%))',
      maxHeight: '250px',
      width: '100%',
    },
  },
});

export const useIllustrationBlockStyles = (state: IllustrationBlockState): IllustrationBlockState => {
  const rootStyles = useRootStyles();
  const titleWrapStyles = useTitleWrapStyles();
  const contentWrapStyles = useContentWrapStyles();
  const imgWrapStyles = useImgWrapStyles();
  const captionStyles = useCaptionStyles();

  state.root.className = mergeClasses(
    //
    illustrationBlockClassname.root,
    rootStyles.root,
    state.root.className,
  );

  state.titleWrap.className = mergeClasses(
    //
    illustrationBlockClassname.titleWrap,
    titleWrapStyles.root,
    state.titleWrap.className,
  );

  state.contentWrap.className = mergeClasses(
    //
    illustrationBlockClassname.contentWrap,
    contentWrapStyles.root,
    state.contentWrap.className,
  );

  state.imgWrap.className = mergeClasses(
    //
    illustrationBlockClassname.imgWrap,
    imgWrapStyles.root,
    state.imgWrap.className,
  );

  state.captionWrap.className = mergeClasses(
    //
    illustrationBlockClassname.captionWrap,
    captionStyles.root,
    state.captionWrap.className,
  );

  return state;
};
