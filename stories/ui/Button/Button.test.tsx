import { composeStories } from "@storybook/react";
import { userEvent, render, screen } from "../../util/test-util";
import * as stories from "./Button.stories"; // 스토리북에서 Button 스토리를 가져옴

const { Normal } = composeStories(stories);

describe("Button 컴포넌트", () => {
  it("버튼에 작성된 텍스트가 렌더링되는지 확인", () => {
    render(<Normal />);

    expect(screen.getByText("버튼")).toBeInTheDocument();
  });

  it("버튼의 클릭 이벤트가 작동하는지 확인", async () => {
    const handleClick = jest.fn();
    render(<Normal onClick={handleClick} />);

    const button = screen.getByRole("button", { name: "버튼" });
    await userEvent.click(button);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
