import type { ComponentProps, Slot, ComponentState } from '@eevee/react-utilities';

export type SocialListSlots = {
  root: NonNullable<Slot<'div'>>;
};

export type SocialListProps = ComponentProps<Partial<SocialListSlots>> & {
  before?: boolean;
};

export type SocialListState = ComponentState<SocialListSlots> & Pick<SocialListProps, 'before'> & {};
