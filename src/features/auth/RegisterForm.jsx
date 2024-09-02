function RegisterForm({ setRegister }) {
  return (
    <>
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
        Sign up
      </h2>
      <form>
        <div className="mb-4">
          <label
            className="block text-sm font-medium text-gray-700 mb-1"
            htmlFor="name"
          >
            Name
          </label>
          <input
            id="name"
            type="text"
            placeholder="Full name"
            className="w-full px-4 py-1.5 border border-gray-300 rounded-lg text-gray-700 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            required
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-sm font-medium text-gray-700 mb-1"
            htmlFor="contect"
          >
            Contect
          </label>
          <input
            id="contect"
            type="text"
            placeholder="+91 1234567890"
            className="w-full px-4 py-1.5 border border-gray-300 rounded-lg text-gray-700 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            required
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-sm font-medium text-gray-700 mb-1"
            htmlFor="address"
          >
            Address
          </label>
          <input
            id="address"
            type="text"
            placeholder="Geeta bhawan, indore"
            className="w-full px-4 py-1.5 border border-gray-300 rounded-lg text-gray-700 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            required
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-sm font-medium text-gray-700 mb-1"
            htmlFor="password"
          >
            Password
          </label>
          <input
            id="password"
            type="password"
            placeholder="Enter your password"
            className="w-full px-4 py-1.5 border border-gray-300 rounded-lg text-gray-700 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition duration-300 font-semibold"
        >
          Sign up
        </button>

        {/* Toggle between forms */}
        <p
                  onClick={() => setRegister(false)}
                  
          className="mt-6 text-center text-sm text-gray-600 hover:underline"
        >
          Already have an account?
          <button
            type="button"
            className="text-indigo-600 hover:text-indigo-800 font-medium transition"
          >
            login
          </button>
        </p>
      </form>
    </>
  );
}

export default RegisterForm;
