import Image from "next/image";
import { ReactNode } from "react";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { twMerge } from "tailwind-merge";
import sectionImage1 from "@/public/images/landingPageImage1.svg";
import sectionImage2 from "@/public/images/landingPageImage2.svg";
import sectionImage3 from "@/public/images/landingPageImage3.svg";
import sectionImage4 from "@/public/images/landingPageImage4.svg";
import sectionImage5 from "@/public/images/landingPageImage5.svg";
import Button from "./_components/Button/Button";
import getQueryClient from "./_queryFactory/getQueryClient";
import { projectQueryKeys } from "./_queryFactory/projectQuery";
import LandingProjectList from "./_components/LandingProjectList/LandingProjectList";

const Section = ({ children, className }: { children: ReactNode; className?: string }) => {
  const sectionClass = twMerge("mx-auto flex w-full flex-col items-center gap-3 " + className);
  return <section className={sectionClass}>{children}</section>;
};

const SubTitle = ({ children }: { children: ReactNode }) => {
  return <h2 className="mt-24 text-center text-5xl font-semibold text-black">{children}</h2>;
};

const Description = ({ children }: { children: ReactNode }) => {
  return <h2 className="mb-3 text-center text-xl font-normal text-gray-700">{children}</h2>;
};

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
      <main className="w-full bg-gray-100">
        <section className="mx-auto flex h-[730px] w-full justify-center gap-[164px] pt-[60px]">
          <div className="mt-[120px]">
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
            <Button
              buttonSize="normal"
              bgColor="yellow"
              type="button"
              className="mt-5 flex items-center px-6 py-4 pt-5 text-base">
              5분안에 프로젝트 공유하기
            </Button>
          </div>
          <Image src={sectionImage1} alt="피드백 이미지" width={555} priority />
        </section>
        <Section className="relative h-[650px] overflow-hidden">
          <SubTitle>프로젝트 등록과 공유</SubTitle>
          <div className="mb-3 flex flex-col">
            <Description>여러분의 프로젝트를 손쉽게 등록하고 공유할 수 있습니다.</Description>
            <Description>텍스트, 이미지 등 다양한 형식을 파일을 업로드하여 프로젝트를 소개하세요</Description>
          </div>
          <div className="bg-custom-gradient absolute left-0 z-10 h-full w-20" />
          <div className="bg-custom-gradient absolute right-0 z-10 h-full w-20 rotate-180" />
          <LandingProjectList />
        </Section>
        <Section>
          <SubTitle>프로젝트 공유와 피드백</SubTitle>
          <Description>프로젝트 리뷰로 피드백을 받고, 별점을 통해 전반적인 만족도를 확인하세요.</Description>
          <Button
            buttonSize="normal"
            bgColor="yellow"
            type="button"
            className="flex items-center px-6 py-4 pt-5 text-base">
            내 프로젝트 공유하기
          </Button>
          <Image className="mb-[97px]" src={sectionImage2} alt="메인 페이지 이미지" width={1093} priority />
        </Section>
        <Section>
          <SubTitle>다양한 기준으로 프로젝트 평가</SubTitle>
          <Description>
            개별 별점을 평균내어 종합 별점으로 제공해드립니다. 이를 통해 프로젝트에 대한 전체적인 평가를 한눈에 파악할
            수 있습니다.
          </Description>
          <Button
            buttonSize="normal"
            bgColor="yellow"
            type="button"
            className="flex items-center px-6 py-4 pt-5 text-base">
            피드비 시작하기
          </Button>
          <Image className="mt-[81px]" src={sectionImage3} alt="프로젝트 상세 이미지" width={1000} priority />
        </Section>
        <Section>
          <SubTitle>프로젝트에 대한 토론</SubTitle>
          <Description>프로젝트 리뷰를 남기면 모든 사용자와 프로젝트에 대한 대화를 나눌 수 있어요.</Description>
          <Button
            buttonSize="normal"
            bgColor="yellow"
            type="button"
            className="flex items-center px-6 py-4 pt-5 text-base">
            피드비 시작하기
          </Button>
          <Image className="mt-12" src={sectionImage4} alt="피드백 이미지" width={1130} priority />
        </Section>
        <Section>
          <SubTitle>지금 프로젝트를 공유하고 피드백 받기</SubTitle>
          <Description>
            FeedB와 함께라면 프로젝트 진행이 더 이상 혼자가 아닙니다. 다양한 의견을 통해 프로젝트를 개선하고, 새로운
            아이디어를 얻어보세요!
          </Description>
          <Button
            buttonSize="normal"
            bgColor="yellow"
            type="button"
            className="flex items-center px-6 py-4 pt-5 text-base">
            피드비 시작하기
          </Button>
          <Image className="mt-16" src={sectionImage5} alt="피드백 이미지" width={1130} priority />
        </Section>
      </main>
    </HydrationBoundary>
  );
}
