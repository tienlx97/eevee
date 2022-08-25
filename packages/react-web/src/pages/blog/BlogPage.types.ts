import * as React from 'react';
import type { ComponentProps, Slot, ComponentState } from '@eevee/react-utilities';
import type { Blog } from 'typings/my-mdx';
import { MiddleLayout, RightLayout } from '@layout/index';

export type BlogPageSlots = {
  root: NonNullable<Slot<'div'>>;
  middleLayout: NonNullable<Slot<typeof MiddleLayout>>;
  rightLayout: NonNullable<Slot<typeof RightLayout>>;
};

export type BlogPageProps = ComponentProps<Partial<BlogPageSlots>> & {};

export type BlogPageState = ComponentState<BlogPageSlots> & {
  blog?: Blog | undefined | null;
  error?: any;
  reactionClassName?: string;
  isOpenComment?: boolean;
  setOpenComment?: React.Dispatch<React.SetStateAction<boolean>>;
};
