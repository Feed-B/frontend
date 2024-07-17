"use client";

import { ReactNode, useEffect, useState, useRef } from "react";
import { throttle } from "lodash";

function AnimationSection({ children, className }: { children: ReactNode; className?: string }) {
  const [, setWheelStep] = useState(0);
  const sectionsRef = useRef<any>();
  const timer = useRef<any>(null);

  const handleWheelEvent: EventListener = throttle(
    (e: Event) => {
      const wheelEvent = e as unknown as WheelEvent;
      if (timer.current) {
        return;
      }

      if (wheelEvent.deltaY > 0) {
        downWheel();
        return;
      }
      upWheel();
    },
    1000,
    { leading: true, trailing: false }
  );

  const upWheel = () => {
    setWheelStep(prev => prev - 1);
    if (sectionsRef.current) {
      sectionsRef.current.scrollBy({
        left: 0,
        top: -window.innerHeight,
        behavior: "smooth",
      });
    }
  };

  const downWheel = () => {
    setWheelStep(prev => prev + 1);
    if (sectionsRef.current) {
      sectionsRef.current.scrollBy({
        left: 0,
        top: window.innerHeight,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    window.addEventListener("wheel", handleWheelEvent);
    document.body.classList.add("overflow-hidden");

    return () => {
      window.removeEventListener("wheel", handleWheelEvent);
      document.body.classList.remove("overflow-hidden");
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <main ref={sectionsRef} className={className}>
      {children}
    </main>
  );
}

export default AnimationSection;
