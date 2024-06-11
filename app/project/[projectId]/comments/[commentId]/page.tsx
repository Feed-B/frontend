import React from "react";
import Image from "next/image";
import shareIcon from "@/public/icons/share.svg";
import CommentProfile from "../../_components/Comment/CommentProfile";
import CommentCount from "../../_components/Comment/CommentCount";
import RatingBox from "./_components/RatingBox";
import CommentDropbox from "./_components/CommentDropbox";
import ReflyCommentItem from "./_components/ReflyCommentItem";
import CommentInput from "./_components/CommentInput";

function CommentPage() {
  return (
    <div className=" mx-auto w-[1200px]">
      <section className="mt-10 w-full p-4">
        <div className="flex items-center justify-between">
          <CommentProfile />
          <div className="relative flex items-center gap-2">
            <CommentCount />
            <Image className="cursor-pointer" src={shareIcon} alt="공유하기." width={24} />
            <CommentDropbox />
          </div>
        </div>
        <p className="mt-4 min-h-[230px] w-full text-sm font-normal text-gray-900">
          제가말이죠 오늘 댓글 모달을 만들어 보았습니다. 참 잘했죠? 좋은 코드 리뷰 부탁드립니다? 안 해주면
          찾아가겠습니다.
        </p>
      </section>
      <section className="mt-4">
        <RatingBox />
      </section>
      <section className="mt-12">
        <CommentInput />
      </section>
      <section className="mb-12 mt-4">
        <ReflyCommentItem />
        <ReflyCommentItem />
        <ReflyCommentItem />
        <ReflyCommentItem />
        <ReflyCommentItem />
        <ReflyCommentItem />
      </section>
    </div>
  );
}

export default CommentPage;
