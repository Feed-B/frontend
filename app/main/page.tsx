import React from "react";
import SelectStack from "./_components/SelectStack/SelectStack";

function MainPage() {
  return (
    <main className="mx-auto mt-[100px] grid w-[1200px] grid-cols-[230px_minmax(960px,_1fr)] grid-rows-[100px_minmax(800px,_1fr)]">
      <SelectStack />
      <section className="col-start-2 mt-8">프로젝트 리스트</section>
    </main>
  );
}

export default MainPage;
