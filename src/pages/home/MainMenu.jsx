import { Link } from 'react-router-dom';

const MainMenu = () => {
  return (
    <div
      className="min-h-screen h-full w-full flex items-center justify-center bg-gray-900 bg-cover bg-no-repeat"
      style={{
        backgroundImage:
          "url('https://images.pexels.com/photos/1103970/pexels-photo-1103970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
      }}
    >
      <div className="rounded-3xl border-none bg-gray-400 bg-opacity-50 px-6 py-6 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md">
        <div className="text-blue-600">
          <div className="mb-8 flex flex-col items-center">
            <h1 className="mb-2 text-6xl">Manage Users</h1>
            <span className="text-2xl text-blue-600">Welcome to the User Management System</span>
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
  );
};

export default MainMenu;
