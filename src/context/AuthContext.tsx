import { createContext, FunctionComponent, useCallback, useContext, useState } from "react";
import Cookies from "js-cookie";

export const AuthContext = createContext({} as IAuthContext);

interface IAuthContext {
  isAuthenticated: boolean;
  logout(): void;
  changeAuthenticationState({}: boolean): void;
}

export const AuthProvider: FunctionComponent = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const changeAuthenticationState = useCallback((boo: boolean)=>{
    setIsAuthenticated(boo);
  },[isAuthenticated]);

  const logout = useCallback(()=>{
    Cookies.remove('token');
    Cookies.remove('refreshToken');

    setIsAuthenticated(false);
  },[isAuthenticated]);

  return (
    <AuthContext.Provider value={{ isAuthenticated, changeAuthenticationState, logout }}>
      {children}
    </AuthContext.Provider>
  )
};

export const useAuth = () => {
  const context = useContext(AuthContext);

  if(!context){
    throw new Error('Shoulbe use with AuthProvider');
  };

  return context;
};
