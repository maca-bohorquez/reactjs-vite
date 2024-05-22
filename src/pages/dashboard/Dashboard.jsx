// components/Dashboard.js

import Sidebar from "../../components/SideBar/SideBar";

const Dashboard = () => {
  return (
    <div className="bg-gray-400 h-full w-full">
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 p-10 ">
        <h1 className="flex justify-center align-center text-white text-2xl font-bold mb-4">Welcome to your Dashboard</h1>
      </div>
    </div>
    </div>
  );
};

export default Dashboard;
