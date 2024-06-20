import MyPageProvider from "./MyPageProvider";
import MyPageContent from "./MyPageContent";

function MyPage() {
  return (
    <MyPageProvider>
      <MyPageContent />
    </MyPageProvider>
  );
}

export default MyPage;
