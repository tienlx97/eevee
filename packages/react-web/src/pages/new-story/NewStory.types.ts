import * as React from 'react';
import type { EeveeProps, EeveeSlot, EeveeState } from '@eevee/react-utilities';
import { ButtonR } from '@eevee/react-button';
import { Editor } from '@feature/new-story/index';

export type NewStorySlots = {
  root: NonNullable<EeveeSlot<'article'>>;
  headerWrapper: NonNullable<EeveeSlot<'div'>>;
  documentTitleLabel: NonNullable<EeveeSlot<'h2'>>;
  documentTitle: NonNullable<EeveeSlot<'input'>>;
  hiddenButton: NonNullable<EeveeSlot<typeof ButtonR>>;
  editor: NonNullable<EeveeSlot<typeof Editor>>;
};

export type NewStoryProps = EeveeProps<Partial<NewStorySlots>> & {};

export type NewStoryState = EeveeState<NewStorySlots> & {
  editorAndTabListWrapperClassName?: string;
  editorWrapperClassName?: string;
  editorClassName?: string;

  isOpenPreview?: boolean;
  compiledSource?: string;
};
