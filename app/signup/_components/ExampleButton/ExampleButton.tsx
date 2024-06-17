import useModal from "@/app/_hooks/useModal";
// import LoginModal from "@/app/_components/LoginModal/LoginModal";
import SignUpModal from "@/app/_components/SignUpModal/SignUpModal";
import Button from "../../../_components/Button/Button";

function ExampleButton() {
  const {
    openModal: exampleModal,
    handleModalClose: exampleModalClose,
    handleModalOpen: exampleModalOpen,
  } = useModal();

  return (
    <>
      <SignUpModal openModal={exampleModal} handleModalClose={exampleModalClose} dataType="job" />
      {/* <LoginModal openModal={exampleModal} handleModalClose={exampleModalClose} /> */}

      <Button className="mb-[20px]" buttonSize="small" bgColor="mainBlue" onClick={exampleModalOpen}>
        모달버튼
      </Button>
    </>
  );
}

export default ExampleButton;
