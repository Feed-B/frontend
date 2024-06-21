import React from "react";
import AddProjectContainer from "./AddProject/AddProjectContainer";

function page() {
  return (
    <main className="mx-auto grid w-[1200px]">
      <h1 className="mb-4 mt-16 w-full text-start text-[28px] font-bold text-gray-900">프로젝트 업로드</h1>
      <hr />
      <AddProjectContainer />
    </main>
  );
}

export default page;
