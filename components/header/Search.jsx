import { AiOutlineSearch } from "react-icons/ai";

const Search = () => {
  return (
    <div className="hidden md:flex bg-white rounded-full items-center px-2 w-[200px] sm:w-[400px] lg:w-[300px]">
      <AiOutlineSearch size={25} />
      <input
        className="bg-transparent p-1 focus:outline-none "
        type="text"
        placeholder="Search games"
      />
    </div>
  );
};

export default Search;
