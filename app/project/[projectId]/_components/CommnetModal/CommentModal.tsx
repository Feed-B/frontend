import React, { ReactNode } from "react";
import Image from "next/image";
import Profile from "@/app/_components/Profile/Profile";
import commentIcon from "@/public/icons/comment.svg";
import closeIcon from "@/public/icons/crossLine.svg";
import shareIcon from "@/public/icons/share.svg";
import starIcon from "@/public/icons/star2.svg";

function CommentModal({ children }: { children: ReactNode }) {
  return (
    //여기에 공통 모달 컴포넌트가 들어갈 예정
    <div className="relative border border-solid p-6">
      <button className="absolute right-6 top-6">
        <Image src={closeIcon} alt="모달 닫기 버튼입니다." width={24} />
      </button>
      {children}
    </div>
  );
}
// --- 공통 ---
function HR() {
  return <hr className="border-[#1C1C1C]" />;
}

//---본문 관련 컴포넌트---
function CommentSection({ children }: { children: ReactNode }) {
  return <div className="mt-10 w-full p-4">{children}</div>;
}
function Header({ children }: { children: ReactNode }) {
  return <div className="flex items-center justify-between">{children}</div>;
}
function CommentProfile() {
  return (
    <div className="flex items-center gap-2">
      <Profile />
      <p>김한주</p>
    </div>
  );
}
function CommentCount() {
  return (
    <div className="flex items-center gap-1">
      <Image src={commentIcon} alt="댓글 갯수입니다." width={20} />
      <p className="text-base font-medium text-[#454545]">20</p>
    </div>
  );
}
function IconList({ children }: { children: ReactNode }) {
  return <div className="flex items-center gap-2">{children}</div>;
}
function ShareIcon() {
  return <Image className="cursor-pointer" src={shareIcon} alt="공유하기." width={24} />;
}
function Comment() {
  return (
    <p className="mt-4 min-h-[150px] w-full text-sm font-normal text-[#1C1C1C]">
      제가말이죠 오늘 댓글 모달을 만들어 보았습니다. 참 잘했죠? 좋은 코드 리뷰 부탁드립니다? 안 해주면 찾아가겠습니다.
    </p>
  );
}

//---별점 관련 컴포넌트---
function StarSection({ children }: { children: ReactNode }) {
  return <div className="mt-4 px-8">{children}</div>;
}
function TotalStar() {
  return (
    <div className="h-[60px]">
      <p className="mb-1 text-base font-semibold text-[#1C1C1C]">총점</p>
      <div className="flex items-center gap-2">
        <Image src={starIcon} alt="총별점" width={32} />
        <p className="text-xl font-bold text-black">3.5</p>
      </div>
    </div>
  );
}
function StarDetail() {
  return <div className="h-[55px] border border-solid">자세한 별점이 들어갈 자리</div>;
}

//---대댓글 관련 컴포넌트---
function ReplySection({ children }: { children: ReactNode }) {
  return <div className="mt-4">{children}</div>;
}
function ReplyInput() {
  return (
    <div className="border border-solid p-3">
      <input placeholder="코멘트 인풋 들어올 자리" />
    </div>
  );
}
function ReplyComment() {
  return (
    <div className="mt-1 flex gap-1 p-2">
      <Profile />
      <div>
        <p className="text-sm font-normal text-[#1C1C1C]">김한주</p>
        <p className="text-sm font-normal text-[#454545]">모달 만들어버리기</p>
      </div>
    </div>
  );
}
function Pagination() {
  return (
    <div className="mt-8 flex justify-center gap-5 p-2">
      <p>1</p>
      <p>2</p>
      <p>3</p>
      <p>4</p>
      <p>5</p>
    </div>
  );
}

//본문
CommentModal.CommentSection = CommentSection;
CommentModal.Header = Header;
CommentModal.Profile = CommentProfile;
CommentModal.CommentCount = CommentCount;
CommentModal.IconList = IconList;
CommentModal.ShareIcon = ShareIcon;
CommentModal.Comment = Comment;
//별점
CommentModal.StarSection = StarSection;
CommentModal.TotalStar = TotalStar;
CommentModal.StarDetail = StarDetail;
//대댓글
CommentModal.ReplySection = ReplySection;
CommentModal.ReplyInput = ReplyInput;
CommentModal.ReplyComment = ReplyComment;
CommentModal.Pagination = Pagination;
//공통
CommentModal.HR = HR;

export default CommentModal;
