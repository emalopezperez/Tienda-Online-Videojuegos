const Spiners = () => {
  return (
    <div>
      <div className="flex items-center justify-center text-black">
        <div
          className="text-black spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full"
          role="status"
        >
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    </div>
  );
};

export default Spiners;
