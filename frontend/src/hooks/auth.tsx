import { createContext, useContext, useState, useEffect } from "react";
import { myAPI } from "../services/api";

interface SignInCredentials {
  username: string;
  password: string;
  rememberMe: boolean;
}

interface AuthContextProps {
  signIn: (credentials: SignInCredentials) => void;
  token: string;
  signOut: () => void;
}

const AuthContext = createContext<AuthContextProps>({
  signIn: () => {},
  token: "",
  signOut: () => {},
});

interface AuthProviderProps {
  children: React.ReactNode;
}

function AuthProvider({ children }: AuthProviderProps) {
  const [data, setData] = useState({ token: "" });
  const api = myAPI();

  async function signIn(credentials: SignInCredentials) {
    try {
      const response = await api.post("/auth/login", credentials);
      const { token } = response.data;

      if (credentials.rememberMe) {
        localStorage.setItem("@sharenergy:token", token);
      }

      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

      setData({ token });
    } catch (error) {
      console.log(error);
    }
  }

  function signOut() {
    localStorage.removeItem("@sharenergy:token");
    setData({ token: "" });
  }

  useEffect(() => {
    const token = localStorage.getItem("@sharenergy:token");
    if (token) {
      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      setData({ token });
    } else {
      setData({ token: "" });
    }
  }, []);

  return (
    <AuthContext.Provider value={{ signIn, token: data.token, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);
  return context;
}

export { AuthProvider, useAuth };
