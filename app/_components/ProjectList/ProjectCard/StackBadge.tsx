function StackBadge({ stack }: { stack: string }) {
  return (
    <div className="relative overflow-hidden rounded p-1 px-2">
      <p className="text-center text-xs text-white">{stack}</p>
      <div className="absolute inset-0 -z-10 bg-[#242424]" />
    </div>
  );
}

export default StackBadge;
