import Link from "next/link";
import { AiOutlineMenu } from "react-icons/ai";

const Menu = () => {
  return (
    <div className="flex items-center ">
      <ul className="hidden md:flex text-gray-300 gap-6">
        <li className="font-poppins text-base uppercase text-[#E58D27] transition-colors">
          <Link href="/#home">Home</Link>
        </li>
        <li className=" text-base uppercase font-poppins  hover:text-[#E58D27] transition-colors">
          <Link href="/#about">Play</Link>
        </li>
        <li className=" text-base uppercase hover:text-[#E58D27] transition-colors font-poppins ">
          <Link href="/#projects">Xbox</Link>
        </li>
        <li className="text-base uppercase hover:text-[#E58D27] transition-colors font-poppins ">
          <Link href="/#target">Pc</Link>
        </li>
      </ul>

      <div className="md:hidden text-white">
        <AiOutlineMenu size={20} />
      </div>
    </div>
  );
};

export default Menu;
