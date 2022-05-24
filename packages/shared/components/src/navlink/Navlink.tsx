/**
 * A navlink is like a Link, but it checks to see if this link is
 * "current". Meant for navigation, to allow the link to serve
 * as an indicator of which page the person is at.
 */

import React from 'react';
import { useLocation } from 'react-router-dom';

import { Link } from '../link';

type NavlinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  getProps: (v: boolean) => void;
};

const Navlink = ({ href, getProps, className, ...delegated }: NavlinkProps) => {
  const location = useLocation();

  // Strip trailing slashes, for consistency.
  const isCurrent =
    location.pathname.replace(/\/$/, '') === href?.replace(/\/$/, '');

  React.useEffect(() => {
    if (typeof getProps === 'function') {
      getProps(isCurrent);
    }
    // eslint-disable-next-line
  }, [isCurrent]);

  return <Link className={className} href={href} {...delegated} />;
};

export default Navlink;
