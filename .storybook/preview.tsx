import React, { useEffect } from "react";
import type { Preview } from "@storybook/react";
import "../app/_styles/globals.css";

// 전역 decorator 추가
const WithModalRoot = (Story: React.ComponentType) => {
  useEffect(() => {
    // 'modal-root'가 존재하지 않으면 생성
    if (!document.getElementById("modal")) {
      const modalRoot = document.createElement("div");
      modalRoot.setAttribute("id", "modal");
      document.body.appendChild(modalRoot);
    }
  }, []);

  return <Story />;
};

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [WithModalRoot], // Decorator를 추가하여 모든 스토리에 적용
};

export default preview;
