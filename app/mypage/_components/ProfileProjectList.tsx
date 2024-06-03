import mockDataCardList from "@/app/_components/ProjectList/mockDataCardList";
import ProjectList from "@/app/_components/ProjectList/ProjectList";
import ProjectListCategory from "./ProjectListCategory";
import ProjectCategoryButton from "./ProjectCategoryButton";

function ProfileProjectList() {
  return (
    <div className="mt-10 flex flex-col gap-8">
      <ProjectListCategory>
        <ProjectCategoryButton isSelect={true}>
          내 프로젝트 {`(${mockDataCardList.myProjectList.count})`}
        </ProjectCategoryButton>
        <ProjectCategoryButton isSelect={false}>
          찜 {`(${mockDataCardList.favoriteProjectList.count})`}
        </ProjectCategoryButton>
      </ProjectListCategory>
      <ProjectList projectList={mockDataCardList.myProjectList.data} gridCount={4} />
    </div>
  );
}

export default ProfileProjectList;
