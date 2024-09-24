import logo from "../images/logo-soon.png";
import { Link } from "react-router-dom";

const EduSphere = () => {
  return (
    <div className="flex flex-col justify-center items-center h-full">
      <img className="flex justify-center items-center w-56" src={logo} />
      <h1 className="text-cyan-50 text-5xl text-center tex">
        EduSphere Platform
      </h1>
      <h3 className="text-green-400 text-5xl text-center">Soon...</h3>
      <div className="flex flex-row ">
        <p className="mx-3 py-3 text-sky-500 hover:text-sky-300 transition-all duration-300">
          <Link to={"/Signup"}>Sign up</Link>
        </p>
        <p className="mx-3 py-3 text-sky-500 hover:text-sky-300 transition-all duration-300">
          <Link to={"/login"}>Login</Link>
        </p>
      </div>
    </div>
  );
};

export default EduSphere;
