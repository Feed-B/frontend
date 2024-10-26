import Providers from "@/app/_context/queryProviders";
import { projectApi } from "@/app/_apis/projectApi";
import "@/app/_styles/globals.css";

interface Props {
  params: {
    projectId: number;
  };
  children: React.ReactNode;
}

export async function generateMetadata({ params }: Props) {
  const projectData = await projectApi.getProject(params.projectId);

  return {
    title: projectData.title,
    description: projectData.introductions,
    keywords: [...projectData.projectTechStacks],
    category: "사이드 프로젝트",
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
          alt: projectData.title + "사이드 프로젝트 Image",
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

export default function ProjectLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <Providers>{children}</Providers>;
}
