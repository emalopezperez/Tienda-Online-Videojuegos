import Link from "next/link";
import { RiShoppingCartLine, RiHeart2Line } from "react-icons/ri";
import user from "/public/img/user.jpg";
import Image from "next/image";

const MenuUsuario = () => {
  return (
    <div className="flex items-center">
      <div>
        <ul className="flex gap-5 text-gray-300">
          <button className="  uppercase font-poppins  hover:text-[#E58D27] transition-colors text-xl">
            <Link href="/#about">
              <RiShoppingCartLine />
            </Link>
          </button>
          <button className=" font-poppins uppercase hover:text-[#E58D27] transition-colors text-xl">
            <Link href="/#home">
              <RiHeart2Line />
            </Link>
          </button>
          <button className=" font-poppins uppercase hover:text-[#E58D27] transition-colors">
            <Image
              className="w-6 h-6 object-cover rounded-full ring-2 ring-[#E58D27]"
              src={user}
            />
          </button>
        </ul>
      </div>
    </div>
  );
};

export default MenuUsuario;
