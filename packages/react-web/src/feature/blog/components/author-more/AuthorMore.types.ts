import type { ComponentProps, Slot, ComponentState } from '@eevee/react-utilities';
import type { ReadTime } from 'typings/my-mdx/index';
import { Dot } from '@components/dot/index';

export type AuthorMoreSlots = {
  root: NonNullable<Slot<'div'>>;
  dot: NonNullable<Slot<typeof Dot>>;
};

export type AuthorMoreProps = ComponentProps<Partial<AuthorMoreSlots>> & {
  authorName: string;
  authorNickName: string;
  date: number;
  readTime: ReadTime;
};

export type AuthorMoreState = ComponentState<AuthorMoreSlots> &
  Pick<AuthorMoreProps, 'authorName' | 'authorNickName' | 'date' | 'readTime'> & {
    flexCenterClassName?: string;
  };
