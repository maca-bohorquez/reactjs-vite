import { Link } from "react-router-dom";

const MainMenu = () => {
  return (
    <section>
      <div className="bg-sky-950 text-white py-20">
        <div className="container mx-auto flex w-full flex-col md:flex-row items-center my-12 md:my-24">
          <div className="flex flex-col w-full lg:w-1/3 justify-center items-start p-8">
            <h1 className="text-3xl md:text-5xl  text-blue-300 tracking-loose">
              Management
            </h1>
            <h2 className="text-3xl md:text-5xl leading-relaxed md:leading-snug mb-2">
              One-click management
            </h2>
            <p className="text-sm md:text-base text-gray-50 mb-4">
              Manage your organization's users and permissions here
            </p>
            <Link
              to="/login"
              className="bg-transparent hover:bg-blue-300 text-blue-300 hover:text-black rounded shadow hover:shadow-lg py-2 px-4 border border-blue-300 hover:border-transparent"
            >
              Login Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainMenu;
