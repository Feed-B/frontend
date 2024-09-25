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
import LandingProjectList from "./_components/LandingPage/LandingProjectList";
import AnimationSection from "./_components/LandingPage/AnimationSection";

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
      <AnimationSection className="h-screen w-full bg-gray-100 mb:overflow-x-hidden tbc:overflow-x-hidden tbr:overflow-x-hidden pc:overflow-hidden pc:scroll-smooth">
        <section className="mb:text-cente mx-auto flex h-screen w-full justify-center gap-[164px] bg-gray-100 mb:h-[680px] mb:flex-col mb:items-center mb:gap-[50px] tbc:h-[880px] tbc:flex-col tbc:items-center tbc:gap-[50px] tbr:h-[800px] tbr:gap-[30px]">
          <div className="mt-[200px] mb:mt-[100px] mb:flex mb:flex-col mb:items-center tbc:mt-[100px] tbc:flex tbc:flex-col tbc:items-center tbr:pl-8">
            <h1 className="text-[56px] font-semibold mb:text-center mb:text-xl tbc:text-center tbc:text-xl tbr:mb-3 tbr:text-3xl">
              사이드 프로젝트에
              <br />
              피드백을 받고 싶나요?
            </h1>
            <div className="mb-3 flex flex-col">
              <p className="text-xl font-normal text-gray-700 mb:text-xs tbc:text-sm">
                더 이상 당신의 매력적인 프로젝트를 꼭꼭 숨겨두지 마세요.
              </p>
              <p className="text-xl font-normal text-gray-700 mb:text-xs tbc:text-sm">
                FeedB를 통해 완성도를 높이고, 새로운 아이디어를 얻어보세요!
              </p>
            </div>
            <Link href={"/main"}>
              <Button
                buttonSize="normal"
                bgColor="yellow"
                type="button"
                className="mt-5 flex items-center px-6 py-4 pt-4 text-base mb:px-4 mb:py-2 mb:text-sm">
                5분안에 프로젝트 공유하기
              </Button>
            </Link>
          </div>
          <Image
            className="zoom-in-animation mb:hidden tbc:hidden tbr:hidden"
            src={landingMainSection}
            alt="프로젝트 피드백 이미지"
            width={555}
            priority
          />
          <Image
            className="zoom-in-animation mb:hidden pc:hidden"
            src={landingMainSection}
            alt="프로젝트 피드백 이미지"
            width={420}
            priority
          />
          <Image
            className="zoom-in-animation tbc:hidden tbr:hidden pc:hidden"
            src={landingMainSection}
            alt="프로젝트 피드백 이미지"
            width={320}
            priority
          />
        </section>
        <section className="relative mx-auto flex h-screen w-full flex-col items-center gap-3 bg-gray-100 mb:h-[350px] tbc:h-[400px] tbr:h-[550px]">
          <h2 className="mt-24 text-center text-5xl font-semibold text-black mb:mt-16 mb:text-xl tbc:text-xl tbr:text-4xl">
            프로젝트 등록과 공유
          </h2>
          <div className="mb-3 flex flex-col">
            <h3 className="mb-7 mt-5 text-center text-xl font-normal text-gray-700 mb:text-xs tbc:text-sm">
              여러분의 프로젝트를 손쉽게 등록하고 공유할 수 있습니다.
              <br />
              다양한 형식을 파일을 업로드하여 프로젝트를 소개하세요
            </h3>
          </div>
          <div className="absolute left-0 z-10 h-full w-20 bg-custom-gradient mb:hidden tbc:hidden tbr:hidden" />
          <div className="absolute right-0 z-10 h-full w-20 rotate-180 bg-custom-gradient mb:hidden tbc:hidden tbr:hidden" />
          <LandingProjectList />
        </section>
        <section className="mx-auto flex h-screen w-full flex-col items-center justify-center gap-3 bg-gray-100 mb:h-[700px] mb:gap-1 tbc:h-[620px] tbc:w-[80%] tbc:gap-2 tbr:h-[900px]">
          <h2 className="mt-5 text-center text-5xl font-semibold text-black mb:text-xl tbc:text-xl tbr:text-4xl">
            프로젝트 공유와 피드백
          </h2>
          <h3 className="mb-7 mt-5 text-center text-xl font-normal text-gray-700  mb:mb-2 mb:mt-2 mb:text-xs tbc:mb-3 tbc:mt-3 tbc:text-sm">
            프로젝트 리뷰로 피드백을 받고, <br className="tbr:hidden pc:hidden" />
            별점을 통해 전반적인 만족도를 확인하세요.
          </h3>
          <Link href={"/main"}>
            <Button
              buttonSize="normal"
              bgColor="yellow"
              type="button"
              className="flex items-center px-6 py-4 pt-5 text-base mb:mb-5 mb:px-4 mb:py-2 mb:text-sm">
              내 프로젝트 공유하기
            </Button>
          </Link>
          <Image src={landingProjectSection} alt="프로젝트 상세 페이지 이미지" width={900} />
        </section>
        <section className="mx-auto flex h-screen w-full flex-col items-center justify-center gap-3 bg-gray-100 mb:h-[450px] mb:gap-1 tbc:h-[400px] tbc:w-[80%] tbc:gap-2 tbr:h-[550px]">
          <h2 className="mt-24 text-center text-5xl font-semibold text-black mb:mt-[0px] mb:text-xl tbc:text-xl tbr:text-4xl">
            다양한 기준으로 프로젝트 평가
          </h2>
          <h3 className="mb-7 mt-5 text-center text-xl font-normal text-gray-700 mb:mb-2 mb:mt-2 mb:text-xs tbc:mb-3 tbc:mt-3 tbc:text-sm tbr:mb-3 tbr:mt-2">
            개별 별점을 평균내어 종합 별점으로 제공해드립니다. <br className="pc:hidden" />
            이를 통해 프로젝트에 대한 전체적인 평가를 한눈에 파악할 수 있습니다.
          </h3>
          <Link href={"/main"}>
            <Button
              buttonSize="normal"
              bgColor="yellow"
              type="button"
              className="flex items-center px-6 py-4 pt-5 text-base mb:px-4 mb:py-2 mb:text-sm">
              피드비 시작하기
            </Button>
          </Link>
          <Image
            className="mt-[81px] mb:mt-[30px] tbc:mt-[50px] tbr:mt-[30px]"
            src={landingEvaluationSection}
            alt="프로젝트 별점 평가 이미지"
            width={1000}
          />
        </section>
        <section className="mx-auto flex h-screen w-full flex-col items-center justify-center gap-3 bg-gray-100 mb:h-[450px] mb:gap-1 tbc:h-[600px] tbc:w-[80%] tbc:gap-2 tbr:h-[750px]">
          <h2 className="mt-24 text-center text-5xl font-semibold text-black mb:text-xl tbc:text-xl tbr:text-4xl">
            프로젝트에 대한 토론
          </h2>
          <h3 className="mb-7 mt-5 text-center text-xl font-normal text-gray-700 mb:mb-2 mb:mt-2 mb:text-xs tbc:mb-3 tbc:mt-3 tbc:text-sm tbr:mb-3 tbr:mt-2">
            프로젝트 리뷰를 남기면 <br className="pc:hidden" /> 모든 사용자와 프로젝트에 대한 대화를 나눌 수 있어요.
          </h3>
          <Link href={"/main"}>
            <Button
              buttonSize="normal"
              bgColor="yellow"
              type="button"
              className="flex items-center px-6 py-4 pt-5 text-base mb:px-4 mb:py-2 mb:text-sm">
              피드비 시작하기
            </Button>
          </Link>
          <Image
            className="mt-12 mb:mt-8 tbc:mt-6 tbr:mt-4"
            src={landingDebateSection}
            alt="프로젝트 댓글 이미지"
            width={1130}
          />
        </section>
        <section className="mx-auto flex h-screen w-full flex-col items-center justify-around gap-3 bg-gray-100 mb:h-[300px] mb:gap-1 tbc:h-[300px] tbc:gap-2 tbr:h-[450px]">
          <div className="flex flex-col items-center justify-between gap-7">
            <h2 className="mt-24 text-center text-5xl font-semibold text-black mb:text-xl tbc:text-xl tbr:text-4xl">
              지금 프로젝트를 공유하고 피드백 받기
            </h2>
            <h3 className="mt-5 text-center text-xl font-normal text-gray-700 mb:mb-2 mb:mt-2 mb:text-xs tbc:text-sm tbr:mb-3 tbr:mt-2">
              FeedB와 함께라면 프로젝트 진행이 더 이상 혼자가 아닙니다. <br className="pc:hidden" />
              다양한 의견을 통해 프로젝트를 개선하고, 새로운 아이디어를 얻어보세요!
            </h3>
            <Link href={"/main"}>
              <Button
                buttonSize="normal"
                bgColor="yellow"
                type="button"
                className="flex items-center px-6 py-4 pt-5 text-base mb:px-4 mb:py-2 mb:text-sm">
                피드비 시작하기
              </Button>
            </Link>
          </div>
          <Image
            className="br:mt-4 mb:mt-15 mt-10 tbc:mt-6"
            src={landingFeedBackSection}
            alt="프로젝트 피드백 이미지"
            width={1130}
          />
        </section>
      </AnimationSection>
    </HydrationBoundary>
  );
}
