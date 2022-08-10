import * as React from 'react';
import {
  ActionCodeSettings,
  Auth,
  AuthError,
  AuthProvider,
  CustomParameters,
  GithubAuthProvider,
  signInWithPopup,
  UserCredential,
} from 'firebase/auth';

export type AuthActionHook<M> = [M, UserCredential | undefined, boolean, AuthError | undefined];
export type CreateUserOptions = {
  emailVerificationOptions?: ActionCodeSettings;
  sendEmailVerification?: boolean;
};
export type EmailAndPasswordActionHook = AuthActionHook<(email: string, password: string) => Promise<void>>;

export type SignInWithPopupHook = AuthActionHook<
  (scopes?: string[], customOAuthParameters?: CustomParameters) => Promise<void>
>;

export const useSignInWithGithub = (auth: Auth): SignInWithPopupHook => {
  const createGithubAuthProvider = (scopes?: string[], customOAuthParameters?: CustomParameters) => {
    const provider = new GithubAuthProvider();
    if (scopes) {
      scopes.forEach(scope => provider.addScope(scope));
    }
    if (customOAuthParameters) {
      provider.setCustomParameters(customOAuthParameters);
    }
    return provider;
  };
  return useSignInWithPopup(auth, createGithubAuthProvider);
};

const useSignInWithPopup = (
  auth: Auth,
  createProvider: (scopes?: string[], customOAuthParameters?: CustomParameters) => AuthProvider,
): SignInWithPopupHook => {
  const [error, setError] = React.useState<AuthError>();
  const [loggedInUser, setLoggedInUser] = React.useState<UserCredential>();
  const [loading, setLoading] = React.useState<boolean>(false);

  const signInWithGoogle = async (scopes?: string[], customOAuthParameters?: CustomParameters) => {
    setLoading(true);
    setError(undefined);
    try {
      const provider = createProvider(scopes, customOAuthParameters);
      const user = await signInWithPopup(auth, provider);
      setLoggedInUser(user);
    } catch (err) {
      setError(err as AuthError);
    } finally {
      setLoading(false);
    }
  };

  const resArray: SignInWithPopupHook = [signInWithGoogle, loggedInUser, loading, error];

  // eslint-disable-next-line react-hooks/exhaustive-deps
  return React.useMemo<SignInWithPopupHook>(() => resArray, resArray);
};
