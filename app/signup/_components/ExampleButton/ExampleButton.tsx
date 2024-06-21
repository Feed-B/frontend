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

      <Button buttonSize="normal" bgColor="yellow" onClick={exampleModalOpen}>
        로그인
      </Button>
    </>
  );
}

export default ExampleButton;
