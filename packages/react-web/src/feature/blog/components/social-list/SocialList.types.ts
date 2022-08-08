import type { EeveeProps, EeveeSlot, EeveeState } from '@eevee/react-utilities';

export type SocialListSlots = {
  root: NonNullable<EeveeSlot<'div'>>;
};

export type SocialListProps = EeveeProps<Partial<SocialListSlots>> & {
  before?: boolean;
};

export type SocialListState = EeveeState<SocialListSlots> & Pick<SocialListProps, 'before'> & {};
