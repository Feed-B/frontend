import { Image } from "../_types/ProjectType";

export const IMAGE_TYPE: Record<string, Image> = {
  WEB: { largeWidth: 572, smallWidth: 394, largeStyle: "w-[572px]", smallStyle: "w-[394px]", article: "min-w-[396px]" },
  MOBILE: {
    largeWidth: 188,
    smallWidth: 130,
    largeStyle: "w-[188px]",
    smallStyle: "w-[130px]",
    article: "min-w-[780px]",
  },
};
