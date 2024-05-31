import React from "react";
import UseStack from "@/app/_components/Stack/UseStack";

interface StackListProps {
  stackList: string[];
}

function StackSection({ stackList }: StackListProps) {
  return (
    <section className="mt-10">
      <p className="mb-4 text-lg font-bold">사용한 스킬</p>
      <UseStack stackList={stackList} />
    </section>
  );
}

export default StackSection;
