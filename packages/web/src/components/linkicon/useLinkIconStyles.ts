import * as React from 'react';
import type { LinkIconSlots, LinkIconState } from './Link.types';
import type { SlotClassNames } from '@eevee/react-utilities';
import { makeStyles, mergeClasses, shorthands } from '@griffel/react';
import { tokens } from '@eevee/react-theme';
import { useLocation } from 'react-router-dom';

const linkIconClassname: SlotClassNames<LinkIconSlots> = {
  root: 'eve-LinkIcon',
  link: 'eve-LinkIcon_link',
};

const useRootStyles = makeStyles({
  root: {
    paddingBottom: '30px',
    display: 'flex',
    justifyContent: 'center',
  },
});

const useLinkStyles = makeStyles({
  root: {
    ...shorthands.padding('5px'),
    ...shorthands.borderRadius('4px'),
    ':hover': {
      backgroundColor: tokens.colorBackground2Hover,
    },
  },
});

export const useLinkIconStyles = (state: LinkIconState) => {
  const location = useLocation();
  const { href } = state.link;
  // Strip trailing slashes, for consistency.
  const [isCurrent, setCurrent] = React.useState<Boolean>(false);

  React.useEffect(() => {
    setCurrent(location.pathname.replace(/\/$/, '') === href?.replace(/\/$/, ''));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  const linkStyles = useLinkStyles();
  const rootStyles = useRootStyles();

  state.root.className = mergeClasses(
    //
    linkIconClassname.root,
    rootStyles.root,
    state.root.className,
  );

  state.link.className = mergeClasses(
    //
    linkIconClassname.link,
    linkStyles.root,
    state.link.className,
  );

  if (isCurrent) {
    state.link.style = {
      backgroundColor: tokens.colorBackground2Pressed,
      ...state.link.style,
    };
  }
};
