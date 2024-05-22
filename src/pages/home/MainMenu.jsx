import { Link } from 'react-router-dom';

const MainMenu = () => {
  return (
    <div>
      
    <div
      className="min-h-screen h-full w-full flex items-center justify-center bg-gradient-to-r from-sky-950 to-cyan-500 bg-cover bg-no-repeat">
      <div className="rounded-3xl border-none bg-gray-400 bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md">
        <div className="text-blue-400">
          <div className="mb-8 flex flex-col items-center">
            <h1 className="mb-2 text-6xl">Manage Users</h1>
            <span className="text-2xl text-blue-400">Welcome to the User Management System</span>
          </div>
          <div className="mt-8 flex justify-center space-x-4 text-lg text-black">
            <Link
              to="/login"
              className="rounded-3xl bg-blue-400 bg-opacity-50 px-10 py-2 text-white shadow-xl backdrop-blur-md transition-colors duration-300 hover:bg-blue-600"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="rounded-3xl bg-blue-400 bg-opacity-50 px-10 py-2 text-white shadow-xl backdrop-blur-md transition-colors duration-300 hover:bg-blue-600"
            >
              Register
            </Link>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default MainMenu;
