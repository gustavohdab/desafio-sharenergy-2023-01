import { Route, Routes } from "react-router-dom";

import { SignIn } from "../pages";

export function AuthRoutes() {
  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
    </Routes>
  );
}
