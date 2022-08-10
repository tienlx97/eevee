import * as React from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth, getAuthor } from '../libs/index';
import type { Author } from 'typings/my-mdx/index';

export type AuthContextValue = {
  state: AuthReducerState;
  dispatch: React.Dispatch<any>;
};

const AuthContext = React.createContext<AuthContextValue | undefined>(undefined);

type AuthReducerState = {
  user: any | null;
  authIsReady: boolean;
};

type AuthReducerAction = {
  type: 'LOGIN' | 'LOGOUT' | 'AUTH_IS_READY';
  payload: Author | null;
};

export const authReducer = (state: AuthReducerState, action: AuthReducerAction) => {
  switch (action.type) {
    case 'LOGIN':
      return { ...state, user: action.payload };
    case 'LOGOUT':
      return { ...state, user: null };
    case 'AUTH_IS_READY':
      return { ...state, user: action.payload, authIsReady: true };
    default:
      return state;
  }
};

export const AuthContextProvider: React.FC = ({ children }) => {
  const [state, dispatch] = React.useReducer(authReducer, {
    user: null,
    authIsReady: false,
  });

  React.useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, user => {
      if (!user) {
        dispatch({ type: 'AUTH_IS_READY', payload: null });
      } else {
        getAuthor(user.uid).then(author => dispatch({ type: 'AUTH_IS_READY', payload: author ? author : null }));
      }
    });
    return unsubscribe;
  }, []);

  return <AuthContext.Provider value={{ state, dispatch }}>{children}</AuthContext.Provider>;
};

// context consumer hook
export const useAuthContext = () => {
  // get the context
  const context = React.useContext(AuthContext);

  // if `undefined`, throw an error
  if (context === undefined) {
    throw new Error('useAuthContext was used outside of its Provider');
  }

  return context;
};
