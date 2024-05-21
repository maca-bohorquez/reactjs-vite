import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="bg-gray-800 text-white h-screen w-64 fixed left-0 top-0 overflow-y-auto">
      <div className="p-4">
        <h1 className="text-2xl font-bold">Dashboard</h1>
      </div>
      <nav className="mt-4">
        <ul>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li className="mt-4">
            <Link to="/security">Seguridad</Link>
            <ul className="ml-4">
              <li className="mt-2">
                <Link to="/security/users">Usuarios</Link>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
