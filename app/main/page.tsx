import React from "react";
import ProjectList from "../_components/ProjectList/ProjectList";
import mockDataCardList from "../_components/ProjectList/mockDataCardList";
import SelectStack from "./_components/SelectStack/SelectStack";

function MainPage() {
  return (

    <main className="mx-auto mt-[100px] grid w-[1200px] grid-cols-[230px_minmax(976px,_1fr)] grid-rows-[100px_minmax(800px,_1fr)]">
      <SelectStack />
      <ProjectList projectList={mockDataCardList.myProjectList.data} />
    </main>
  );
}

export default MainPage;
