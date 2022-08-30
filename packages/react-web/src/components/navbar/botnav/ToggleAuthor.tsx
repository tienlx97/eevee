import * as React from 'react';
import { useAuthContext } from '@context/AuthContext';
import { ButtonR } from '@eevee/react-button';
import { User } from '@components/icons/User';
import { Spinner } from '@components/spinner-2/index';
import { makeStyles, shorthands } from '@griffel/react';
import { breakPoints, tokens } from '@eevee/react-theme';

const useStyles = makeStyles({
  root: {
    backgroundColor: tokens.bg1,
    display: 'block',
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: '56px',
    ...shorthands.overflow('scroll'),
  },

  circleAvatar: {
    ...shorthands.borderRadius('50%'),
  },

  query: {
    ...shorthands.margin(0, 'auto'),
    [`@media ${breakPoints.lgAndLarger}`]: {
      maxWidth: '692px',
    },

    [`@media ${breakPoints.lg}`]: {
      maxWidth: '692px',
    },

    [`@media ${breakPoints.md}`]: {
      maxWidth: '692px',
    },

    [`@media ${breakPoints.sm}`]: {
      maxWidth: '692px',
    },

    [`@media ${breakPoints.xs}`]: {
      maxWidth: '100%',
    },
  },
});

type ToggleAuthorProps = {
  onToggle: (e: boolean) => void;
  toggle: boolean;
};

export const ToggleAuthor = ({ onToggle, toggle }: ToggleAuthorProps) => {
  const { signIn, signOut, isLoaded, user } = useAuthContext();

  const styles = useStyles();

  const onClick = () => {
    onToggle(!toggle);
  };

  if (isLoaded) {
    return <Spinner />;
  }

  if (!user) {
    return <ButtonR aria-label={'Login'} title={'Login'} onClick={signIn} icon={<User />} />;
  }

  return (
    <ButtonR
      aria-label={'User option menu'}
      title={'User option menu'}
      onClick={onClick}
      icon={<img alt={user.name} className={styles.circleAvatar} src={user.photo_url} width={24} height={24} />}
    />
  );
};
