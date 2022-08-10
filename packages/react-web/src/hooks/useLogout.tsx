import { signOut } from 'firebase/auth';
import { auth } from '@libs/firebase/index';
import { useAuthContext } from '@context/AuthContext';

export const useLogout = () => {
  const { dispatch } = useAuthContext();
  const logout = async () => {
    try {
      await signOut(auth);
      dispatch({ type: 'LOGOUT' });
    } catch (error) {
      //
    }
  };

  return { logout };
};
