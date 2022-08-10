import * as React from 'react';
import { GithubAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth, createAuthorDocument } from '@libs/firebase/index';
import { useAuthContext } from '@context/index';

export const useLogin = () => {
  const [error, setError] = React.useState<boolean | null>(false);
  const { dispatch } = useAuthContext();
  const [isPending, setIsPending] = React.useState(false);
  const provider = new GithubAuthProvider();

  const login = async () => {
    setError(null);
    setIsPending(true);

    try {
      const res = await signInWithPopup(auth, provider);
      if (!res) {
        throw new Error('Could not complete signup');
      }

      const user = res.user;
      const author = await createAuthorDocument(user);
      dispatch({ type: 'LOGIN', payload: author });
      setIsPending(false);
    } catch (err: any) {
      setError(err.message);
      setIsPending(false);
    }
  };

  return { login, error, isPending };
};
