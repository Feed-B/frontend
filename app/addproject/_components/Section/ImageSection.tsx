import React from "react";
import ThumbnailBox from "../ImageBox/ThumbnailBox";
import ImageBox from "../ImageBox/ImageBox";

interface ImageSectionProps {
  title: string;
}

function ImageSection({ title }: ImageSectionProps) {
  return (
    <>
      {title == "썸네일" && <ThumbnailBox title={title} />}
      {title == "이미지" && <ImageBox title={title} />}
    </>
  );
}

export default ImageSection;
