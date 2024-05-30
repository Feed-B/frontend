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
    name: "Nestjs",
    iamge: nestIcon,
  },
  {
    name: "Go",
    iamge: goIcon,
  },
  {
    name: "Kotlin",
    iamge: kotlinIcon,
  },
  {
    name: "Express",
    iamge: expressIcon,
  },
  {
    name: "MySQL",
    iamge: mysqlIcon,
  },
  {
    name: "MongoDB",
    iamge: mongoIcon,
  },
  {
    name: "Python",
    iamge: pythonIcon,
  },
  {
    name: "Django",
    iamge: djangoIcon,
  },
  {
    name: "php",
    iamge: phpIcon,
  },
  {
    name: "GraphQL",
    iamge: graphqlIcon,
  },
  {
    name: "Firebase",
    iamge: firebaseIcon,
  },
];

export const MOBILE_STACK: StackListType[] = [
  {
    name: "Flutter",
    iamge: flutterIcon,
  },
  {
    name: "Swift",
    iamge: swiftIcon,
  },
  {
    name: "Kotlin",
    iamge: kotlinIcon,
  },
  {
    name: "ReactNative",
    iamge: reactnativeIcon,
  },
  {
    name: "Unity",
    iamge: unityIcon,
  },
];

export const ETC_STACK: StackListType[] = [
  {
    name: "AWS",
    iamge: aswIcon,
  },
  {
    name: "Kubernetes",
    iamge: kubernetesIcon,
  },
  {
    name: "Docker",
    iamge: dockerIcon,
  },
  {
    name: "Git",
    iamge: gitIcon,
  },
  {
    name: "Figma",
    iamge: figmaIcon,
  },
  {
    name: "Zeplin",
    iamge: zeplinIcon,
  },
  {
    name: "Jest",
    iamge: jestIcon,
  },
  {
    name: "C",
    iamge: cIcon,
  },
];

const combinedStack = [...FRONT_END_STACK, ...BACK_END_STACK, ...MOBILE_STACK, ...ETC_STACK];

const uniqueStack = Array.from(new Map(combinedStack.map(item => [item.name, item])).values());

export const FULL_STACK_DATA: StackListType[] = uniqueStack;
