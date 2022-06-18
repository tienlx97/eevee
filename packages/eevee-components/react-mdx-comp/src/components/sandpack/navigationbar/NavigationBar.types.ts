import { EeveeProps, EeveeSlot, EeveeState } from '@eevee/react-utilities';

export type NavigationBarSlots = {
  root: NonNullable<EeveeSlot<'div'>>;
  dropdownWrap: NonNullable<EeveeSlot<'div'>>;
  actionButtonWrap: NonNullable<EeveeSlot<'div'>>;
};

export type NavigationBarProps = EeveeProps<Partial<NavigationBarSlots>> & {
  showDownload?: boolean;
};

export type NavigationBarState = EeveeState<NavigationBarSlots> &
  Pick<NavigationBarProps, 'showDownload'> & {
    dropdownActive?: boolean;
    handleReset?: () => void;
  };
