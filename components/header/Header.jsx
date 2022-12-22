import { useState } from "react";
import Menu from "./Menu";
import MenuUsuarioAuth from "./MenuUsuarioAuth";
import Search from "./Search";
import MenuUsuario from "./MenuUsuario";

const Header = () => {
  const [userAuth, setUserAuth] = useState(false);

  return (
    <div className="flex justify-between h-[10vh] bg-[#181A20] ">
      <Menu />
      <Search />
      {userAuth ? <MenuUsuarioAuth /> : <MenuUsuario />}
    </div>
  );
};

export default Header;
