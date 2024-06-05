import { ReactNode } from "react";
import ReactDOM from "react-dom";

interface ModalPortalProps {
  children: ReactNode;
}

const ModalPortal = ({ children }: ModalPortalProps) => {
  if (typeof window !== "undefined") {
    const modalContainer = document.getElementById("modal");

    if (modalContainer) {
      return ReactDOM.createPortal(children, modalContainer);
    }
  }
  return null;
};

export default ModalPortal;
