import { Routes, Route } from "react-router-dom";

import {
  Customers,
  CustomersRegister,
  HttpCat,
  RandomDog,
  RandomUsers,
} from "../pages/index";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<RandomUsers />} />
      <Route path="/http-cat" element={<HttpCat />} />
      <Route path="/random-dog" element={<RandomDog />} />
      <Route path="/customers" element={<Customers />} />
      <Route path="/customers/register" element={<CustomersRegister />} />
    </Routes>
  );
}
