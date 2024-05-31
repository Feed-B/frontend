export interface ImageType {
  src: string;
  width: number;
  height: number;
  blurWidth: number;
  blurHeight: number;
}

export interface StackListType {
  id: number;
  name: string;
  image: ImageType;
}
