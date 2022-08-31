import type { ComponentProps, Slot, ComponentState } from '@eevee/react-utilities';
import type { ReadTime } from 'typings/my-mdx/index';
import { Dot } from '@components/dot/index';
import { Button } from '@eevee/react-button';

export type AuthorMoreSlots = {
  root: NonNullable<Slot<'div'>>;
  dot: NonNullable<Slot<typeof Dot>>;
  follow: NonNullable<Slot<typeof Button>>;
};

export type AuthorMoreProps = ComponentProps<Partial<AuthorMoreSlots>> & {
  authorName: string;
  authorNickName: string;
  date: number;
  readTime: ReadTime;
  hideFollow: boolean;
};

export type AuthorMoreState = ComponentState<AuthorMoreSlots> &
  Pick<AuthorMoreProps, 'authorName' | 'authorNickName' | 'date' | 'readTime' | 'hideFollow'> & {
    flexCenterClassName?: string;
  };
