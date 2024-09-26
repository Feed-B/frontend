import "@/app/_styles/globals.css";
import { commentApi } from "@/app/_apis/commentApi";
import { projectApi } from "@/app/_apis/projectApi";

interface Props {
  params: {
    ratingId: number;
    projectId: number;
  };
  children: React.ReactNode;
}

export async function generateMetadata({ params }: Props) {
  const projectData = await projectApi.getProject(params.projectId);
  const commentData = await commentApi.getComment(params.ratingId);

  return {
    title: `${commentData.authorName} | 피드백 `,
    openGraph: {
      title: projectData.title,
      description: projectData.content,
      url: process.env.NEXT_PUBLIC_SERVICE_URL,
      siteName: "FeedB",
      images: [
        {
          url: projectData.thumbnailUrl,
          width: 500,
          height: 500,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: projectData.title,
      description: projectData.introductions,
      images: [
        {
          url: projectData.thumbnailUrl,
          width: 500,
          height: 500,
          alt: projectData.title + "사이드 프로젝트 Image",
        },
      ],
    },
  };
}

export default function CommentLayout({ children }: Readonly<Props>) {
  return <>{children}</>;
}
