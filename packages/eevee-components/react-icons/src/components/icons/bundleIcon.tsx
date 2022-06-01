import * as React from 'react';
import { iconFilledClassName, iconRegularClassName } from './constants';
import { EeveeIconsProps } from './EeveeIcons.types';
import { makeStyles, mergeClasses } from '@griffel/react';

const useBundledIconStyles = makeStyles({
  root: { display: 'none' },
  visible: { display: 'inline' },
});

export const bundleIcon = (FilledIcon: React.FC<EeveeIconsProps>, RegularIcon: React.FC<EeveeIconsProps>) => {
  const Component: React.FC<EeveeIconsProps> = props => {
    const { className, primaryFill = 'currentColor', filled } = props;
    const styles = useBundledIconStyles();
    return (
      <React.Fragment>
        <FilledIcon
          {...props}
          className={mergeClasses(styles.root, filled && styles.visible, iconFilledClassName, className)}
          primaryFill={primaryFill}
        />
        <RegularIcon
          {...props}
          className={mergeClasses(styles.root, !filled && styles.visible, iconRegularClassName, className)}
          primaryFill={primaryFill}
        />
      </React.Fragment>
    );
  };

  Component.displayName = 'CompoundIcon';

  return Component;
};
