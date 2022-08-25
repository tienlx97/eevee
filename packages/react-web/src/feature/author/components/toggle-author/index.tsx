import * as React from 'react';
import { useAuthContext } from '@context/AuthContext';
import { ButtonR } from '@eevee/react-button';
import { User } from '@components/icons/User';
import { Spinner } from '@components/spinner-2/index';

export const ToggleAuthor = () => {
  const { signIn, signOut, isLoaded, user } = useAuthContext();

  if (isLoaded) {
    return <Spinner />;
  }

  return (
    <>
      {user ? (
        <ButtonR
          aria-label={'Logout'}
          title={'Logout'}
          onClick={signOut}
          icon={<img alt={user.name} style={{ borderRadius: '50%' }} src={user.photo_url} width={24} height={24} />}
        />
      ) : (
        <ButtonR aria-label={'Login'} title={'Login'} onClick={signIn} icon={<User />} />
      )}
    </>
  );
};
