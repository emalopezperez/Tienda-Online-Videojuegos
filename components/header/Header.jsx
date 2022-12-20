import Menu from "./Menu";
import MenuUsuario from "./MenuUsuario";
import Search from "./Search";


const Header = () => {
  return(
    <div className="flex justify-between p-4 z-40  bg-[#181A20]">
      <Menu/>
      <Search/>
      <MenuUsuario/>
    </div>
  )
};

export default Header;
