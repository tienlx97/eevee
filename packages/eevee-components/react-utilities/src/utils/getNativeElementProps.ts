import * as React from 'react';
import { anchorProperties, buttonProperties, htmlElementProperties, getNativeProps, olProperties, inputProperties } from './properties';

const nativeElementMap: Record<string, Record<string, number>> = {
  a: anchorProperties,
  button: buttonProperties,
  ol: olProperties,
  input: inputProperties,
};

/**
 * Given an element tagname and user props, filters the props to only allowed props for the given
 * element type.
 * @param tagName - Tag name (e.g. "div")
 * @param props - Props object
 * @param excludedPropNames - List of props to disallow
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function getNativeElementProps<TAttributes extends React.HTMLAttributes<any>>(
  tagName: string,
  props: {},
  excludedPropNames?: string[],
): TAttributes {
  const allowedPropNames = (tagName && nativeElementMap[tagName]) || htmlElementProperties;
  allowedPropNames.as = 1;

  return getNativeProps(props, allowedPropNames, excludedPropNames);
}

/**
 * Splits the native props into ones that go to the `root` slot, and ones that go to the primary slot.
 *
 * This function is only for use with components that have a primary slot other than `root`.
 * Most components should use {@link getNativeElementProps} for their root slot if it is the primary slot.
 *
 * @returns An object containing the native props for the `root` and primary slots.
 */
export const getPartitionedNativeProps = <
  Props extends Pick<React.HTMLAttributes<HTMLElement>, 'style' | 'className'>,
  ExcludedPropKeys extends Extract<keyof Props, string> = never,
  >({
    primarySlotTagName,
    props,
    excludedPropNames,
  }: {
    /** The primary slot's element type (e.g. 'div') */
    primarySlotTagName: keyof JSX.IntrinsicElements;

    /** The component's props object */
    props: Props;

    /** List of native props to exclude from the returned value */
    excludedPropNames?: ExcludedPropKeys[];
  }) => {
  return {
    root: { style: props.style, className: props.className },
    primary: getNativeElementProps<Omit<Props, ExcludedPropKeys>>(primarySlotTagName, props, [
      ...(excludedPropNames || []),
      'style',
      'className',
    ]),
  };
};
