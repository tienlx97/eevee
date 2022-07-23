import type { EeveeProps, EeveeSlot, EeveeState } from '@eevee/react-utilities';
import type { Post } from 'typings/my-mdx';

export type BlogSlots = {
  root: NonNullable<EeveeSlot<'div'>>;
};

export type BlogProps = EeveeProps<Partial<BlogSlots>> & {};

export type BlogState = EeveeState<BlogSlots> & {
  post?: Post;
};
