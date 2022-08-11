import * as React from 'react';
import type { EeveeProps, EeveeSlot, EeveeState } from '@eevee/react-utilities';
import { Button } from '@eevee/react-button';
import { Editor } from '@feature/new-story/index';
import { MiddleLayout, RightLayout } from '@layout/index';
import { BlurSystem } from '@components/blur-system/index';
import type { Toc } from 'typings/my-mdx/index';

export type NewStorySlots = {
  root: NonNullable<EeveeSlot<'article'>>;
  middleLayout: NonNullable<EeveeSlot<typeof MiddleLayout>>;
  rightLayout: NonNullable<EeveeSlot<typeof RightLayout>>;
  hiddenButton: NonNullable<EeveeSlot<typeof Button>>;
  editor: NonNullable<EeveeSlot<typeof Editor>>;
  blurSystem: NonNullable<EeveeSlot<typeof BlurSystem>>;
};

export type NewStoryProps = EeveeProps<Partial<NewStorySlots>> & {};

export type NewStoryState = EeveeState<NewStorySlots> & {
  editorClassName?: string;
  actionClassName?: string;
  styles: string[];
  isOpenPreview?: boolean;
  compiledSource?: string;
  publishAction?: React.MouseEventHandler<HTMLButtonElement>;
  titleRef?: React.RefObject<HTMLInputElement>;
  setTags?: React.Dispatch<React.SetStateAction<string[]>>;
  toc?: Toc[];
};
