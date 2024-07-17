import { projectApi } from "../_apis/project";

const url: string = window.location.href;

export const copyLink = async () => {
  await navigator.clipboard.writeText(url);
};

// Kakao
export const shareKakao = async (projectId: number) => {
  const result = await projectApi.getProject(projectId);

  if (typeof window !== "undefined" && (window as any).Kakao) {
    const kakao = (window as any).Kakao;
    if (!kakao.isInitialized()) {
      const apiKey = process.env.NEXT_PUBLIC_KAKAO_API_KEY;
      if (!apiKey) {
        console.error("Kakao API key is not defined");
        return;
      }
      kakao.init(apiKey);
    }

    kakao.Share.sendDefault({
      objectType: "feed",
      content: {
        title: "",
        description: result.introductions,
        imageUrl: result.thumbnailUrl,
        link: {
          mobileWebUrl: "https://feedb.vercel.app",
          webUrl: "https://feedb.vercel.app",
        },
      },
      itemContent: {
        profileText: result.title,
      },
      social: {
        likeCount: result.likeCount,
      },
      buttons: [
        {
          title: "자세히 보기",
          link: {
            mobileWebUrl: `https://feedb.vercel.app/project/${projectId}`,
            webUrl: `https://feedb.vercel.app/project/${projectId}`,
          },
        },
      ],
    });
  } else {
    console.error("Kakao object is not defined on the window");
  }
};
