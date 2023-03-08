import { useState } from "react";
import BasicModal from "../modals/basicModal";
import { RiUserShared2Line } from "react-icons/ri";
import { FcBusinessman } from "react-icons/fc";
import Auth from "../auth/Auth";
import useAuth from "../../hooks/useAuth";

const MenuUsuario = () => {
  const [sowModal, setSowModal] = useState(false);
  const { logout, auth } = useAuth();

  const openModal = () => {
    setSowModal(true);
  };

  return (
    <>
      <button
        onClick={openModal}
        className="flex items-center text-white gap-2 mx-3 md:mx-14  "
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
          className="flex items-center text-white gap-2 mx-3 md:mx-14  "
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
