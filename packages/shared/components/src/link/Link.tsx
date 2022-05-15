/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { forwardRef } from 'react';
import { makeStyles, mergeClasses, shorthands } from '@griffel/react';

import { ILinkProps, LinkType } from './Link.types';

const useStyles = makeStyles({
  externalLink: {
    color: 'var(--color-primary)',

    '&:focus': {
      ...shorthands.outline('2px', 'auto', 'var(--color-primary)'),
      outlineOffset: '2px',
    },
    '&:focus:not(.focus-visible)': {
      ...shorthands.outline('none'),
    },
  },
});

const Link = (props: ILinkProps, ref?: any) => {
  const { href = '/', target, rel, className, ...rest } = props;

  const styles = useStyles();
  const classes = mergeClasses(styles.externalLink, className);

  // There are three types of links:
  // - Internal links to other pages within the same app
  // - External links, to other domains
  // - Hash links (#introduction), for the same page.
  let linkType: LinkType;

  if (href.match(/^#/)) {
    linkType = 'hash';
  } else if (href.match(/(^http|^mailto)/i) || target === '_blank') {
    linkType = 'external';
  } else {
    linkType = 'internal';
  }

  let linkTarget = target;

  // By default, external links should open in a new tab.
  // This is overrideable though.
  if (typeof linkTarget === 'undefined') {
    linkTarget = linkType === 'external' ? '_blank' : undefined;
  }

  const safeRel = target === '_blank' ? 'noopener noreferrer' : rel;

  if (linkType === 'internal') {
    return <></>;
  }

  return (
    <a
      className={classes}
      href={href}
      rel={safeRel}
      target={linkTarget}
      ref={ref}
      {...rest}
    ></a>
  );
};

export default forwardRef(Link);
