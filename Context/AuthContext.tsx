import { createContext, useReducer } from "react";
import AuthReducer from "./AuthReducer";

// Initial state
export const initialState = {
  currentUser: null,
  isLoggedIn: false,
};

export interface CurrentUserContextType {
  currentUser: Object | null;
  isLoggedIn: boolean;
  login: (userName: string) => void;
  // checkLoggedIn: () => void;
  logout: () => void;
}

export const AuthContext = createContext<CurrentUserContextType | null>(null);
export const AuthContextProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(AuthReducer, initialState);

  const login = (userName: string) => {
    dispatch({
      type: "LOG_IN",
      payload: userName,
    });
  };
  const logout = () => {
    dispatch({
      type: "LOG_OUT",
      payload: null,
    });
  };

  return (
    <AuthContext.Provider
      value={{
        currentUser: state.currentUser,
        isLoggedIn: state.isLoggedIn,
        // checkLoggedIn,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
