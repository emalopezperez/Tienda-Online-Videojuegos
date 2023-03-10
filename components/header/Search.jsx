import { AiOutlineSearch } from "react-icons/ai";

const Search = () => {
  return (
    <div className="flex items-center bg-white rounded-full w-[170px] h-[35px] mt-5 sm:w-[400px] lg:h-[40px] lg:w-[300px]">
      <AiOutlineSearch className="" size={25} />
      <input
        className="bg-transparent p-1 focus:outline-none"
        type="text"
        placeholder="Search"
      />
    </div>
  );
};

export default Search;
