import { ListItemState, ListItemSlots } from './ListItem.types';
import { makeStyles, mergeClasses } from '@griffel/react';
import { tokens } from '@eevee/react-theme';
import type { SlotClassNames } from '@eevee/react-utilities';

export const listItemClassname: SlotClassNames<ListItemSlots> = {
  root: 'eve-ListItem',
  content: 'eve-ListItem__content',
};

const useRootStyles = makeStyles({
  root: {
    marginBottom: '16px',
    display: 'flex',
    alignItems: 'flex-start',
    '&:last-of-type': {
      marginBottom: '0',
    },
  },
});

const useIconWrapStyles = makeStyles({
  root: {
    display: 'flex',
    alignItems: 'center',
    paddingRight: '16px',
    paddingTop: '0',
    color: tokens.f7,
  },
});

const useContentStyles = makeStyles({
  root: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: '0%',
  },
});

export const useListItemStyles = (state: ListItemState): ListItemState => {
  const rootStyles = useRootStyles();
  const iconWrapStyles = useIconWrapStyles();
  const contentStyles = useContentStyles();

  state.root.className = mergeClasses(listItemClassname.root, rootStyles.root);

  state.iconWrap = iconWrapStyles.root;

  state.content.className = mergeClasses(listItemClassname.content, contentStyles.root);

  return state;
};
