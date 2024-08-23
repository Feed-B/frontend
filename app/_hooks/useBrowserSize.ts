import { useEffect, useState } from "react";
import throttle from "lodash/throttle";

const useBrowserSize = () => {
  const [windowSize, setWindowSize] = useState({
    windowWidth: 0,
    windowHeight: 0,
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      // 사이즈 변화 => setWindowSize
      const setSize = throttle(() => {
        setWindowSize({
          windowWidth: window.innerWidth,
          windowHeight: window.innerHeight,
        });
      }, 1000);

      // 브라우저 창 크기 변화 시 발생 이벤트
      window.addEventListener("resize", setSize);

      // 초기값을 설정할 수 있도록 setSize 함수를 한 번 실행시킴
      setSize();

      // 새로운 바인딩 발생 전 방지
      return () => {
        window.removeEventListener("resize", setSize);
      };
    } else {
      return () =>
        window.removeEventListener("resize", () => {
          return null;
        });
    }
  }, []);
  return windowSize;
};

export default useBrowserSize;
