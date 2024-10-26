import { projectApi } from "../_apis/projectApi";

const BASE_URL = process.env.NEXT_PUBLIC_SERVICE_URL;

export const copyLink = async () => {
  if (typeof window !== "undefined") {
    const url: string = window.location.href;
    await navigator.clipboard.writeText(url);
  } else {
    console.error("window is not defined");
  }
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
          mobileWebUrl: BASE_URL,
          webUrl: BASE_URL,
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
            mobileWebUrl: BASE_URL + `/project/${projectId}`,
            webUrl: BASE_URL + `/project/${projectId}`,
          },
        },
      ],
    });
  } else {
    console.error("Kakao object is not defined on the window");
  }
};
