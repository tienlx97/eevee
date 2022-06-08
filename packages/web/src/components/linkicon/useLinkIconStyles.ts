import * as React from 'react';
import type { LinkIconSlots, LinkIconState } from './Link.types';
import type { SlotClassNames } from '@eevee/react-utilities';
import { makeStyles, mergeClasses, shorthands } from '@griffel/react';
import { tokens } from '@eevee/react-theme';
import { useLocation } from 'react-router-dom';

const linkIconClassname: SlotClassNames<LinkIconSlots> = {
  root: 'eve-LinkIcon_link',
  wrapper: 'eve-LinkIcon',
};

const useWrapperStyles = makeStyles({
  root: {
    paddingBottom: '30px',
    display: 'flex',
    justifyContent: 'center',
  },
});

const useRootStyles = makeStyles({
  root: {
    ...shorthands.padding('5px'),
    ...shorthands.borderRadius('4px'),
    ':hover': {
      backgroundColor: '#083457',
    },
  },
});

export const useLinkIconStyles = (state: LinkIconState) => {
  const { href } = state.root;
  const location = useLocation();
  // Strip trailing slashes, for consistency.
  const [isCurrent, setCurrent] = React.useState<Boolean>(false);

  React.useEffect(() => {
    setCurrent(location.pathname.replace(/\/$/, '') === href?.replace(/\/$/, ''));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  const rootStyles = useRootStyles();
  const wrapperStyles = useWrapperStyles();

  state.root.className = mergeClasses(
    //
    linkIconClassname.root,
    rootStyles.root,
    state.root.className,
  );

  state.wrapper.className = mergeClasses(
    //
    linkIconClassname.wrapper,
    wrapperStyles.root,
    state.wrapper.className,
  );

  if (isCurrent) {
    state.root.style = {
      backgroundColor: '#0c4c7d',
      ...state.root.style,
    };
  }
};
