import Image from "next/image";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import Link from "next/link";
import landingMainSection from "@/public/images/landingMainSection.svg";
import landingProjectSection from "@/public/images/landingProjectSection.svg";
import landingEvaluationSection from "@/public/images/landingEvaluationSection.svg";
import landingDebateSection from "@/public/images/landingDebateSection.svg";
import landingFeedBackSection from "@/public/images/landingFeedBackSection.svg";
import Button from "./_components/Button/Button";
import getQueryClient from "./_queryFactory/getQueryClient";
import { projectQueryKeys } from "./_queryFactory/projectQuery";
import LandingProjectList from "./_components/LandingProjectList/LandingProjectList";
import AnimationSection from "./_components/AnimationSection/AnimationSection";

export default async function Home() {
  const queryClient = getQueryClient();
  const projectListQuery = projectQueryKeys.list({ page: 1, size: 12, sortCondition: "LIKES" });

  await queryClient.prefetchQuery({
    queryKey: projectListQuery.queryKey,
    queryFn: projectListQuery.queryFn,
  });

  const dehydratedState = dehydrate(queryClient);

  return (
    <HydrationBoundary state={dehydratedState}>
      <AnimationSection className="h-screen w-full overflow-hidden scroll-smooth bg-gray-100">
        <section className="mx-auto flex h-screen w-full justify-center gap-[164px] bg-gray-100">
          <div className="mt-[200px]">
            <h1 className="text-[56px] font-semibold">
              사이드 프로젝트에
              <br />
              피드백을 받고 싶나요?
            </h1>
            <div className="mb-3 flex flex-col">
              <p className="text-xl font-normal text-gray-700">
                더 이상 당신의 매력적인 프로젝트를 꼭꼭 숨겨두지 마세요.
              </p>
              <p className="text-xl font-normal text-gray-700">
                FeedB를 통해 완성도를 높이고, 새로운 아이디어를 얻어보세요!
              </p>
            </div>
            <Link href={"/main"}>
              <Button
                buttonSize="normal"
                bgColor="yellow"
                type="button"
                className="mt-5 flex items-center px-6 py-4 pt-4 text-base">
                5분안에 프로젝트 공유하기
              </Button>
            </Link>
          </div>
          <Image
            className="zoom-in-animation"
            src={landingMainSection}
            alt="프로젝트 피드백 이미지"
            width={555}
            priority
          />
        </section>
        <section className="relative mx-auto flex h-screen w-full flex-col items-center gap-3 bg-gray-100">
          <h2 className="mt-24 text-center text-5xl font-semibold text-black">프로젝트 등록과 공유</h2>
          <div className="mb-3 flex flex-col">
            <h3 className="mb-7 mt-5 text-center text-xl font-normal text-gray-700">
              여러분의 프로젝트를 손쉽게 등록하고 공유할 수 있습니다.
              <br />
              텍스트, 이미지 등 다양한 형식을 파일을 업로드하여 프로젝트를 소개하세요
            </h3>
          </div>
          <div className="absolute left-0 z-10 h-full w-20 bg-custom-gradient" />
          <div className="absolute right-0 z-10 h-full w-20 rotate-180 bg-custom-gradient" />
          <LandingProjectList />
        </section>
        <section className="mx-auto flex h-screen w-full flex-col items-center justify-center gap-3 bg-gray-100">
          <h2 className="mt-5 text-center text-5xl font-semibold text-black">프로젝트 공유와 피드백</h2>
          <h3 className="mb-7 mt-5 text-center text-xl font-normal text-gray-700">
            프로젝트 리뷰로 피드백을 받고, 별점을 통해 전반적인 만족도를 확인하세요.
          </h3>
          <Link href={"/main"}>
            <Button
              buttonSize="normal"
              bgColor="yellow"
              type="button"
              className="flex items-center px-6 py-4 pt-5 text-base">
              내 프로젝트 공유하기
            </Button>
          </Link>
          <Image src={landingProjectSection} alt="프로젝트 상세 페이지 이미지" width={900} />
        </section>
        <section className="mx-auto flex h-screen w-full flex-col items-center justify-center gap-3 bg-gray-100">
          <h2 className="mt-24 text-center text-5xl font-semibold text-black">다양한 기준으로 프로젝트 평가</h2>
          <h3 className="mb-7 mt-5 text-center text-xl font-normal text-gray-700">
            개별 별점을 평균내어 종합 별점으로 제공해드립니다. 이를 통해 프로젝트에 대한 전체적인 평가를 한눈에 파악할
            수 있습니다.
          </h3>
          <Link href={"/main"}>
            <Button
              buttonSize="normal"
              bgColor="yellow"
              type="button"
              className="flex items-center px-6 py-4 pt-5 text-base">
              피드비 시작하기
            </Button>
          </Link>
          <Image className="mt-[81px]" src={landingEvaluationSection} alt="프로젝트 별점 평가 이미지" width={1000} />
        </section>
        <section className="mx-auto flex h-screen w-full flex-col items-center justify-center gap-3 bg-gray-100">
          <h2 className="mt-24 text-center text-5xl font-semibold text-black">프로젝트에 대한 토론</h2>
          <h3 className="mb-7 mt-5 text-center text-xl font-normal text-gray-700">
            프로젝트 리뷰를 남기면 모든 사용자와 프로젝트에 대한 대화를 나눌 수 있어요.
          </h3>
          <Link href={"/main"}>
            <Button
              buttonSize="normal"
              bgColor="yellow"
              type="button"
              className="flex items-center px-6 py-4 pt-5 text-base">
              피드비 시작하기
            </Button>
          </Link>
          <Image className="mt-12" src={landingDebateSection} alt="프로젝트 댓글 이미지" width={1130} />
        </section>
        <section className="mx-auto flex h-screen w-full flex-col items-center justify-center gap-3 bg-gray-100">
          <h2 className="mt-24 text-center text-5xl font-semibold text-black">지금 프로젝트를 공유하고 피드백 받기</h2>
          <h3 className="mb-7 mt-5 text-center text-xl font-normal text-gray-700">
            FeedB와 함께라면 프로젝트 진행이 더 이상 혼자가 아닙니다. 다양한 의견을 통해 프로젝트를 개선하고, 새로운
            아이디어를 얻어보세요!
          </h3>
          <Link href={"/main"}>
            <Button
              buttonSize="normal"
              bgColor="yellow"
              type="button"
              className="flex items-center px-6 py-4 pt-5 text-base">
              피드비 시작하기
            </Button>
          </Link>
          <Image className="mt-16" src={landingFeedBackSection} alt="프로젝트 피드백 이미지" width={1130} />
        </section>
      </AnimationSection>
    </HydrationBoundary>
  );
}
