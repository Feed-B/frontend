import SkeletonProjectList from "@/app/_components/ProjectList/SkeletonUI/SkeletonProjectList";
import ProfileSkeleton from "./_components/skeletonUI/ProfileSkeleton";

export default function Loading() {
  return (
    <div className="mb-20 ml-[50%] mt-10 flex w-[1200px] -translate-x-1/2 animate-pulse gap-11 gap-y-16">
      <div className="w-[180px]">
        <div className="flex flex-col gap-2">
          <div className="h-20 w-40 bg-gray-200" />
          <div className="flex w-24 bg-gray-200 px-3 py-4" />
          <div className="flex w-24 bg-gray-200 px-3 py-4" />
        </div>
      </div>
      <div className="flex w-[976px] flex-col gap-8">
        <ProfileSkeleton />
        <SkeletonProjectList />
      </div>
    </div>
  );
}
