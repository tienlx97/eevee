import type { ComponentProps, ComponentState, Slot } from '@eevee/react-utilities';
import { SortDirection } from '../Table/Table.types';

export type TableHeaderCellSlots = {
  root: Slot<'th', 'div'>;

  sortIcon: Slot<'span'>;

  /**
   * Button handles correct narration and interactions for sorting;
   */
  button: NonNullable<Slot<'button'>>;
};

/**
 * TableHeaderCell Props
 */
export type TableHeaderCellProps = ComponentProps<Partial<TableHeaderCellSlots>> & {
  sortDirection?: SortDirection;
};

/**
 * State used in rendering TableHeaderCell
 */
export type TableHeaderCellState = ComponentState<TableHeaderCellSlots> & { sortable: boolean };
