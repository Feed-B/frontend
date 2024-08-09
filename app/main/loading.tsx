import React from "react";

function Loading() {
  const repeatArray = Array.from({ length: 12 });

  return (
    <div className="my-16 flex animate-pulse justify-center gap-11">
      <div className="w-[230px] rounded-lg bg-gray-400" />
      <div className="flex w-[980px] flex-col gap-3 ">
        <div className="h-10 w-[980px] rounded-lg bg-gray-400" />
        <div className="h-10 w-[980px] rounded-lg bg-gray-400" />
        <div className="flex flex-wrap gap-5">
          {repeatArray.map((_, index) => (
            <div key={index} className="mt-4 flex flex-col gap-2">
              <div className="h-[230px] w-[230px] rounded-lg bg-gray-400" />
              <div className="h-5 w-20 rounded-lg bg-gray-400" />
              <div className="h-5 w-40 rounded-lg bg-gray-400" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Loading;
