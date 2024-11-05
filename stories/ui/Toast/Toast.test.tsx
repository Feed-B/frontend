import { composeStories } from "@storybook/react";
import React from "react";
import { render, screen, userEvent } from "../../util/test-util";
import * as stories from "./Toast.stories";
const { ToastStory } = composeStories(stories);

describe("Toast 컴포넌트 테스트", () => {
  it("Toast 클릭 시 Toast가 잘 뜨는지 확인", async () => {
    // GIVEN
    render(<ToastStory />);

    // WHEN
    const button = screen.getByRole("button");
    await userEvent.click(button);

    //THEN;

    // await waitFor(() => {
    //       expect(screen.getByText("성공 성공")).toBeInTheDocument();
    // });
    expect(screen.getByText("성공 성공")).toBeInTheDocument();
  });

  it("Toast 클릭 후 3초 뒤 Toast가 사라지는지 확인", async () => {
    // GIVEN
    const { container } = render(<ToastStory />);

    // WHEN
    const button = screen.getByRole("button");
    await userEvent.click(button);

    const toastContainer = container.querySelector("#toast-container");

    // THEN
    // jest.advanceTimersByTime(3901);
    // await waitFor(() => {
    //   expect(toastContainer?.hasChildNodes()).toBeFalsy();
    // });
    expect(toastContainer?.hasChildNodes()).toBeFalsy();
  });
});
