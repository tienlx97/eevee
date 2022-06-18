import { NavigationBarSlots, NavigationBarState } from './NavigationBar.types';
import { makeStyles, mergeClasses, shorthands } from '@griffel/react';
import { SlotClassNames } from '@eevee/react-utilities';

import { breakPoints, tokens } from '@eevee/react-theme';

export const navigationBarClassname: SlotClassNames<NavigationBarSlots> = {
  root: 'eve-NavigationBar',
  actionButtonWrap: 'eve-NavigationBar-actionButtonWrap',
  dropdownWrap: 'eve-NavigationBar-dropdownButtonWrap',
};

const useDropdownWrapStyles = makeStyles({
  root: {
    paddingLeft: '1rem',
    paddingRight: '1rem',

    [`@media ${breakPoints.lgAndLarger}`]: {
      paddingLeft: '1.5rem',
      paddingRight: '1.5rem',
    },
  },
});

const useActionButtonWrapStyles = makeStyles({
  root: {
    paddingLeft: '.75rem',
    paddingRight: '.75rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    flexGrow: 1,
    textAlign: 'right',
  },
});

const useRootStyles = makeStyles({
  root: {
    backgroundColor: tokens.background2,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'relative',
    zIndex: 10,
    ...shorthands.borderColor(tokens.border1),
    borderTopRightRadius: '.5rem',
    borderBottomRightRadius: '0',
    borderBottomLeftRadius: '0',
    borderBottomWidth: '1px',
  },
});

export const useNavigationBarStyles = (state: NavigationBarState): NavigationBarState => {
  const rootStyles = useRootStyles();
  const dropdownWrapStyles = useDropdownWrapStyles();
  const actionButtonWrapStyles = useActionButtonWrapStyles();

  state.root.className = mergeClasses(navigationBarClassname.root, rootStyles.root, state.root.className);
  state.dropdownWrap.className = mergeClasses(
    navigationBarClassname.dropdownWrap,
    dropdownWrapStyles.root,
    state.dropdownWrap.className,
  );

  state.actionButtonWrap.className = mergeClasses(
    navigationBarClassname.actionButtonWrap,
    actionButtonWrapStyles.root,
    state.actionButtonWrap.className,
  );

  state.actionButtonWrap.translate = 'yes';

  return state;
};
