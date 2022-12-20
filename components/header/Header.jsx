import Menu from "./Menu";
import MenuUsuario from "./MenuUsuario";
import Search from "./Search";


const Header = () => {
  return(
    <div className="flex justify-between p-4 px-10 z-40 h-[10vh] bg-[#181A20] ">
      <Menu/>
      <Search/>
      <MenuUsuario/>
    </div>
  )
};

export default Header;
