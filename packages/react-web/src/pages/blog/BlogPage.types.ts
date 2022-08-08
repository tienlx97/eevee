import * as React from 'react';
import type { EeveeProps, EeveeSlot, EeveeState } from '@eevee/react-utilities';
import type { Post } from 'typings/my-mdx';

export type BlogPageSlots = {
  root: NonNullable<EeveeSlot<'div'>>;
};

export type BlogPageProps = EeveeProps<Partial<BlogPageSlots>> & {};

export type BlogPageState = EeveeState<BlogPageSlots> & {
  post?: Post | null | undefined;
  error?: any;
  reactionClassName?: string;
  isOpenComment?: boolean;
  setOpenComment?: React.Dispatch<React.SetStateAction<boolean>>;
};
