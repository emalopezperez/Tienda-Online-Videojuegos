import { useState } from "react";
import BasicModal from "../modals/basicModal";
import { RiUserShared2Line } from "react-icons/ri";
import Auth from "../auth/Auth";

const MenuUsuario = () => {
  const [sowModal, setSowModal] = useState(false);

  const openModal = () => {
    setSowModal(true);
  };

  return (
    <>
      <button onClick={openModal} className="flex items-center text-white gap-2 mx-3 md:mx-14  ">
        <RiUserShared2Line className="mt-1" size={15} />
        Mi Cuenta
      </button>
      <BasicModal sowModal={sowModal} setSowModal={setSowModal}>
        <Auth setSowModal={setSowModal}/>
      </BasicModal>
    </>
  );
};

export default MenuUsuario;
