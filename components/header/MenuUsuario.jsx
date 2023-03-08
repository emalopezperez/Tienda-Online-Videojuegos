import { useState } from "react";
import BasicModal from "../modals/basicModal";
import { RiUserShared2Line } from "react-icons/ri";
import { FcBusinessman } from "react-icons/fc";
import Auth from "../auth/Auth";


const MenuUsuario = () => {
  const [sowModal, setSowModal] = useState(false);
  const [auth, setAuth]= useState(false)
  const [logout, setLogout]= useState(false)

  const openModal = () => {
    setSowModal(true);
  };

  return (
    <>
      <button
        onClick={openModal}
        className="flex items-center gap-2 mx-3 text-white md:mx-14 "
      >
        {auth ? (
          <FcBusinessman className="mt-1" size={15} />
        ) : (
          <RiUserShared2Line className="mt-1" size={15} />
        )}
        Mi Cuenta
      </button>

      {auth ? (
        <button
          onClick={logout}
          className="flex items-center gap-2 mx-3 text-white md:mx-14 "
        >
          x
        </button>
      ) : (
        ""
      )}
      <BasicModal sowModal={sowModal} setSowModal={setSowModal}>
        <Auth setSowModal={setSowModal} />
      </BasicModal>
    </>
  );
};

export default MenuUsuario;
