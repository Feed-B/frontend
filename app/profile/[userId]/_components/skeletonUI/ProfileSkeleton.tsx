import Button from "@/app/_components/Button/Button";
import { MY_PAGE_TEXT } from "../constant";

function ProfileSkeleton() {
  return (
    <div className="relative flex items-center justify-start gap-8 rounded-lg border border-solid border-gray-200 p-8">
      <div className="relative">
        <div className="h-[120px] w-[120px] rounded-full bg-gray-200" />
      </div>
      <div className="mt-2.5 flex flex-col gap-3">
        <div className="flex items-center gap-4">
          <div className="h-9 w-28 bg-gray-200 text-lg font-semibold leading-loose text-gray-900" />
          <div className="rounded bg-gray-100 p-1" />
        </div>
        <div className="h-24 w-[630px] bg-gray-200" />
      </div>
      <Button type="button" bgColor="stroke" buttonSize="normal" className="absolute bottom-8 right-8 w-28">
        {MY_PAGE_TEXT.EDIT_PROFILE}
      </Button>
    </div>
  );
}

export default ProfileSkeleton;
