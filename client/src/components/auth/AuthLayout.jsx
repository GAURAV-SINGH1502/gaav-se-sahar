const AuthLayout = ({ title, subtitle, children }) => {
  return (
    <div className="min-h-screen flex">
      {/* Left Side */}
      <div className="hidden md:flex w-1/2 bg-green-700 text-white flex-col justify-center items-center p-10">
        <h1 className="text-5xl font-bold">🌾 Gaav Se Sahar</h1>

        <p className="mt-6 text-xl text-center max-w-md">
          Connecting Villages with Cities through technology.
        </p>
      </div>

      {/* Right Side */}
      <div className="w-full md:w-1/2 flex justify-center items-center bg-gray-100">
        <div className="bg-white shadow-xl rounded-xl p-8 w-full max-w-md">
          <h2 className="text-3xl font-bold">{title}</h2>

          <p className="text-gray-500 mt-2 mb-6">{subtitle}</p>

          {children}
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;