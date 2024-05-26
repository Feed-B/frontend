import Card from "./Card";
import EmptyCard from "./EmptyCard";
import mockDataCardList from "./mockDataCardList";

const projectList = mockDataCardList.myProjectList.data;

function CardList() {
  return (
    <div className="mt-10 flex flex-col gap-8">
      <div className="flex gap-5 text-lg font-bold">
        <button type="button" id="myProject" className="text-black">
          내 프로젝트{`(${mockDataCardList.myProjectList.count})`}
        </button>
        <button type="button" id="favoriteProject" className="text-[#d9d9d9]">
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
          <EmptyCard />
        )}
      </div>
    </div>
  );
}

export default CardList;
