import React from "react";
import Image from "next/image";
import closeIcon from "@/public/icons/crossLine.svg";
import shareIcon from "@/public/icons/share.svg";
import TotalStar from "../TotalStar/TotalStar";
import CommentCount from "../CommentCount/CommentCount";
import Pagination from "../Pagination/Pagination";
import CommentProfile from "../CommentProfile/CommentProfile";
import ReflyCommentItem from "./ReflyCommentItem";

function CommentModal() {
  return (
    //여기에 공통 모달 컴포넌트가 들어갈 예정
    <div className="relative border border-solid p-6">
      <button className="absolute right-6 top-6">
        <Image src={closeIcon} alt="모달 닫기 버튼입니다." width={24} />
      </button>
      <section className="mt-10 w-full p-4">
        <div className="flex items-center justify-between">
          <CommentProfile />
          <div className="flex items-center gap-2">
            <CommentCount />
            <Image className="cursor-pointer" src={shareIcon} alt="공유하기." width={24} />
          </div>
        </div>
        <p className="mt-4 min-h-[150px] w-full text-sm font-normal text-[#1C1C1C]">
          제가말이죠 오늘 댓글 모달을 만들어 보았습니다. 참 잘했죠? 좋은 코드 리뷰 부탁드립니다? 안 해주면
          찾아가겠습니다.
        </p>
      </section>
      <hr className="border-[#1C1C1C]" />
      <section className="mt-4 px-8">
        <TotalStar />
        {/*여기엔 소현띠가 만든 별점 리스트가 들어갈 예정*/}
        <div className="h-[55px] border border-solid">자세한 별점이 들어갈 자리</div>
      </section>
      <section className="mt-4">
        {/*여기엔 소현띠가 만든 인풋이 들어갈 예정*/}
        <div className="border border-solid p-3">
          <input placeholder="코멘트 인풋 들어올 자리" />
        </div>
        <div>
          <ReflyCommentItem />
        </div>
        <Pagination />
      </section>
    </div>
  );
}
export default CommentModal;
