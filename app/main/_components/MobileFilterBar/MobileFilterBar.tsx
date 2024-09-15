import React from "react";
import useModal from "@/app/_hooks/useModal";
import useToggleHook from "@/app/_hooks/useToggleHook";
import StackModal from "../StackModal/StackModal";
import StackBar from "../StackBar/StackBar";
import MobileSearchBar from "../MobileSearchBar/MobileSearchBar";

function MobileFilterBar() {
  const { openModal, handleModalClose, handleModalOpen } = useModal();
  const { isOpen, toggleState } = useToggleHook();

  return (
    <>
      {/* 테블릿, 모바일*/}
      {openModal && <StackModal handleModalClose={handleModalClose} />}
      <div className="flex w-full justify-center gap-3">
        <StackBar handleModalOpen={handleModalOpen} isToggle={isOpen} toggleAction={toggleState} />
        <MobileSearchBar isToggle={isOpen} toggleAction={toggleState} />
      </div>
    </>
  );
}

export default MobileFilterBar;
