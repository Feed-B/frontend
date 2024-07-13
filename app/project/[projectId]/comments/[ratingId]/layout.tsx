import "@/app/_styles/globals.css";
import { commentApi } from "@/app/_apis/comment";
import { projectApi } from "@/app/_apis/project";

interface Props {
  params: {
    ratingId: number;
    projectId: number;
  };
  children: React.ReactNode;
}

export async function generateMetadata({ params }: Props) {
  const projectData = await projectApi.getProject(params.projectId);
  const commentData = await commentApi.getCommentDetail(params.ratingId);

  return {
    title: `${commentData.authorName} | 피드백 `,
    openGraph: {
      title: `${projectData.title}`,
      description: `${projectData.content}`,
      url: "https://feedb.vercel.app/",
      siteName: "FeedB",
      images: [
        {
          url: projectData.thumbnailUrl,
          width: 500,
          height: 500,
        },
      ],
    },
  };
}

export default function CommentLayout({ children }: Readonly<Props>) {
  return <>{children}</>;
}
