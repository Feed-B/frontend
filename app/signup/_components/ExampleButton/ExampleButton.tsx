import useModal from "@/app/_hooks/useModal";
import ExampleModal from "../ExampleModal/ExampleModal";
import Button from "../../../_components/Button/Button";

function ExampleButton() {
  const {
    openModal: exampleModal,
    handleModalClose: exampleModalClose,
    handleModalOpen: exampleModalOpen,
  } = useModal();

  return (
    <>
      <ExampleModal openModal={exampleModal} handleModalClose={exampleModalClose} />

      <Button className="mb-[20px]" buttonSize="small" bgColor="mainBlue" onClick={exampleModalOpen}>
        모달버튼
      </Button>
    </>
  );
}

export default ExampleButton;
