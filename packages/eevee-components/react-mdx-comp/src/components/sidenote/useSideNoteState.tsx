import * as React from 'react';
import { SideNoteState } from './SideNote.types';
import { useBoop } from '@eevee/react-utilities';

export interface ExpandedProps {
  originalType?: 'expanded';
}

export const Expanded: React.FC<ExpandedProps> = ({ children }) => {
  return <>{children} </>;
};

export const useSideNoteState = (state: SideNoteState): SideNoteState => {
  const [showMoreStyle, showMoreTrigger] = useBoop({ y: 4 });

  const expandedElem = React.Children.toArray(state.root.children).find(child => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return (child as any).type === Expanded;
  });

  state.previewChildren = React.Children.toArray(state.root.children).filter(child => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return (child as any).type !== Expanded;
  });

  const [isExpanded, setIsExpanded] = React.useState(!expandedElem);

  if (!isExpanded) {
    state.showMore.onClick = () => setIsExpanded(true);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    state.showMore.onMouseEnter = showMoreTrigger as any;
    state.showMoreStyle = showMoreStyle;
  }

  state.isExpanded = isExpanded;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  state.expandedChildren = (expandedElem as any)?.props?.children;

  state.root.style = {
    transition: `background 350ms`,
    ...state.root.style,
  };

  !state.title && (state.title = state.type);

  return state;
};
