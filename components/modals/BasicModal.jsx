import { RiCloseLine } from "react-icons/ri";

const BasicModal = ({ sowModal, setSowModal, children }) => {
  const click = () => {
    setSowModal(false);
  };
  return (
    <>
      {sowModal ? (
        <div className="flex justify-center items-center  bg-black/80 fixed w-full h-full transition-all ">
          <div className=" bg-white/90 h-[550px] w-[350px] md:h-[600px] md:w-[400px] rounded-xl">
            <div className="flex justify-end">
              <button onClick={click} className="text-black m-5 text-xl">
                <RiCloseLine size={20} />
              </button>
            </div>
            <div className="flex justify-center items-center">
              {children}
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default BasicModal;
