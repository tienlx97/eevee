import type { EeveeProps, EeveeSlot, EeveeState } from '@eevee/react-utilities';
import type { ReadTime } from 'typings/my-mdx/index';
import { Dot } from '@components/dot/index';

export type AuthorMoreSlots = {
  root: NonNullable<EeveeSlot<'div'>>;
  dot: NonNullable<EeveeSlot<typeof Dot>>;
};

export type AuthorMoreProps = EeveeProps<Partial<AuthorMoreSlots>> & {
  authorName: string;
  authorNickName: string;
  date: string;
  readTime: ReadTime;
};

export type AuthorMoreState = EeveeState<AuthorMoreSlots> &
  Pick<AuthorMoreProps, 'authorName' | 'authorNickName' | 'date' | 'readTime'> & {
    flexCenterClassName?: string;
  };
