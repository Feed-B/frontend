import Image from "next/image";
import sectionImage1 from "@/public/images/landingPageImage1.svg";
import sectionImage2 from "@/public/images/landingPageImage2.svg";
import sectionImage3 from "@/public/images/landingPageImage3.svg";
import sectionImage4 from "@/public/images/landingPageImage4.svg";
import sectionImage5 from "@/public/images/landingPageImage5.svg";

export default function Home() {
  return (
    <main className="">
      <section>
        <div>
          <h1>사이드 프로젝트에 피드백을 받고 싶나요?</h1>
          <div>
            <p>더 이상 당신의 매력적인 프로젝트를 꼭꼭 숨겨두지 마세요.</p>
            <p> FeedB를 통해 완성도를 높이고, 새로운 아이디어를 얻어보세요!</p>
          </div>
          <button type="button">5분안에 프로젝트 공유하기</button>
        </div>
        <Image src={sectionImage1} alt="피드백 이미지" width={555} priority />
      </section>
      <section>
        <h2>프로젝트 등록과 공유</h2>
        <div>
          <p>여러분의 프로젝트를 손쉽게 등록하고 공유할 수 있습니다.</p>
          <p>텍스트, 이미지 등 다양한 형식을 파일을 업로드하여 프로젝트를 소개하세요</p>
        </div>
        <div>
          <p>게시물 리스트</p>
        </div>
      </section>
      <section>
        <h2>프로젝트 공유와 피드백</h2>
        <p>프로젝트 리뷰로 피드백을 받고, 별점을 통해 전반적인 만족도를 확인하세요.</p>
        <button type="button">내 프로젝트 공유하기</button>
        <Image src={sectionImage2} alt="메인 페이지 이미지" width={1093} priority />
      </section>
      <section>
        <h2>다양한 기준으로 프로젝트 평가</h2>
        <p>
          개별 별점을 평균내어 종합 별점으로 제공해드립니다. 이를 통해 프로젝트에 대한 전체적인 평가를 한눈에 파악할 수
          있습니다.
        </p>
        <button type="button">피드비 시작하기</button>
        <Image src={sectionImage3} alt="프로젝트 상세 이미지" width={1000} priority />
      </section>
      <section>
        <h2>프로젝트에 대한 토론</h2>
        <p>프로젝트 리뷰를 남기면 모든 사용자와 프로젝트에 대한 대화를 나눌 수 있어요.</p>
        <button type="button">피드비 시작하기</button>
        <Image src={sectionImage4} alt="피드백 이미지" width={1130} priority />
      </section>
      <section>
        <h2>지금 프로젝트를 공유하고 피드백 받기</h2>
        <p>
          FeedB와 함께라면 프로젝트 진행이 더 이상 혼자가 아닙니다. 다양한 의견을 통해 프로젝트를 개선하고, 새로운
          아이디어를 얻어보세요!
        </p>
        <button type="button">피드비 시작하기</button>
        <Image src={sectionImage5} alt="피드백 이미지" width={1130} priority />
      </section>
    </main>
  );
}
