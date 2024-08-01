import { Suspense } from "react";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { useEffect } from "react";
import { setToken as setLocalStorageToken } from "@/app/_utils/handleToken";
import LoadingWrapper from "@/app/_components/LoadingWrapper/LoadingWrapper";
import { useLogin } from "@/app/_context/LoginProvider";

export default function Success() {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <Suspense fallback={<LoadingWrapper />}>
      <SuccessContent router={router} pathname={pathname} />
    </Suspense>
  );
}

function SuccessContent({ router, pathname }: any) {
  const searchParams = useSearchParams();
  const { url, setEmail, setType, setToken } = useLogin();

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

    // 토큰이 있으면 로컬스토리지에 저장
    if (tokenQuery) {
      const accessToken = tokenQuery;
      // 토큰을 전역으로 관리
      setToken(accessToken);
      setLocalStorageToken(accessToken);
      const timestamp = Date.now();
      localStorage.setItem("tokenTimestamp", timestamp.toString());
    }

    if (typeQuery === "signUp" || typeQuery === "login") {
      router.push(url);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router, searchParams, setEmail, setType, pathname]);

  return <></>;
}
