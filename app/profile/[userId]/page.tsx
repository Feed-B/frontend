"use client";
import Providers from "@/app/_queryFactory/providers";
import MyPageContent from "./_components/MyPageContent";

function MyPage() {
  return (
    <Providers>
      <MyPageContent />
    </Providers>
  );
}

export default MyPage;
