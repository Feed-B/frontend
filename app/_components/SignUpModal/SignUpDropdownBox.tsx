import Image from "next/image";
import { useRef } from "react";
import JOB_CATEGORIES from "@/app/_constants/JobCategoryData";
import useOutsideClick from "@/app/_hooks/useOutsideClick";
import smallTopArrowIcon from "@/public/icons/smallTopArrow.svg";
import smallArrowIcon from "@/public/icons/smallArrow.svg";
import DropDownList from "@/app/addproject/_components/DropDown/DropDownList";
import DropDown from "../DropDown/DropDown";

interface SignUpDropdownBox {
  dataType: string;
  item: string;
  isOpen: boolean;
  toggleState: () => void;
  handleItemClick: (value: string) => void;
}

function SignUpDropdownBox({ dataType, item, isOpen, toggleState, handleItemClick }: SignUpDropdownBox) {
  const itemRef = useRef<HTMLDivElement>(null);
  const exceptionRef = useRef<HTMLDivElement>(null);

  const dataMap: Record<string, Record<string, string>> = {
    job: JOB_CATEGORIES,
  };

  const data = dataMap[dataType];

  useOutsideClick(itemRef, toggleState, exceptionRef);

  return (
    <div className="relative">
      <label htmlFor="introduction" className="mb-2 text-base font-bold text-gray-900">
        직무
      </label>

      <div
        className={
          "mt-2 flex h-11 w-96 items-center justify-between gap-2 rounded-lg border border-solid border-gray-200 p-2 text-sm font-normal text-gray-900"
        }>
        {item}

        <div className="h-5 w-5 cursor-pointer" onClick={toggleState} ref={exceptionRef}>
          {isOpen ? (
            <Image src={smallTopArrowIcon} alt="드롭다운 열기" width={20} height={20} priority />
          ) : (
            <Image src={smallArrowIcon} alt="드롭다운 닫기" width={20} height={20} priority />
          )}
        </div>
      </div>

      {isOpen && (
        <DropDown className="absolute w-96">
          <DropDownList data={data} handleItemClick={handleItemClick} />
        </DropDown>
      )}
    </div>
  );
}

export default SignUpDropdownBox;
