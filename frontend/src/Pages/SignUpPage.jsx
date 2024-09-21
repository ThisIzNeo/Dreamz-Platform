import { motion } from "framer-motion";
import { Lock, Mail, User } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

import Input from "../components/Input";
import PasswordStrengthMeter from "../components/PasswordStrengthMeter";

const SignUpPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  const handleSignUp = (e) => {
    e.preventDefault();
  };
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-md w-full bg-white rounded-2xl shadow-xl overflow-hidden"
    >
      <div className="p-8">
        <h2 className=" text-3xl font-bold mb-6 text-center bg-gradient-to-r from-sky-500 to-blue-600 text-transparent bg-clip-text">
          Sign Up
        </h2>

        <form onSubmit={handleSignUp}>
          <Input
            icon={User}
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            icon={Mail}
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            icon={Lock}
            type="text"
            placeholder="Password"
            value={Password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <PasswordStrengthMeter password={Password} />
          <motion.button
            className="mt-5 w-full py-3 px-4 bg-gradient-to-r from-sky-500 to bg-cyan-400 text-white font-bold rounded-lg shadow-lg hover:from-indigo-600 hover:to-indigo-800 focus:outline-none focus:ring-2 focus:ring-sky-600 focus:ring-offset-2 focus:ring-offset-gray-900 transition duration-200"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
          >
            Create Account
          </motion.button>
        </form>
      </div>
      <div className="px-8 py-4 bg-gray-900 flex justify-center">
        <p className="text-sm text-gray-100">
          Already have an account?{" "}
          <Link to={"/login"} className="text-sky-500 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </motion.div>
  );
};

export default SignUpPage;