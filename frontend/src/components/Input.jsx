const Input = ({ icon: Icon, ...props }) => {
  return (
    <div className="relative mb-6">
      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <Icon className="size-5 text-sky-500" />
      </div>
      <input
        {...props}
        className="w-full pl-10 pr-3 py-3 bg-gray-900  rounded-lg border-gray-700 focus:border-sky-500 focus:ring-2 outline-none focus:ring-sky-500 text-white placeholder-gray-400 transition duration-200"
      />
    </div>
  );
};

export default Input;