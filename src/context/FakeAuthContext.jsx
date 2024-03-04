import { useContext, createContext, useReducer } from "react";

const AuthContext = createContext();

const initialState = {
  user: {},
  isLoading: false,
  isLoggedIn: false,
  error: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "LOGIN_LOADING":
      return { ...state, isLoading: true };
    case "LOGIN_SUCCESS":
      return {
        ...state,
        isLoading: false,
        isLoggedIn: true,
        user: action.payload,
      };
    case "LOGIN_ERROR":
      return { ...state, isLoading: false, error: action.payload };
    default:
      throw new Error("Unknown action type");
  }
}

function AuthProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return <AuthContext.Provider>{children}</AuthContext.Provider>;
}

function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined)
    throw new Error("AuthContext was used outside of AuthProvider");
}

export { AuthProvider, useAuth };
