import Modal from "@/app/_components/Modal/Modal";

interface ExampleModalProps {
  openModal: boolean;
  handleModalClose: () => void;
}

function ExampleModal({ openModal, handleModalClose }: ExampleModalProps) {
  if (!openModal) {
    return null;
  }

  return (
    <Modal openModal={openModal} handleModalClose={handleModalClose} className="w-[540px]">
      <div className="flex flex-row-reverse">
        <button className="w-[118px] rounded-lg bg-[#0066DA] px-[29px] py-3 text-white" onClick={handleModalClose}>
          닫기
        </button>
      </div>
    </Modal>
  );
}

export default ExampleModal;
