import cardOne from "@/public/images/mock_cardTitle_1.jpg";
import cardTwo from "@/public/images/mock_cardTitle_2.jpg";
import cardThree from "@/public/images/mock_cardTitle_3.jpg";
import cardFour from "@/public/images/mock_cardTitle_4.jpg";
import cardFive from "@/public/images/mock_cardTitle_5.jpg";

export const mockDataCardList = {
  myProjectList: {
    count: 4,
    data: [
      {
        id: 0,
        titleImage: cardOne,
        stackList: ["React", "Node.js", "Figma"],
        favoriteCount: 10,
        isFavorite: true,
        projectName: "Hello Fruits",
        supDescription: "간단한 프로젝트입니다.",
        description:
          "프로젝트에 대한 설명을 아주 약간씩만 할 건데요, 어지럽지만 일단 해보도록 하겠습니다. 감사합니다. 길진 않지만 길지 않다고 욕하지 말아주십쇼 ㅎㅅㅎ",
      },
      {
        id: 1,
        titleImage: cardTwo,
        stackList: ["React"],
        favoriteCount: 52,
        isFavorite: false,
        projectName: "Hello Animals",
        supDescription: "심오한 프로젝트입니다.",
        description:
          "프로젝트에 대한 설명을 아주 약간씩만 할 건데요, 어지럽지만 일단 해보도록 하겠습니다. 감사합니다. 길진 않지만 길지 않다고 욕하지 말아주십쇼 ㅎㅅㅎ",
      },
      {
        id: 2,
        titleImage: cardThree,
        stackList: ["React"],
        favoriteCount: 52,
        isFavorite: true,
        projectName: "Hello Characters",
        supDescription: "어지러운 프로젝트입니다.",
        description:
          "프로젝트에 대한 설명을 아주 약간씩만 할 건데요, 어지럽지만 일단 해보도록 하겠습니다. 감사합니다. 길진 않지만 길지 않다고 욕하지 말아주십쇼 ㅎㅅㅎ",
      },
      {
        id: 3,
        titleImage: cardFour,
        stackList: ["React"],
        favoriteCount: 52,
        isFavorite: false,
        projectName: "Hello Been! Actually, I have a lot of things to talk about",
        supDescription: "어려운 프로젝트입니다. 사실 할 말 많은데 여기는 너무 짧게",
        description:
          "프로젝트에 대한 설명을 아주 약간씩만 할 건데요, 어지럽지만 일단 해보도록 하겠습니다. 감사합니다. 길진 않지만 길지 않다고 욕하지 말아주십쇼 ㅎㅅㅎ",
      },
      {
        id: 4,
        titleImage: cardFive,
        stackList: ["React", "Node.js", "Figma", "Spring", "SQL"],
        favoriteCount: 52,
        isFavorite: false,
        projectName: "Hello Been",
        supDescription: "쉬운 프로젝트입니다. ",
        description:
          "프로젝트에 대한 설명을 아주 약간씩만 할 건데요, 어지럽지만 일단 해보도록 하겠습니다. 감사합니다. 길진 않지만 길지 않다고 욕하지 말아주십쇼 ㅎㅅㅎ",
      },
    ],
  },
  favoriteProjectList: {
    count: 2,
    data: [
      {
        id: 0,
        titleImage: cardOne,
        stackList: ["React", "Node.js", "Figma"],
        favoriteCount: 10,
        isFavorite: true,
        projectName: "Hello Fruits",
        supDescription: "간단한 프로젝트입니다.",
        description:
          "프로젝트에 대한 설명을 아주 약간씩만 할 건데요, 어지럽지만 일단 해보도록 하겠습니다. 감사합니다. 길진 않지만 길지 않다고 욕하지 말아주십쇼 ㅎㅅㅎ",
      },
      {
        id: 2,
        titleImage: cardThree,
        stackList: ["React"],
        favoriteCount: 52,
        isFavorite: true,
        projectName: "Hello Characters",
        supDescription: "어지러운 프로젝트입니다.",
        description:
          "프로젝트에 대한 설명을 아주 약간씩만 할 건데요, 어지럽지만 일단 해보도록 하겠습니다. 감사합니다. 길진 않지만 길지 않다고 욕하지 말아주십쇼 ㅎㅅㅎ",
      },
    ],
  },
};

export default mockDataCardList;
