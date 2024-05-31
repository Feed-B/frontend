import { ReactNode } from "react";
import ReactDOM from "react-dom";

interface ModalPortalProps {
  children: ReactNode;
}

const ModalPortal = ({ children }: ModalPortalProps) => {
  if (typeof window !== "undefined") {
    const el = document.getElementById("modal");

    if (el) {
      return ReactDOM.createPortal(children, el);
    }
  }
  return null;
};

export default ModalPortal;
