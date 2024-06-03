import { PropsWithChildren } from "react";

function ProjectListCategory({ children }: PropsWithChildren) {
  return <div className="flex gap-5 ">{children}</div>;
}

export default ProjectListCategory;
