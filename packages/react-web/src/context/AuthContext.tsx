import * as React from 'react';
import { supabase } from '../libs/index';
import type { UserSchema1 } from 'typings/my-mdx/index';
import { createUser, getUser } from '../services/index';
import { useLocation, useNavigate } from 'react-router-dom';

export type AuthContextValue = {
  user: UserSchema1 | null;
  isAuthReady: boolean;
  isLoaded: boolean;
  signIn: () => void;
  signOut: () => void;
  refetch: () => void;
};

const AuthContext = React.createContext<AuthContextValue | undefined>(undefined);

export const AuthContextProvider: React.FC = ({ children }) => {
  const loc = useLocation();
  const navigate = useNavigate();

  const [isLoaded, setIsLoaded] = React.useState(false);
  const [user, setUser] = React.useState<UserSchema1 | null>(null);
  const [isAuthReady, setIsAuthReady] = React.useState<boolean>(false);

  const signIn = React.useCallback(() => {
    setIsLoaded(true);
    supabase.auth.signIn({
      provider: 'github',
    });
  }, []);

  const signOut = React.useCallback(() => {
    supabase.auth.signOut();
    localStorage.removeItem('giscus-session');
  }, []);

  const refetch = () => {
    if (user) {
      getUser(user?.id).then(u => {
        setUser(u ?? null);
      });
    }
  };

  // Initialize the user based on the stored session
  const initUser = React.useCallback(async () => {
    const session = supabase.auth.session();
    if (session) {
      if (session.user) {
        getUser(session.user.id).then(author => {
          setIsAuthReady(true);
          setUser(author ?? null);
        });
      }
    } else {
      setIsAuthReady(true);
    }
  }, []);

  React.useEffect(() => {
    initUser();
  }, [initUser]);

  React.useEffect(() => {
    const { data: authListener } = supabase.auth.onAuthStateChange(async (event, session) => {
      // update
      if (event === 'SIGNED_IN') {
        if (session && session.user) {
          const author = await createUser(session.user);
          setIsLoaded(false);
          setUser(author ?? null);
        }
        if (loc.pathname === '/login') {
          navigate('/home');
        }
      } else if (event === 'SIGNED_OUT') {
        setUser(null);
        setIsAuthReady(false);
        navigate('/home');
      }
    });

    return () => authListener?.unsubscribe();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loc]);

  return (
    <AuthContext.Provider value={{ isAuthReady, isLoaded, signIn, signOut, user, refetch }}>
      {children}
    </AuthContext.Provider>
  );
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
