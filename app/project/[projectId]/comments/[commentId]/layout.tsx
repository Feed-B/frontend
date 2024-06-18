import "@/app/_styles/globals.css";
import Providers from "./providers";
// import { commentApi } from "@/app/_apis/comment";

interface Props {
  params: {
    commentId: number;
    projectId: number;
  };
  children: React.ReactNode;
}

// export async function generateMetadata({ params }: Props) {
//   const api = () => commentApi.getCommentDetail(params.projectId, params.commentId);

//   const result = await api();
//   console.log(result);
//   return {
//     title: "...",
//   };
// }

export default function CommentLayout({ children }: Readonly<Props>) {
  return <Providers>{children}</Providers>;
}
