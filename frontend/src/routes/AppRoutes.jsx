import { Routes, Route } from "react-router-dom";
import Login from "../pages/Login.jsx";
import Register from "../pages/Register.jsx";
import DashBoard from "../pages/Dashboard.jsx";
import ProtectedRoute from "../components/ProtectedRoute.jsx";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/register" element={<Register />}></Route>

      <Route element={<ProtectedRoute />}>
        <Route path="/" element={<DashBoard />}></Route>
        <Route path="/task"></Route>
      </Route>

      <Route path="*" element={<h1>404- Page not found</h1>} />
    </Routes>
  );
};

export default AppRoutes;
