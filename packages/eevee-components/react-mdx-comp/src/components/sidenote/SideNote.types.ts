import * as React from 'react';
import { EeveeProps, EeveeSlot, EeveeState } from '@eevee/react-utilities';
import { Button } from '@eevee/react-button';

export type SideNoteSlots = {
  root: NonNullable<EeveeSlot<'aside'>>;
  content: NonNullable<EeveeSlot<'div'>>;
  showMore: NonNullable<EeveeSlot<typeof Button>>;
};

export type SideNoteProps = EeveeProps<Partial<SideNoteSlots>> & {
  title?: string;
  type?: 'info' | 'success' | 'warning';
};

export type SideNoteState = EeveeState<SideNoteSlots> &
  Pick<SideNoteProps, 'title' | 'type'> & {
    iconWrapClasses?: string;
    titleClasses?: string;
    expandedClasses?: string;
    showMoreStyle?: object;
    expandedChildren?: boolean;
    isExpanded?: boolean;
    previewChildren?: (React.ReactChild | React.ReactPortal | React.ReactFragment)[];
  };
