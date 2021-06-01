import { createContext, FunctionComponent, useCallback, useContext, useState } from "react";
import { setCookie, destroyCookie } from "nookies";

import { api } from "../services/api";

type AuthContextType = {
  isAuthenticated: boolean;
  signUp: (data: SignUpData)=> Promise<void>;
  signIn: (data: SignInData) => Promise<void>;
  signOut: () => void;
  changeAuthenticationState: (props: boolean) => void;
};

type SignInData = {
  email: string;
  password: string;
};

type SignUpData = {
  email: string;
  password: string;
  answer: string;
  name: string;
  photoLink: string;
}

export const AuthContext = createContext({} as AuthContextType);

export const AuthProvider: FunctionComponent = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const changeAuthenticationState = useCallback((props: boolean) => {
    setIsAuthenticated(props);
  }, [isAuthenticated]);

  const signIn = useCallback(async ({ email, password }: SignInData) => {
    api.post('auth/signin', { email, password })
      .then(response => {
        const { token } = response.data;

        setCookie(undefined, 'mundodiverso_token', token, {
          maxAge: 60 * 60 * 24 * 1, // 1 dia
        });

        setIsAuthenticated(true);
      }).catch(error => {
        throw new Error(error);
      });
  }, [isAuthenticated]);

  const signOut = useCallback(() => {
    destroyCookie(undefined, 'mundodiverso_token')
    setIsAuthenticated(false);
  }, [isAuthenticated]);

  const signUp = useCallback(async ({ email, password, answer, name, photoLink }: SignUpData) => {
    api.post('auth/register', {
        email, password, answer, name, photoLink
      })
      .then(response => {
        signIn({ email, password });
      })
      .catch(error => {
        console.log(error);
      });
  }, [])

  return (
    <AuthContext.Provider value={{
      isAuthenticated,
      changeAuthenticationState,
      signOut,
      signIn,
      signUp,
    }}>
      {children}
    </AuthContext.Provider>
  )
};

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('Shoulbe use with AuthProvider');
  };

  return context;
};
