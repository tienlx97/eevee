import * as React from 'react';
import { useLogin, useLogout } from '@hooks/index';
import { useAuthContext } from '@context/AuthContext';
import { ButtonR } from '@eevee/react-button';
import { User } from '@components/icons/User';
import { Spinner } from '@components/spinner2/index';

export const ToggleAuthor = () => {
  const { state } = useAuthContext();
  const { user } = state;

  const { login, isPending } = useLogin();
  const { logout } = useLogout();

  if (isPending) {
    return <Spinner />;
  }

  return (
    <>
      {user ? (
        <ButtonR
          aria-label={'Logout'}
          title={'Logout'}
          onClick={logout}
          icon={
            <img alt={user.displayName} style={{ borderRadius: '50%' }} src={user.photoURL} width={24} height={24} />
          }
        />
      ) : (
        <ButtonR aria-label={'Login'} title={'Login'} onClick={login} icon={<User />} />
      )}
    </>
  );
};
