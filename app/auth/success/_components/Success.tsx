import { Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { useEffect } from "react";
import { useKakaoStore } from "@/app/_utils/zustandStore";

export default function Success() {
  const router = useRouter();

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SuccessContent router={router} />
    </Suspense>
  );
}

function SuccessContent({ router }: any) {
  const searchParams = useSearchParams();
  const setEmail = useKakaoStore(state => state.setEmail);
  const setType = useKakaoStore(state => state.setType);

  useEffect(() => {
    const typeQuery = searchParams.get("type");
    const emailQuery = searchParams.get("email");
    const tokenQuery = searchParams.get("token");

    // email과 type이 있으면 전역상태에 저장
    if (emailQuery) {
      setEmail(emailQuery);
    }
    if (typeQuery) {
      setType(typeQuery);
    }

    console.log(typeQuery);

    // 토큰이 있으면 로컬스토리지에 저장
    if (tokenQuery) {
      const accessToken = tokenQuery;
      localStorage.setItem("accessToken", accessToken);
    }

    if (typeQuery === "signUp" || typeQuery === "login") {
      router.push("/main");
    }
  }, [router, searchParams, setEmail, setType]);

  return <></>;
}
