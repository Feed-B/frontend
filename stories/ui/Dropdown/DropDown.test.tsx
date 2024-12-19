import { composeStories } from "@storybook/react";
import { userEvent, render, screen } from "../../util/test-util";
import * as stories from "./Dropdown.stories";

const EXAMPLE_URL = process.env.NEXT_PUBLIC_SERVICE_URL;
const { Menu, Header, Social } = composeStories(stories);

describe("Dropdown 컴포넌트", () => {
  const getButton = () => screen.getByRole("button", { name: /프로젝트 메뉴/i });

  const toggleDropdown = async (
    openButton: HTMLElement, // 드롭다운 열기를 트리거하는 요소
    closeButton: HTMLElement, // 드롭다운 닫기를 트리거하는 요소 (ex)document.body)
    getByFn: (Fn: string) => HTMLElement,
    queryByFn: (Fn: string) => HTMLElement | null,
    textList: string[]
  ) => {
    await userEvent.click(openButton); // 드롭다운 열기
    textList.forEach(text => {
      expect(getByFn(text)).toBeInTheDocument();
    });

    await userEvent.click(closeButton); // 드롭다운 닫기
    textList.forEach(text => {
      expect(queryByFn(text)).not.toBeInTheDocument();
    });
  };

  it("Menu 드롭다운: 버튼 클릭 시 열기/닫기 확인", async () => {
    render(<Menu />);
    const button = getButton();

    // 드롭다운 열고 닫기
    await toggleDropdown(button, button, screen.getByText, screen.queryByText, ["수정", "삭제"]);
  });

  it("Header 드롭다운: 마이페이지 링크 포함 여부 확인", async () => {
    render(<Header />);
    const button = getButton();

    // 드롭다운 열고 닫기
    await toggleDropdown(button, button, screen.getByText, screen.queryByText, ["마이페이지", "로그아웃"]);

    // 마이페이지 링크 확인
    await userEvent.click(button);
    const link = screen.getByRole("link", { name: "마이페이지" });
    expect(link).toHaveAttribute("href", EXAMPLE_URL);
  });

  it("Social 드롭다운: 카카오 및 URL 아이콘 렌더링 확인", async () => {
    render(<Social />);
    const button = getButton();

    // 드롭다운 열고 닫기
    await toggleDropdown(button, button, screen.getByAltText, screen.queryByAltText, [
      "카톡 공유하기.",
      "URL 복사하기.",
    ]);
  });

  it("드롭다운이 버튼 외부를 클릭했을때 닫히는지 확인", async () => {
    render(<Menu />);
    const button = getButton();

    // 드롭다운 열고 닫기
    await toggleDropdown(button, document.body, screen.getByText, screen.queryByText, ["수정", "삭제"]);
  });
});
