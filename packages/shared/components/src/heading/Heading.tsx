import React, { ElementType, HTMLAttributes } from 'react';
import { makeStyles, mergeClasses } from '@griffel/react';

const useStyles = makeStyles({
  'section-title': {
    fontSize: 'calc(16 / 16 * 1rem)',
    color: 'var(--color-secondary)',
    fontWeight: 'var(--font-weight-medium)',
    textTransform: 'uppercase',
    letterSpacing: '2px',
  },

  'small-title': {
    fontSize: 'calc(22 / 16 * 1rem)',
    color: 'var(--color-gray-1000)',
  },

  'medium-title': {
    fontSize: 'calc(28 / 16 * 1rem)',
    color: 'var(--color-gray-1000)',
    lineHeight: '1.2',
  },

  'large-title': {
    fontSize: 'calc(38 / 16 * 1rem)',
    color: 'var(--color-gray-1000)',
  },

  'major-heading': {
    fontSize: 'calc(32 / 16 * 1rem)',
    color: 'var(--color-tertiary)',
    marginTop: '96px',
    marginBottom: '32px',
  },

  'normal-heading': {
    fontSize: 'calc(25 / 16 * 1rem)',
    color: 'var(--color-gray-900)',
    marginTop: '64px',
    marginBottom: '12px',
  },

  'minor-heading': {
    fontSize: 'calc(20 / 16 * 1rem)',
    color: 'var(--color-gray-900)',
    marginTop: '24px',
    marginBottom: '12px',
  },
});

export interface IHeading extends HTMLAttributes<HTMLOrSVGElement> {
  type?:
    | 'section-title'
    | 'small-title'
    | 'medium-title'
    | 'large-title'
    | 'major-heading'
    | 'normal-heading'
    | 'minor-heading';

  renderAs?: ElementType;
}

const Heading = ({
  type = 'medium-title',
  renderAs: RootType = 'h1',
  className,
  ...delegated
}: IHeading) => {
  const styles = useStyles();

  if (type === 'section-title') {
    RootType = 'h1';
    // Component = SectionTitle;
  } else if (type === 'small-title') {
    RootType = 'h1';
    // Component = SmallTitle;
  } else if (type === 'medium-title') {
    RootType = 'h1';
    // Component = MediumTitle;
  } else if (type === 'large-title') {
    RootType = 'h1';
    // Component = LargeTitle;
  } else if (type === 'major-heading') {
    RootType = 'h2';
    // Component = MajorHeading;
  } else if (type === 'normal-heading') {
    RootType = 'h3';
    // Component = NormalHeading;
  } else if (type === 'minor-heading') {
    RootType = 'h4';
    // Component = MinorHeading;
  } else {
    throw new Error('Unrecognized Heading type: ' + type);
  }

  return (
    <RootType
      className={mergeClasses(styles[type], className)}
      {...delegated}
    />
  );
};

export default Heading;
