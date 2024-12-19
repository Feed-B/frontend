import { composeStories } from "@storybook/react";
import React from "react";
import { render, screen, userEvent } from "../../util/test-util";
import * as stories from "./Modal.stories";

const { Login } = composeStories(stories);

describe("Login Modal 컴포넌트 테스트", () => {
  it("버튼을 클릭하면 모달이 열려야 한다", async () => {
    // GIVEN
    render(<Login />);

    // 초기 상태: 모달이 없는지 확인
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();

    // WHEN
    const button = screen.getByRole("button", { name: /로그인/i });
    await userEvent.click(button);

    // 모달이 열렸는지 확인
    expect(screen.getByRole("dialog")).toBeInTheDocument();
  });

  it("x 버튼을 클릭하면 모달이 닫혀야 한다", async () => {
    // GIVEN
    render(<Login />);

    // WHEN
    const loginButton = screen.getByRole("button", { name: /로그인/i });
    await userEvent.click(loginButton);

    // 모달 열림 확인
    const modal = screen.getByRole("dialog");
    expect(modal).toBeInTheDocument();

    // x 버튼 클릭
    const closeButton = screen.getByRole("button", { name: /닫기/i });
    await userEvent.click(closeButton);

    // THEN
    // 모달이 닫혔는지 확인
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  });
});
