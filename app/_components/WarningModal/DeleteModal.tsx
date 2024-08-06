import React from "react";
import Image from "next/image";
import feedbeeIcon from "@/public/beeIcons/redBee.svg";
import warningIcon from "@/public/icons/warning.svg";
import ModalPortal from "@/app/_utils/ModalPortal";
import Button from "@/app/_components/Button/Button";

interface DeleteModalProps {
  handleDeleteClick: () => void;
  closeModal: () => void;
}

function DeleteModal({ handleDeleteClick, closeModal }: DeleteModalProps) {
  const handleCancelClick = () => {
    closeModal();
  };

  return (
    <ModalPortal>
      <div className="fixed inset-0 z-50 flex items-center justify-center">
        <div className="absolute left-1/2 top-1/2 z-20 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-3 rounded-xl border border-solid border-gray-200 bg-white px-8 py-4 shadow-lg">
          <div className="flex gap-1">
            <Image src={feedbeeIcon} alt="피드비" width={78} />
            <Image src={warningIcon} alt="경고" width={40} height={40} />
          </div>
          <div className="text-center">
            <p className="text-xl font-semibold">정말 이 프로젝트를 삭제하시겠습니까?</p>
            <p className="text-base text-gray-600">페이지를 삭제할 경우, 되돌릴 수 없습니다.</p>
          </div>
          <div className="flex gap-2">
            <Button className="w-20" buttonSize="normal" bgColor="yellow" onClick={handleDeleteClick}>
              삭제
            </Button>
            <Button className="w-20" buttonSize="normal" bgColor="gray" onClick={handleCancelClick}>
              취소
            </Button>
          </div>
        </div>
        <div className="absolute left-0 top-0 z-10 h-full w-full" />
      </div>
    </ModalPortal>
  );
}

export default DeleteModal;
