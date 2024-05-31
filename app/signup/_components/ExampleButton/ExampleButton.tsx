import useModal from "@/app/_hooks/useModal";
import ModalPortal from "@/app/_utils/ModalPortal";
import ExampleModal from "../ExampleModal/ExampleModal";
function ExampleButton() {
  const {
    openModal: exampleModal,
    handleModalClose: exampleModalClose,
    handleModalOpen: exampleModalOpen,
  } = useModal();

  return (
    <>
      <ModalPortal>
        <ExampleModal openModal={exampleModal} handleModalClose={exampleModalClose} />
      </ModalPortal>

      <button
        className="mb-[20px] w-[118px] rounded-lg bg-[#0066DA] px-[29px] py-3 text-white"
        onClick={exampleModalOpen}>
        모달버튼
      </button>
    </>
  );
}

export default ExampleButton;
