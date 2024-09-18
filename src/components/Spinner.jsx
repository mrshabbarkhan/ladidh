const Spinner = () => {
  return (
    <button className="group border border-primary-dark text-sm font-semibold px-4 py-1 rounded-lg hover:text-white hover:bg-primary-dark transition flex items-center">
      <div className="h-5 w-5  border-2 border-primary border-t-transparent rounded-full animate-spin transition group-hover:border-white group-hover:border-t-transparent"></div>
    </button>
  );
};

export default Spinner;
