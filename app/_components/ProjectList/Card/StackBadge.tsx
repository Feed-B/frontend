function StackBadge({ stack }: { stack: string }) {
  return (
    <div className="relative overflow-hidden rounded-md px-5 py-2">
      <p className="text-center text-white">{stack}</p>
      <div className="absolute inset-0 -z-10 bg-black opacity-70" />
    </div>
  );
}

export default StackBadge;
