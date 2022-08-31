import * as React from 'react';
import { makeStyles, mergeClasses, shorthands } from '@griffel/react';
import { Link, useLocation, useResolvedPath } from 'react-router-dom';
import { breakPoints, tokens } from '@eevee/react-theme';
import { Popover, PopoverItem, PopoverSurface, PopoverTrigger } from '@eevee/react-popover';
import { CircleAvatar } from '@components/circle-avatar/CircleAvatar';
import { ThreeDot } from '@components/icons/index';
import { ButtonR } from '@eevee/react-button';
import type { UserSchema } from 'typings/my-mdx/index';
import { useToast } from '@eevee/react-toast';

const useStyles = makeStyles({
  flex: {
    display: 'flex',
    justifyContent: 'center',
  },

  mediaQuerySize: {
    width: '100%',
    minWidth: 0,
    [`@media ${breakPoints.lgAndLarger}`]: {
      maxWidth: '692px',
      ...shorthands.margin('0px', '32px'),
    },

    [`@media ${breakPoints.lg}`]: {
      maxWidth: '692px',
      ...shorthands.margin('0px', '32px'),
    },

    [`@media ${breakPoints.md}`]: {
      maxWidth: '692px',
      ...shorthands.margin('0px', '32px'),
    },

    [`@media ${breakPoints.sm}`]: {
      ...shorthands.margin('0px', '24px'),
    },

    [`@media ${breakPoints.xs}`]: {
      ...shorthands.margin('0px', '0px'),
    },
  },

  mediaQueryMarginY: {
    boxShadow: `inset 0 -1px 0 ${tokens.b2};`,
    [`@media ${breakPoints.lgAndLarger}`]: {
      ...shorthands.margin('52px', '0px', '48px'),
    },

    [`@media ${breakPoints.lg}`]: {
      ...shorthands.margin('52px', '0px', '48px'),
    },

    [`@media ${breakPoints.md}`]: {
      ...shorthands.margin('52px', '0px', '48px'),
    },

    [`@media ${breakPoints.sm}`]: {
      ...shorthands.margin('24px', '0px'),
    },

    [`@media ${breakPoints.xs}`]: {
      ...shorthands.margin('24px', '0px'),
    },
  },
});

const useUserViewStyles = makeStyles({
  mediaQueryWrapper: {
    display: 'flex',
    [`@media ${breakPoints.lgAndLarger}`]: {
      flexWrap: 'nowrap',
      justifyContent: 'flex-end',
      alignItems: 'center',
      marginBottom: '40px',
    },

    [`@media ${breakPoints.lg}`]: {
      flexWrap: 'nowrap',
      justifyContent: 'flex-end',
      alignItems: 'center',
      marginBottom: '40px',
    },

    [`@media ${breakPoints.md}`]: {
      flexWrap: 'nowrap',
      justifyContent: 'flex-end',
      alignItems: 'center',
      marginBottom: '40px',
    },

    [`@media ${breakPoints.sm}`]: {
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      marginBottom: '24px',
    },

    [`@media ${breakPoints.xs}`]: {
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      marginBottom: '24px',
    },
  },

  mediaQueryView: {
    display: 'flex',
    alignItems: 'center',
    ...shorthands.flex(1, 1, 'auto'),
    justifyContent: 'flex-start',

    [`@media ${breakPoints.lgAndLarger}`]: {
      marginRight: 0,
    },

    [`@media ${breakPoints.lg}`]: {
      marginRight: '16px',
    },

    [`@media ${breakPoints.md}`]: {
      marginRight: '16px',
    },

    [`@media ${breakPoints.sm}`]: {
      marginRight: 0,
    },

    [`@media ${breakPoints.xs}`]: {
      marginRight: 0,
    },
  },

  mediaQueryNickName: {
    color: tokens.f10,
    wordBreak: 'break-all',
    fontWeight: 700,
    ...shorthands.overflow('hidden'),
    textOverflow: 'ellipsis',
    WebkitLineClamp: 1,

    [`@media ${breakPoints.lgAndLarger}`]: {
      letterSpacing: 0,
      maxHeight: '52px',
      lineHeight: '52px',
      fontSize: '42px',
    },

    [`@media ${breakPoints.lg}`]: {
      letterSpacing: 0,
      maxHeight: '52px',
      lineHeight: '52px',
      fontSize: '42px',
    },

    [`@media (orientation: landscape) and (max-width: 903.98px)`]: {
      maxHeight: 'none',
    },

    [`@media ${breakPoints.md}`]: {
      letterSpacing: 0,
      maxHeight: '52px',
      lineHeight: '52px',
      fontSize: '42px',
    },

    [`@media ${breakPoints.sm}`]: {
      letterSpacing: 0,
      maxHeight: '28px',
      lineHeight: '28px',
      fontSize: '22px',
    },

    [`@media ${breakPoints.xs}`]: {
      letterSpacing: 0,
      maxHeight: '28px',
      lineHeight: '28px',
      fontSize: '22px',
    },
  },

  mediaQueryFollow: {
    [`@media ${breakPoints.lgAndLarger}`]: {
      display: 'none',
    },

    [`@media ${breakPoints.lg}`]: {
      display: 'none',
    },

    [`@media ${breakPoints.md}`]: {
      display: 'none',
    },
  },

  follow: {
    fontSize: '16px',
    lineHeight: '24px',
    color: tokens.f2,
  },

  mediaQueryAvatar: {
    marginRight: '20px',
    [`@media ${breakPoints.lgAndLarger}`]: {
      display: 'none',
    },

    [`@media ${breakPoints.lg}`]: {
      display: 'none',
    },

    [`@media ${breakPoints.md}`]: {
      display: 'none',
    },
  },
});

type UserViewProps = {
  photoURL: string;
  nickName: string;
};
const UserView = ({ photoURL, nickName }: UserViewProps) => {
  const userViewStyles = useUserViewStyles();
  const toastify = useToast();

  const onCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    toastify('info', 'Copied profile');
  };

  return (
    <div className={userViewStyles.mediaQueryWrapper}>
      <div className={userViewStyles.mediaQueryView}>
        {/* avatar */}
        <div className={userViewStyles.mediaQueryAvatar}>
          <CircleAvatar url={photoURL} />
        </div>

        {/* nickname - follow */}
        <div>
          {/* nick name */}
          <div aria-hidden="false">
            <span className={userViewStyles.mediaQueryNickName}>{nickName}</span>
          </div>
          {/* follow */}
          <div className={userViewStyles.mediaQueryFollow}>
            <p className={userViewStyles.follow}>69 Followers</p>
          </div>
        </div>
      </div>

      <Popover withArrow>
        <PopoverTrigger>
          <div style={{ marginLeft: '12px' }}>
            <ButtonR aria-label="Actions" title="Actions" icon={<ThreeDot />} />
          </div>
        </PopoverTrigger>

        <PopoverSurface>
          <PopoverItem onClick={onCopyLink}>Copy link to profile</PopoverItem>
          <PopoverItem disabled>Mute this author</PopoverItem>
          <PopoverItem disabled>Block this author</PopoverItem>
          <PopoverItem disabled>Report this author</PopoverItem>
        </PopoverSurface>
      </Popover>
    </div>
  );
};

const useNavStyles = makeStyles({
  root: {
    display: 'block',
    position: 'relative',
    boxShadow: `inset 0 -1px 0 ${tokens.b2}`,
    ...shorthands.overflow('hidden'),
    height: '39px',
  },

  padding: {
    display: 'flex',
    alignItems: 'center',
    overflowX: 'scroll',
    overflowY: 'hidden',
    ...shorthands.padding('2px', '0px'),
  },
});

const useNavBarItemStyles = makeStyles({
  root: {
    display: 'block',
    paddingBottom: '6px',
    minWidth: '-webkit-max-content',
  },

  navItemS: {
    display: 'block',
    paddingBottom: '8px',
    marginRight: '32px',
    minWidth: 'max-content',
    ...shorthands.borderBottom('1px', 'solid', tokens.f10),
  },

  navItemText: {
    fontWeight: 400,
    fontSize: '14px',
    lineHeight: '20px',
    color: tokens.f2,

    ':hover': {
      color: tokens.f1,
    },
  },

  activeColor: {
    color: tokens.f1,
  },
});

const NavBarItem = ({ to, name, end = false }: { to: string; name: string; end?: boolean }) => {
  const navItemStyles = useNavBarItemStyles();
  const location = useLocation();
  const path = useResolvedPath(to);
  const locationPathname = location.pathname.toLowerCase();
  const toPathname = path.pathname.toLowerCase();

  const isActive = locationPathname === toPathname;
  return (
    <span className={navItemStyles.root}>
      <div
        style={{
          borderBottomStyle: !isActive ? 'none' : 'solid',
        }}
        className={navItemStyles.navItemS}
      >
        <Link role="tab" to={to}>
          <span className={mergeClasses(navItemStyles.navItemText, isActive && navItemStyles.activeColor)}>{name}</span>
        </Link>
      </div>
    </span>
  );
};

const NavBar = () => {
  const navStyles = useNavStyles();
  return (
    <nav className={navStyles.root}>
      <div className={navStyles.padding}>
        <NavBarItem to="" name="Home" />
        <NavBarItem to="lists" name="Lists" />
        <NavBarItem to="about" name="About" />
      </div>
    </nav>
  );
};

type HeaderProps = {
  author: UserSchema;
};

export const Header = ({ author }: HeaderProps) => {
  const styles = useStyles();

  return (
    <div>
      <div className={styles.flex}>
        <div className={styles.mediaQuerySize}>
          <div className={styles.mediaQueryMarginY}>
            <UserView nickName={author.name} photoURL={author.photo_url} />
            <NavBar />
          </div>
        </div>
      </div>
    </div>
  );
};
