import type { EeveeSlot, EeveeProps, EeveeState } from '@eevee/react-utilities';
import { Button } from '@eevee/react-button';

export type ToggleThemeSlot = {
  root: NonNullable<EeveeSlot<typeof Button>>;
};

export type ToggleThemeProps = EeveeProps<ToggleThemeSlot> & {};

export type ToggleThemeState = EeveeState<ToggleThemeSlot> & {};
