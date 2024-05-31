import { useEffect, RefObject, BaseSyntheticEvent } from "react";

const useHandleModalClick = (modalRef: RefObject<HTMLDivElement>, handleModalClose: () => void) => {
  useEffect(() => {
    // Outside Click => Modal Close
    const handleClickOutside = (event: BaseSyntheticEvent | MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        handleModalClose();
      }
    };

    // ESC keydown => Modal Close
    const handleKeyDownEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        handleModalClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDownEsc);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDownEsc);
    };
  }, [modalRef, handleModalClose]);
};

export default useHandleModalClick;
