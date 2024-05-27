import jsIcon from "@/public/icons/javascript.svg";
import tsIcon from "@/public/icons/typescript.svg";
import reactIcon from "@/public/icons/react.svg";
import vueIcon from "@/public/icons/vuejs.svg";
import svelteIcon from "@/public/icons/svelte.svg";
import nextIcon from "@/public/icons/nextjs.svg";
import nodeIcon from "@/public/icons/nodejs.svg";
import javaIcon from "@/public/icons/java.svg";
import springIcon from "@/public/icons/spring.svg";
import goIcon from "@/public/icons/go.svg";
import { StackListType } from "../_types/StackType";

export const FRONT_END_STACK: StackListType[] = [
  {
    name: "Javascript",
    iamge: jsIcon,
  },
  {
    name: "Typescript",
    iamge: tsIcon,
  },
  {
    name: "React",
    iamge: reactIcon,
  },
  {
    name: "Vue",
    iamge: vueIcon,
  },
  {
    name: "Svelte",
    iamge: svelteIcon,
  },
  {
    name: "Nextjs",
    iamge: nextIcon,
  },
];

export const BACK_END_STACK: StackListType[] = [
  {
    name: "Nodejs",
    iamge: nodeIcon,
  },
  {
    name: "Java",
    iamge: javaIcon,
  },
  {
    name: "Spring",
    iamge: springIcon,
  },
  {
    name: "Go",
    iamge: goIcon,
  },
];

export const FULL_STACK_DATA = FRONT_END_STACK.concat(BACK_END_STACK);
