function SkeletonProjectList() {
  const repeatArray = Array.from({ length: 12 });
  return (
    <div className="grid grid-cols-4 gap-4">
      {repeatArray.map((_, index) => (
        <div className="flex flex-col gap-2.5" key={index}>
          <div key={index} className="aspect-square animate-pulse overflow-hidden rounded-md">
            <div className="min-h-60 bg-gray-300" />
          </div>
          <div className="mt-0.5 flex justify-between">
            <div className="min-h-4 min-w-[185px] bg-gray-200" />
            <div className="min-w-9 bg-gray-200" />
          </div>
          <div className="min-h-6 bg-gray-200" />
        </div>
      ))}
    </div>
  );
}

export default SkeletonProjectList;
