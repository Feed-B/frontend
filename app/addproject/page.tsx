// "use client";

import React from "react";
import DropDown from "./_components/DropDown/DropDown";

function page() {
  // const [selectedSize, setSelectedSize] = useState("웹");

  // const handleRadio = e => {
  //   setSelectedSize(e.target.value);
  // };

  return (
    <main className="grid place-items-center">
      <div className="w-[960px]">
        <h1 className="mb-4 mt-6 text-[28px] font-bold text-[#4D5256]">글 작성</h1>
        <hr />
        <h2 className="mb-4 mt-6 text-base font-bold text-[#4D5256]">제목(프로젝트 이름)</h2>
        <input
          type="text"
          placeholder="프로젝트 이름 입력"
          className="border=[#EBEBEB] h-12 w-full rounded-sm border border-solid px-4 py-3"
        />
        <h2 className="mb-4 mt-6 text-base font-bold text-[#4D5256]">소개</h2>
        <input
          type="text"
          placeholder="소개 입력"
          className="border=[#EBEBEB] h-12 w-full rounded-sm border border-solid px-4 py-3"
        />
        <h2 className="mb-4 mt-6 text-base font-bold text-[#4D5256]">본문</h2>
        <textarea
          className="border=[#EBEBEB] h-52 w-full resize-none rounded-sm border border-solid px-4 py-3"
          placeholder="본문 내용 입력"
        />
        <h2 className="mb-4 mt-6 text-base font-bold text-[#4D5256]">이미지</h2>
        <div className="flex gap-3">
          <label>
            <input
              type="radio"
              name="size"
              value="웹"
              // checked={selectedSize === "웹"}
              // onChange={handleRadio}
            />
            웹
          </label>
          <label>
            <input
              type="radio"
              name="size"
              value="모바일"
              // checked={selectedSize === "모바일"}
              // onChange={handleRadio}
            />
            모바일
          </label>
        </div>
        {/* {selectedSize === "웹" && ( */}
        <div className="mb-4 mt-4">
          <div className="border-black-700 h-64 w-[360px] rounded-xl border-4 border-solid bg-slate-100" />
          <p className="mt-3 text-xs font-medium text-[#C4C4C4]">1440 X 1024 사이즈로 업로드</p>
        </div>
        {/* )} */}
        {/* {selectedSize === "모바일" && ( */}
        <div className="mb-4 mt-4">
          <div className="border-black-700 h-[203px] w-[93.75px] rounded-xl border-4 border-solid bg-slate-100" />
          <p className="mt-3 text-xs font-medium text-[#C4C4C4]">375 X 812 사이즈로 업로드</p>
        </div>
        {/* )} */}
        <button className="rounded-md border border-solid border-[#1852FD] bg-[#1852FD] px-4 py-2 text-white">
          업로드
        </button>
        <h2 className="mb-4 mt-6 text-base font-bold text-[#4D5256]">서비스 링크</h2>
        <input
          type="text"
          placeholder="URL"
          className="h-12 w-[420px] rounded-sm border border-solid border-[#EBEBEB] px-4 py-3"
        />
        <h2 className="mb-4 mt-6 text-base font-bold text-[#4D5256]">추가 링크</h2>
        <div className="relative flex h-12 w-28 items-center gap-2 border border-solid border-[#EBEBEB] p-2">
          <DropDown dataType="tool" />
        </div>
        <input
          type="text"
          placeholder="URL"
          className="border=[#EBEBEB] h-12 w-[420px] rounded-sm border border-solid px-4 py-3"
        />
        <h2 className="mb-4 mt-6 text-base font-bold text-[#4D5256]">팀원</h2>
        <div className="relative flex h-12 w-28 items-center gap-2 border border-solid border-[#EBEBEB] p-2">
          <DropDown dataType="job" />
        </div>
        <input
          type="text"
          placeholder="이름"
          className="border=[#EBEBEB] h-12 w-[420px] rounded-sm border border-solid px-4 py-3"
        />
        <h2 className="mb-4 mt-6 text-base font-bold text-[#4D5256]">기술스택</h2>
        <div className="flex w-[960px] gap-2 rounded-xl border border-solid border-[#EBEBEB] p-3">JavaScript</div>
        <div className="flex justify-end">
          <button className="mt-6 rounded-md border border-solid border-[#1852FD] bg-[#1852FD] px-4 py-2 text-white">
            등록하기
          </button>
        </div>
      </div>
    </main>
  );
}

export default page;
