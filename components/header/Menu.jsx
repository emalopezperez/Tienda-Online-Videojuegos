import Link from "next/link";
import {  AiOutlineMenu } from "react-icons/ai";

const Menu = () => {
  return (
    <div className="flex justify-between items-center px-2 ">
      <div>
        <ul className="hidden md:flex text-gray-300">
          <li className="ml-10 font-poppins  text-sm uppercase text-[#E58D27] transition-colors">
            <Link href="/#home">Home</Link>
          </li>
          <li className="ml-10 text-sm uppercase font-poppins  hover:text-[#E58D27] transition-colors">
            <Link href="/#about">Play</Link>
          </li>
          <li className="ml-10 text-sm uppercase hover:text-[#E58D27] transition-colors font-poppins ">
            <Link href="/#projects">Xbox</Link>
          </li>
          <li className="ml-10 text-sm uppercase hover:text-[#E58D27] transition-colors font-poppins ">
            <Link href="/#target">Pc</Link>
          </li>
        </ul>
      </div>
      <div className="md:hidden text-white">
        <AiOutlineMenu size={20}/>
      </div>
    </div>
  );
};

export default Menu;
