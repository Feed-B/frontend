import { ProjectData } from "@/app/_apis/schema/projectResponse";
import WishButtonAndCount from "../../WishButtonAndCount/WishButtonAndCount";
import StackBadge from "./StackBadge";

function HoverCard({ project }: { project: ProjectData }) {
  return (
    <div className="absolute inset-0 z-30 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
      <div className="flex p-4">
        <div className="z-20">
          <div className="flex flex-wrap gap-1">
            {project.stackList.map((stack, index) => (
              <StackBadge key={index} stack={stack} />
            ))}
          </div>
          <div className="absolute bottom-3 right-3 text-white">
            <WishButtonAndCount
              projectId={project.projectId}
              isFavorite={project.isLiked}
              wishCount={project.likeCount}
            />
          </div>
        </div>
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-black to-[rgba(0,0,0,0)] opacity-90" />
      </div>
    </div>
  );
}

export default HoverCard;
