function StackBadge({ key, stack }: { key: number; stack: string }) {
  return (
    <div key={key} className="rounded-md bg-black px-5 py-2 text-center text-white">
      {stack}
    </div>
  );
}

export default StackBadge;
