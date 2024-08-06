import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import feedbeeIcon from "@/public/beeIcons/redBee.svg";
import warningIcon from "@/public/icons/warning.svg";
import ModalPortal from "@/app/_utils/ModalPortal";
import Button from "@/app/_components/Button/Button";

interface WarningModalProps {
  mode?: "delete" | "cancel";
  handleDeleteClick?: () => void;
  closeModal: () => void;
}

function WarningModal({ mode = "cancel", handleDeleteClick, closeModal }: WarningModalProps) {
  const router = useRouter();

  const handleModalClose = () => {
    closeModal();
  };

  const handleLeaveClick = () => {
    closeModal();
    router.back();
  };

  const warningMode = {
    delete: {
      title: "정말 이 프로젝트를 삭제하시겠습니까?",
      subtitle: "페이지를 삭제할 경우, 되돌릴 수 없습니다.",
      yellow: { onClick: handleDeleteClick, text: "삭제" },
      gray: { onClick: handleModalClose, text: "취소" },
    },
    cancel: {
      title: "작성중인 내용이 있습니다. 나가시겠습니까?",
      subtitle: "페이지를 벗어날 경우, 지금까지 작성한 내용이 사라집니다.",
      yellow: { onClick: handleModalClose, text: "머무르기" },
      gray: { onClick: handleLeaveClick, text: "나가기" },
    },
  };

  const { title, subtitle, yellow, gray } = warningMode[mode === "delete" ? "delete" : "cancel"];

  return (
    <ModalPortal>
      <div className="fixed inset-0 z-50 flex items-center justify-center">
        <div className="absolute left-1/2 top-1/2 z-20 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-3 rounded-xl border border-solid border-gray-200 bg-white px-8 py-4 shadow-lg">
          <div className="flex gap-1">
            <Image src={feedbeeIcon} alt="피드비" width={78} />
            <Image src={warningIcon} alt="경고" width={40} height={40} />
          </div>
          <div className="text-center">
            <p className="text-xl font-semibold">{title}</p>
            <p className="text-base text-gray-600">{subtitle}</p>
          </div>
          <div className="flex gap-2">
            <Button className="w-20" buttonSize="normal" bgColor="yellow" onClick={yellow.onClick}>
              {yellow.text}
            </Button>
            <Button className="w-20" buttonSize="normal" bgColor="gray" onClick={gray.onClick}>
              {gray.text}
            </Button>
          </div>
        </div>
        <div className="absolute left-0 top-0 z-10 h-full w-full" />
      </div>
    </ModalPortal>
  );
}

export default WarningModal;
