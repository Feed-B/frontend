import React from "react";
import CommentProfile from "../_components/CommentProfile/CommentProfile";
import CommentCount from "../_components/CommentCount/CommentCount";
import TotalStar from "../_components/TotalStar/TotalStar";
import Pagination from "../_components/Pagination/Pagination";

function CommentListSection() {
  return (
    <section className="mt-10">
      <h3 className="mb-4 text-lg font-bold">댓글</h3>
      {/* cardList */}
      <div className="grid grid-cols-4 gap-x-6 gap-y-3">
        <div className="flex flex-col gap-4 rounded-xl bg-[#F8FAFB] p-4">
          <div className="flex justify-between">
            <CommentProfile />
            <CommentCount />
          </div>
          <p className="text-sm text-[#1C1C1C]">새벽에 혼자 있어서 넘 심심합니도. 새벽반 함께 하실 분 구합니도.(1/5)</p>
          <TotalStar />
        </div>

        <div className="flex flex-col gap-4 rounded-xl bg-[#F8FAFB] p-4">
          <div className="flex justify-between">
            <CommentProfile />
            <CommentCount />
          </div>
          <p className="text-sm text-[#1C1C1C]">새벽에 혼자 있어서 넘 심심합니도. 새벽반 함께 하실 분 구합니도.(1/5)</p>
          <TotalStar />
        </div>

        <div className="flex flex-col gap-4 rounded-xl bg-[#F8FAFB] p-4">
          <div className="flex justify-between">
            <CommentProfile />
            <CommentCount />
          </div>
          <p className="text-sm text-[#1C1C1C]">새벽에 혼자 있어서 넘 심심합니도. 새벽반 함께 하실 분 구합니도.(1/5)</p>
          <TotalStar />
        </div>

        <div className="flex flex-col gap-4 rounded-xl bg-[#F8FAFB] p-4">
          <div className="flex justify-between">
            <CommentProfile />
            <CommentCount />
          </div>
          <p className="text-sm text-[#1C1C1C]">새벽에 혼자 있어서 넘 심심합니도. 새벽반 함께 하실 분 구합니도.(1/5)</p>
          <TotalStar />
        </div>

        <div className="flex flex-col gap-4 rounded-xl bg-[#F8FAFB] p-4">
          <div className="flex justify-between">
            <CommentProfile />
            <CommentCount />
          </div>
          <p className="text-sm text-[#1C1C1C]">새벽에 혼자 있어서 넘 심심합니도. 새벽반 함께 하실 분 구합니도.(1/5)</p>
          <TotalStar />
        </div>

        <div className="flex flex-col gap-4 rounded-xl bg-[#F8FAFB] p-4">
          <div className="flex justify-between">
            <CommentProfile />
            <CommentCount />
          </div>
          <p className="text-sm text-[#1C1C1C]">새벽에 혼자 있어서 넘 심심합니도. 새벽반 함께 하실 분 구합니도.(1/5)</p>
          <TotalStar />
        </div>

        <div className="flex flex-col gap-4 rounded-xl bg-[#F8FAFB] p-4">
          <div className="flex justify-between">
            <CommentProfile />
            <CommentCount />
          </div>
          <p className="text-sm text-[#1C1C1C]">새벽에 혼자 있어서 넘 심심합니도. 새벽반 함께 하실 분 구합니도.(1/5)</p>
          <TotalStar />
        </div>

        <div className="flex flex-col gap-4 rounded-xl bg-[#F8FAFB] p-4">
          <div className="flex justify-between">
            <CommentProfile />
            <CommentCount />
          </div>
          <p className="text-sm text-[#1C1C1C]">새벽에 혼자 있어서 넘 심심합니도. 새벽반 함께 하실 분 구합니도.(1/5)</p>
          <TotalStar />
        </div>
      </div>
      <Pagination />
    </section>
  );
}

export default CommentListSection;
