import { useEffect, RefObject } from "react";

const useHandleModalClick = (modalRef: RefObject<HTMLDivElement>, handleModalClose: () => void) => {
  useEffect(() => {
    // ESC keydown => Modal Close
    const handleKeyDownEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        handleModalClose();
      }
    };

    document.addEventListener("keydown", handleKeyDownEsc);

    return () => {
      document.removeEventListener("keydown", handleKeyDownEsc);
    };
  }, [modalRef, handleModalClose]);
};

export default useHandleModalClick;
