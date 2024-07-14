"use client";
import { ReactNode, useEffect, useState, useRef } from "react";
import { twMerge } from "tailwind-merge";
import { useIntersectionObserver } from "@/app/_hooks/useIntersectionObserver";

function AnimationSection({ children, className }: { children: ReactNode; className?: string }) {
  const { isVisible, targetRef } = useIntersectionObserver({ threshold: 1.0 });
  const sectionClass = twMerge(
    `flex h-screen transform snap-start bg-gray-100 duration-1000 ease-in-out ${
      isVisible ? "scale-100 opacity-100" : "scale-100 opacity-0"
    } ` + className
  );

  const [currentIndex, setCurrentIndex] = useState(0);
  const sectionsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    if (targetRef.current) {
      sectionsRef.current = Array.from(targetRef.current.querySelectorAll(".snap-start"));
    }
  }, [targetRef]); // 이 부분은 DOM이 업데이트될 때마다 섹션 참조를 업데이트

  useEffect(() => {
    const handleScroll = (event: WheelEvent) => {
      if (sectionsRef.current.length === 0) return;

      event.preventDefault(); // 기본 스크롤 동작 방지
      const { deltaY } = event;
      let nextIndex = currentIndex;
      if (deltaY > 0 && currentIndex < sectionsRef.current.length - 1) {
        nextIndex = currentIndex + 1;
      } else if (deltaY < 0 && currentIndex > 0) {
        nextIndex = currentIndex - 1;
      }

      if (nextIndex !== currentIndex) {
        setCurrentIndex(nextIndex);
      }
    };

    const div = targetRef.current;
    div?.addEventListener("wheel", handleScroll, { passive: false });

    return () => {
      div?.removeEventListener("wheel", handleScroll);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentIndex]);

  useEffect(() => {
    const section = sectionsRef.current[currentIndex];
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }, [currentIndex]); // currentIndex 변경시 스크롤 이동

  return (
    <section ref={targetRef} className={sectionClass}>
      {children}
    </section>
  );
}

export default AnimationSection;
