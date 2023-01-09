import { BrowserRouter } from "react-router-dom";
import { useAuth } from "../hooks/auth";

import { AppRoutes } from "./app.routes";
import { AuthRoutes } from "./auth.routes";

export function Routes() {
  const { token } = useAuth();

  return (
    /* A ternary operator. If token is true, it will render AppRoutes, otherwise it will render
    AuthRoutes. */
    <BrowserRouter>{token ? <AppRoutes /> : <AuthRoutes />}</BrowserRouter>
  );
}
