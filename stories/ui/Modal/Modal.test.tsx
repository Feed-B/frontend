import { composeStories } from "@storybook/react";
import React from "react";
import { render, screen, userEvent } from "../../util/test-util";
import * as stories from "./Modal.stories";

const { Login } = composeStories(stories);

jest.mock("next/image", () => ({
  __esModule: true,
  default: (props: any) => {
    const { src, alt } = props;
    return <img src={src} alt={alt} />;
  },
}));

describe("Login Modal 컴포넌트 테스트", () => {
  it("버튼을 클릭하면 모달이 열려야 한다", async () => {
    // GIVEN
    render(<Login />);

    // 초기 상태: 모달이 없는지 확인
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();

    // WHEN
    const button = screen.getByRole("button", { name: /로그인/i });
    await userEvent.click(button);

    expect(screen.getByRole("dialog")).toBeInTheDocument();
  });
});
