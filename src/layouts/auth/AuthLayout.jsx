import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-500">
      <Outlet />
    </div>
  );
};

export default AuthLayout;
