import jsIcon from "@/public/stackIcons/javascript.svg";
import tsIcon from "@/public/stackIcons/typescript.svg";
import reactIcon from "@/public/stackIcons/react.svg";
import vueIcon from "@/public/stackIcons/vuejs.svg";
import svelteIcon from "@/public/stackIcons/svelte.svg";
import nextIcon from "@/public/stackIcons/nextjs.svg";
import nodeIcon from "@/public/stackIcons/nodejs.svg";
import javaIcon from "@/public/stackIcons/java.svg";
import springIcon from "@/public/stackIcons/spring.svg";
import goIcon from "@/public/stackIcons/go.svg";
import nestIcon from "@/public/stackIcons/nestjs.svg";
import kotlinIcon from "@/public/stackIcons/kotlin.svg";
import expressIcon from "@/public/stackIcons/express.svg";
import mysqlIcon from "@/public/stackIcons/mySQL.svg";
import mongoIcon from "@/public/stackIcons/mongoDB.svg";
import pythonIcon from "@/public/stackIcons/python.svg";
import djangoIcon from "@/public/stackIcons/django.svg";
import phpIcon from "@/public/stackIcons/php.svg";
import graphqlIcon from "@/public/stackIcons/graphQL.svg";
import firebaseIcon from "@/public/stackIcons/firebase.svg";
import flutterIcon from "@/public/stackIcons/flutter.svg";
import swiftIcon from "@/public/stackIcons/swift.svg";
import reactnativeIcon from "@/public/stackIcons/reactNative.svg";
import unityIcon from "@/public/stackIcons/unity.svg";
import aswIcon from "@/public/stackIcons/aws.svg";
import kubernetesIcon from "@/public/stackIcons/kubernetes.svg";
import dockerIcon from "@/public/stackIcons/docker.svg";
import gitIcon from "@/public/stackIcons/git.svg";
import figmaIcon from "@/public/stackIcons/figma.svg";
import zeplinIcon from "@/public/stackIcons/zeplin.svg";
import jestIcon from "@/public/stackIcons/jest.svg";
import cIcon from "@/public/stackIcons/c.svg";
import { StackListType } from "../_types/StackType";

export const FRONT_END_STACK: StackListType[] = [
  {
    id: 1,
    name: "Javascript",
    image: jsIcon,
  },
  {
    id: 2,
    name: "Typescript",
    image: tsIcon,
  },
  {
    id: 3,
    name: "React",
    image: reactIcon,
  },
  {
    id: 4,
    name: "Vue",
    image: vueIcon,
  },
  {
    id: 5,
    name: "Svelte",
    image: svelteIcon,
  },
  {
    id: 6,
    name: "NextJs",
    image: nextIcon,
  },
];

export const BACK_END_STACK: StackListType[] = [
  {
    id: 7,
    name: "NodeJs",
    image: nodeIcon,
  },
  {
    id: 8,
    name: "Java",
    image: javaIcon,
  },
  {
    id: 9,
    name: "Spring",
    image: springIcon,
  },
  {
    id: 10,
    name: "NestJs",
    image: nestIcon,
  },
  {
    id: 11,
    name: "Go",
    image: goIcon,
  },
  {
    id: 12,
    name: "Kotlin",
    image: kotlinIcon,
  },
  {
    id: 13,
    name: "Express",
    image: expressIcon,
  },
  {
    id: 14,
    name: "MySQL",
    image: mysqlIcon,
  },
  {
    id: 15,
    name: "MongoDB",
    image: mongoIcon,
  },
  {
    id: 16,
    name: "Python",
    image: pythonIcon,
  },
  {
    id: 17,
    name: "Django",
    image: djangoIcon,
  },
  {
    id: 18,
    name: "php",
    image: phpIcon,
  },
  {
    id: 19,
    name: "GraphQL",
    image: graphqlIcon,
  },
  {
    id: 20,
    name: "Firebase",
    image: firebaseIcon,
  },
];

export const MOBILE_STACK: StackListType[] = [
  {
    id: 21,
    name: "Flutter",
    image: flutterIcon,
  },
  {
    id: 22,
    name: "Swift",
    image: swiftIcon,
  },
  {
    id: 12,
    name: "Kotlin",
    image: kotlinIcon,
  },
  {
    id: 23,
    name: "ReactNative",
    image: reactnativeIcon,
  },
  {
    id: 24,
    name: "Unity",
    image: unityIcon,
  },
];

export const ETC_STACK: StackListType[] = [
  {
    id: 25,
    name: "AWS",
    image: aswIcon,
  },
  {
    id: 26,
    name: "Kubernetes",
    image: kubernetesIcon,
  },
  {
    id: 27,
    name: "Docker",
    image: dockerIcon,
  },
  {
    id: 28,
    name: "Git",
    image: gitIcon,
  },
  {
    id: 29,
    name: "Figma",
    image: figmaIcon,
  },
  {
    id: 30,
    name: "Zeplin",
    image: zeplinIcon,
  },
  {
    id: 31,
    name: "Jest",
    image: jestIcon,
  },
  {
    id: 32,
    name: "C",
    image: cIcon,
  },
];

const combinedStack = [...FRONT_END_STACK, ...BACK_END_STACK, ...MOBILE_STACK, ...ETC_STACK];

const uniqueStack = Array.from(new Map(combinedStack.map(item => [item.name, item])).values());

export const FULL_STACK_DATA: StackListType[] = uniqueStack;
