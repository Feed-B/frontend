import React from "react";
import UseStack from "@/app/_components/Stack/UseStack";

interface StackListProps {
  stackList: string[];
}

function StackSection({ stackList }: StackListProps) {
  return (
    <section>
      <h3 className="mb-4 text-lg font-bold">사용한 스킬</h3>
      <UseStack stackList={stackList} />
    </section>
  );
}

export default StackSection;
