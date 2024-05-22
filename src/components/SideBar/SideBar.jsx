import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaShieldAlt,
  FaUser,
  FaChevronDown,
  FaChevronRight,
} from "react-icons/fa";
import { IoHomeOutline } from "react-icons/io5";

const Sidebar = () => {
  const [isSecurityOpen, setIsSecurityOpen] = useState(false);

  const toggleSecurity = () => {
    setIsSecurityOpen(!isSecurityOpen);
  };

  return (
    <div className="bg-sky-800 bg-opacity-50 px-8 py-8 shadow-lg backdrop-blur-md text-white h-screen w-64 fixed left-0 top-0 overflow-y-auto">
      <div className="p-4">
        <h1 className="flex items-center justify-center text-2xl font-bold">
          Dashboard
        </h1>
      </div>
      <nav className="mt-4">
        <ul>
          <li className="flex items-center rounded-3xl border-none hover:bg-blue-400 bg-opacity-50 px-6 py-2 text-center text-inherit outline-none backdrop-blur-md">
            <IoHomeOutline className="mr-2" />
            <Link to="/dashboard">Home</Link>
          </li>
          <li className="mt-4">
            <div
              className="flex items-center rounded-3xl border-none hover:bg-blue-400 bg-opacity-50 px-6 py-2 text-center text-inherit"
              onClick={toggleSecurity}
            >
              <FaShieldAlt className="mr-2" />
              <span>Seguridad</span>
              <span className="ml-auto">
                {isSecurityOpen ? <FaChevronDown /> : <FaChevronRight />}
              </span>
            </div>
            {isSecurityOpen && (
              <ul className="ml-4">
                <li className="flex items-center rounded-3xl border-none hover:bg-blue-400 bg-opacity-50 px-6 py-2 text-center text-inherit">
                  <FaUser className="mr-2" />
                  <Link to="/security/users">Usuarios</Link>
                </li>
              </ul>
            )}
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
