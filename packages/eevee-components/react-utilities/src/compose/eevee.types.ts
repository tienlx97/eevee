import * as React from 'react';
import {
  AsIntrinsicElement,
  ExtractSlotProps,
  IntrisicElementProps,
  IsSingleton,
  PropsWithoutRef,
  ReplaceNullWithUndefined,
  SlotPropsRecord,
  SlotShorthandValue,
  UnknownSlotProps,
  WithSlotRenderFunction,
  WithSlotShorthandValue,
} from './types';

export type EeveeSlot<
  T extends keyof JSX.IntrinsicElements | React.ComponentType | UnknownSlotProps,
  AlternateAs extends keyof JSX.IntrinsicElements = never,
> = IsSingleton<Extract<T, string>> extends true
  ?
      | WithSlotShorthandValue<
          T extends keyof JSX.IntrinsicElements // if Type is html element -> Slot = as?: Type |
            ? { as?: T } & WithSlotRenderFunction<IntrisicElementProps<T>> //  Fix value
            : T extends React.ComponentType<infer Props> // if Type is class - function element
            ? WithSlotRenderFunction<Props>
            : T // if Type is element contains children, className, style, as
        >
      | {
          [As in AlternateAs]: { as: As } & WithSlotRenderFunction<IntrisicElementProps<As>>;
        }[AlternateAs]
      | null
  : 'Error: First parameter to Slot must not be not a union of types. See documentation of Slot type.';

export type EeveeProps<Slots extends SlotPropsRecord, Primary extends keyof Slots = 'root'> = Omit<
  Slots,
  Primary & 'root'
> &
  PropsWithoutRef<ExtractSlotProps<Slots[Primary]>>;

export type EeveeState<Slots extends SlotPropsRecord> = {
  components: {
    // loop each key
    [Key in keyof Slots]-?:
      | React.ComponentType<ExtractSlotProps<Slots[Key]>>
      | (ExtractSlotProps<Slots[Key]> extends AsIntrinsicElement<infer As> ? As : keyof JSX.IntrinsicElements);
  };
} & {
  // Include a prop for each slot, with the shorthand resolved to a props object
  // The root slot can never be null, so also exclude null from it
  [Key in keyof Slots]: ReplaceNullWithUndefined<
    Exclude<Slots[Key], SlotShorthandValue | (Key extends 'root' ? null : never)>
  >;
};
