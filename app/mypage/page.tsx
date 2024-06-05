import Profile from "./_components/Profile";
import ProfileProjectList from "./_components/ProfileProjectList";

function MyPage() {
  return (
    <main className="mb-20 ml-[50%] mt-10 flex w-[90rem] max-w-[976px] -translate-x-1/2 flex-col gap-y-16">
      <Profile />
      <ProfileProjectList />
    </main>
  );
}

export default MyPage;
