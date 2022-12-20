import { useState } from "react";
import Link from "next/link";
import { RiCloseLine, RiMenu2Line } from "react-icons/ri";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";

const Menu = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="flex items-center ">
      <button
        onClick={() => setShowMenu(!showMenu)}
        className="lg:hidden text-3xl text-white"
      >
        <RiMenu2Line size={20} />
      </button>
      <div
        className={`fixed left-0 bg-[#181A20] w-full h-full z-50 transition-all ${
          showMenu ? "top-0" : "-top-full"
        }`}
      >
        <button
          onClick={() => setShowMenu(!showMenu)}
          className=" text-3xl p-4 md:hidden text-white"
        >
          <RiCloseLine size={25} />
        </button>
        <ul className="flex flex-col text-gray-300 gap-4 p-4 items-center mt-8 ">
          <li className="font-poppins text-xl uppercase text-[#E58D27] transition-colors">
            <Link href="/#home">Home</Link>
          </li>
          <li className=" text-xl uppercase font-poppins ">
            <Link href="/#about">Play</Link>
          </li>
          <li className=" text-xl uppercase font-poppins ">
            <Link href="/#projects">Xbox</Link>
          </li>
          <li className="text-xl uppercase font-poppins ">
            <Link href="/#target">Pc</Link>
          </li>
        </ul>

        <div className="flex justify-center mt-40">
          <p className=" uppercase tracking-widest text-gradient text-white ">
            Conectemos
          </p>
        </div>
        <div className="flex justify-center items-center mt-30 gap-4 py-6 my-4 w-full sm:w-[80%]">
          <a href="" target="_blank" rel="noreferrer">
            <div className="boton bg-white rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
              <FaLinkedinIn />
            </div>
          </a>
          <a href="" target="_blank" rel="noreferrer">
            <div className="boton bg-white rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
              <FaGithub />
            </div>
          </a>
          <Link href="/">
            <div className="boton bg-white rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
              <AiOutlineMail />
            </div>
          </Link>

          <Link href="/">
            <div className="boton bg-white rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
              <BsFillPersonLinesFill />
            </div>
          </Link>
        </div>
      </div>

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
    </div>
  );
};

export default Menu;
