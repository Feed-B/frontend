import React from "react";
import Image from "next/image";
import shareIcon from "@/public/icons/share.svg";
import Button from "@/app/_components/Button/Button";
import CommentProfile from "../../_components/Comment/CommentProfile";
import CommentCount from "../../_components/Comment/CommentCount";
import RatingBox from "./_components/RatingBox";
import CommentDropbox from "./_components/CommentDropbox";
import ReflyCommentItem from "./_components/ReflyCommentItem";

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
        <p className="mt-4 min-h-[150px] w-full text-sm font-normal text-gray-900">
          제가말이죠 오늘 댓글 모달을 만들어 보았습니다. 참 잘했죠? 좋은 코드 리뷰 부탁드립니다? 안 해주면
          찾아가겠습니다.
        </p>
      </section>
      <section className="mt-4">
        <RatingBox />
      </section>
      <section className="mt-12">
        <form className="flex h-32 gap-1 rounded-lg border border-solid border-gray-200 p-3">
          <textarea
            className="h-full w-full resize-none bg-transparent outline-none"
            placeholder="댓글을 입력해주세요"
          />
          <div className="flex flex-col justify-between">
            <p className="text-end text-sm text-gray-500">0/150</p>
            <Button bgColor="mainBlue" buttonSize="small">
              등록
            </Button>
          </div>
        </form>
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
