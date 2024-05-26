import Card from "./Card";
import mockDataCardList from "./mockDataCardList";

const projectList = mockDataCardList.myProjectList.data;
const selectOption = "myProject";

function CardList() {
  return (
    <div className="mt-10 flex flex-col gap-8">
      <div className="flex gap-5 text-lg font-bold">
        <button
          type="button"
          id="myProject"
          className={`${selectOption === "myProject" ? "text-black" : "text-[#545454]"}`}>
          내 프로젝트{`(${mockDataCardList.myProjectList.count})`}
        </button>
        <button
          type="button"
          id="favoriteProject"
          className={`${selectOption === "favoriteProject" ? "text-black" : "text-[#d9d9d9]"}`}>
          찜{`(${mockDataCardList.favoriteProjectList.count})`}
        </button>
      </div>

      <div className="relative grid grid-cols-4 gap-10 ">
        {projectList.length !== 0 ? (
          projectList.map(project => {
            return (
              <Card
                key={project.id}
                projectTitle={project.projectName}
                subDescription={project.supDescription}
                titleImage={project.titleImage!}
              />
            );
          })
        ) : (
          <h1 className="absolute bottom-0 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            프로젝트 목록이 없어잉~
          </h1>
        )}
      </div>
    </div>
  );
}

export default CardList;
