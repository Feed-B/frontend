import WishCount from "../../WishCount/WishCount";
import StackBadge from "./StackBadge";

function HoverCard({
  stackList,
  wishCount,
  isWishProject,
}: {
  stackList: string[];
  wishCount: number;
  isWishProject: boolean;
}) {
  return (
    <div className="flex p-6">
      <div className="z-20">
        <div className="grid grid-cols-3 gap-2.5">
          {stackList.map((stack, index) => {
            return <StackBadge key={index} stack={stack} />;
          })}
        </div>
        <div className="absolute bottom-5 right-5 text-white">
          <WishCount isFavorite={isWishProject} wishCount={wishCount} />
        </div>
      </div>
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-black to-[rgba(0,0,0,0)] opacity-90" />
    </div>
  );
}

export default HoverCard;
