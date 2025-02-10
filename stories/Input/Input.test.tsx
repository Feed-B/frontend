import { composeStories } from "@storybook/react";
import { render, screen } from "@testing-library/react";
import * as stories from "./Input.stories";

const { DefaultInput, ErrorInput } = composeStories(stories);

describe("Input 컴포넌트", () => {
  it("Input이 잘 로드되는지 확인", () => {
    render(<DefaultInput placeholder="값을 입력해주세요." />);
    const input = screen.getByPlaceholderText("값을 입력해주세요.");

    expect(input).toBeInTheDocument();
    expect(input).toHaveClass("w-[384px]");
  });

  it("Error prop이 있을 때 Error Input이 잘 로드되는지 확인", () => {
    render(<ErrorInput />);
    const errorMessage = screen.getByText("값을 입력해주세요.");

    expect(errorMessage).toBeInTheDocument();
    expect(errorMessage).toHaveClass("text-red-500");
  });
});
