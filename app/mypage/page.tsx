import ProjectList from "../_components/ProjectList/ProjectList";
import mockDataCardList from "../_components/ProjectList/mockDataCardList";
import Profile from "./_components/Profile";
import MyPageCategory from "./_components/MyPageCategory";

function MyPage() {
  return (
    <main className="mb-20 ml-[50%] mt-10 flex w-[1200px] -translate-x-1/2 gap-11 gap-y-16">
      <div className="w-[180px]">
        <MyPageCategory isSelect={true} />
      </div>
      <div className="flex w-[976px] flex-col gap-8">
        <Profile />
        <ProjectList projectList={mockDataCardList.myProjectList.data} />
      </div>
    </main>
  );
}

export default MyPage;
